'use strict';

// requires: jQuery, lodash

/**
  * 共通ユーティリティ
  */
var Utils = {
  nextInt: function(num) {
    num = num || 1;
    return Math.floor(Math.random() * num) + 1;
  },

  nextBoolean: function() {
    if (this.nextInt(2) === 1) {
      return true;
    } else {
      return false;
    }
  },

  join: function(collection, delim) {
    delim = delim || ',';
    var ret = '', d = '';
    $.each(collection, function() {
      ret += d;
      ret += this;
      d = delim;
    });
    return ret;
  },

  mkString: function(collection, start, delim, end) {
    start = start + '';
    end = end + '';
    return start + this.join(collection, delim) + end;
  },

  rollDice: function(countExpr, sidesExpr) {
    var count = countExpr | 0;
    var sides = sidesExpr | 0;
    var result = [];
    for (var i = 0; i < count; i++) {
      result.push(this.nextInt(sides));
    }
    return result;
  }
};


/**
  * ページ固有の処理
  */
var Page = function() {

  this.knownWarpriestsDomains = ['嵐', '死', '専制', '太陽', '地', '知識',
    '月', '秘術'];

  this.narrativeDivineKeywords = ['フェイ', 'ドワーフ', 'ドラゴン', 'ジャイアント',
    '地獄', 'アビス', '水', '風', '火']

  this.alignments = ['無属性', '秩序にして善', '善', '悪', '混沌にして悪'];

  this.domainRefVisible = false;
  this.jsonUtilsVisible = false;
  this.japaneseLocale = false;

  this.generatedPantheonData = null;
};


/**
  * 『信仰の書』の領域とウォープリーストの領域対応表ヘッダを作成する.
  */
Page.prototype.createDomainHeader = function() {
  var headTag = function(name) {
    return '<th>' + name + '</th>';
  };
  var rawHeaders = function(names) {
    var html = '<thead><tr>';
    for (var i = 0; i < names.length; i++) {
      html += headTag(names[i]);
    };
    return html + '</tr></thead>';
  };

  var headerElems = ['領域(DP)'].concat(this.knownWarpriestsDomains);
  $('#divinity-ref-data').append(rawHeaders(headerElems));
}


Page.prototype.createDomainRows = function() {
  var cellTag = function(name) {
    return '<td>' + name + '</td>';
  };
};


/**
  * AppData.jsに定義されている要素をシャッフルしてパンテオンをランダム生成.
  */
Page.prototype.generatePantheon = function() {

  var generateSingleDeity = function(
    id, remainingDomains, remainingNames, narrativeToAssign) {
    var assignName = _.sample(remainingNames);
    _.remove(remainingNames, assignName);

    var specifiedDeity = {
      'id': id,
      'name': assignName.name,
      'nameJa': assignName.nameJa,
      'domains': [narrativeToAssign.domain],
      'domainsJa': [narrativeToAssign.domainJa]
    };

    var domainsCount = Utils.nextInt(3);
    while (domainsCount > 0) {
      var chosenDomain = _.sample(_.filter(remainingDomains, function(entry) {
        return entry.alignment === 0 || entry.alignment === narrativeToAssign.alignment;
      }));
      if (!chosenDomain) {
        break;
      }
      specifiedDeity.domains.push(chosenDomain.title);
      specifiedDeity.domainsJa.push(chosenDomain.titleJa);
      _.remove(remainingDomains, chosenDomain);
      domainsCount--;
    }
    specifiedDeity.domains.push(narrativeToAssign.narrative);
    specifiedDeity.domainsJa.push(narrativeToAssign.narrativeJa);

    return specifiedDeity;
  };

  var domains = _.cloneDeep(AppData.divinity.divinePowerDomains);
  var names = _.cloneDeep(AppData.names.supernatural);
  var pantheonSize = Utils.nextInt(8) + 8;

  var pantheon = [];
  var deity = {};

  for (var i = 0; i < pantheonSize; i++) {
    domains = _.shuffle(domains);
    names = _.shuffle(names);
    var heavyDomains = _.filter(domains, { 'weight': 1 });
    var utmost = _.sample(heavyDomains);

    var name = _.sample(names);

    deity.id = i;
    deity.name = name.name;
    deity.nameJa = name.nameJa;
    deity.alignment = utmost.alignment;

    deity['domains'] = deity.domains || [];
    deity.domains.push(utmost.title);
    deity['domainsJa'] = deity.domainsJa || [];
    deity.domainsJa.push(utmost.titleJa);

    pantheon.push(deity);
    deity = {};
    _.remove(domains, utmost);
    _.remove(names, name);
  }

  var tagsFrequency = {};
  _.forEach(pantheon, function(p) {
    var domainsOwning = Utils.nextInt(4) - 1;
    for (var j = 0; j < domainsOwning; j++) {
      var candidates = _.filter(domains, function (entry) {
        return entry.alignment === 0 || entry.alignment === p.alignment;
      });
      if (!candidates || candidates.length === 0) {
        break;
      }
      var subDomain = _.sample(candidates);
      while (_.indexOf(p.domains, subDomain.title) > -1) {
        subDomain = _.sample(candidates);
      }
      var tag = subDomain.title;
      var freq = tagsFrequency[tag] || 0;
      var retryCount = 0;
      // if tag is already used, retry few times.
      while (candidates.length > 1 && retryCount < 5 && freq > 0) {
        subDomain = _.sample(_.without(candidates, subDomain));
        tag = subDomain.title;
        freq = tagsFrequency[tag] || 0;
        retryCount++;
      }
      if (_.indexOf(p.domains, tag) === -1) {
        tagsFrequency[tag] = ++freq;
        p.domains.push(tag);
        p.domainsJa.push(subDomain.titleJa);
      }

      if (subDomain.weight === 1 || freq > 1) {
        _.remove(domains, subDomain);
      }
    }
  });

  // fill narratives.
  var narratives = _.cloneDeep(AppData.divinity.acceptableNarrativeDomains);
  _.forEach(narratives, function(n) {
    var keyDomain = n.domain;
    var accepted = _.find(_.shuffle(pantheon), function(p) {
      if (p.domains.length < 2) {
        return false;
      } else {
        return p.domains[0] === keyDomain || p.domains[1] === keyDomain;
      }
    });
    if (accepted) {
      accepted.domains.push(n.narrative);
      accepted.domainsJa.push(n.narrativeJa);
    } else if (n.weight === 1) {
      console.log(pantheon.length);
      pantheon.push(
        generateSingleDeity(pantheon.length, domains, names, n)
      );
    }
  });

  return pantheon;
}


/**
  * サイコロ機能.
  */
Page.prototype.doDiceRoll = function() {
  var result = Utils.rollDice(
    $('#dice-counts').val(), $('#dice-sides').val());
  if (result.length === 0) {
    console.log('ダイスロール失敗');
  } else {
    $('#roll-result').val(Utils.join(result, ', '));
  }
};


Page.prototype.toggleElementVisibility = function(selector, visibility, displayStyle) {
  var $target = $(selector);
  if (visibility === true) {
    $target.css('display', displayStyle);
  } else {
    $target.css('display', 'none');
  }
};


/**
  * ページの初期表示.
  */
Page.prototype.init = function() {
  var self = this;

  // デバッグ出力領域クリアボタン
  $('#clear-debug-ta').click(function() {
    $('#debug-ta').text('');
    if (self.generatedPantheonData !== null) {
      self.generatedPantheonData = null;
    }
  });
  // ロケール切り替え
  $('#switch-jp-locale').click(function() {
    self.japaneseLocale = !(self.japaneseLocale);
  });

  // 領域対応表トグルのハンドラ
  $('#toggle-domain-refs').click( function() {
    self.domainRefVisible = !(self.domainRefVisible);
    self.toggleElementVisibility(
      '#divinity-ref-data',
      self.domainRefVisible,
      'table'
    );
  });

  // サイコロ機能のハンドラ
  $('#roll-button').click( function() {
    self.doDiceRoll();
  });

  // JSON書式整形機能のハンドラ
  $('#toggle-json-utils').click( function() {
    self.jsonUtilsVisible = !(self.jsonUtilsVisible);
    self.toggleElementVisibility(
      '#json-utils',
      self.jsonUtilsVisible,
      'block'
    )
  });
  $('#json-format').click( function() {
    var input = $('#json-formatter-ta').val();
    $('#debug-ta').text(
      JSON.stringify(Utils.convertCsvData(input, '\n', '\t')));
  })

  // パンテオン生成ボタンのハンドラ
  $('#generate-pantheon').click( function() {
    var jpLocale = (self.japaneseLocale) ? 'Ja' : '';
    if (self.generatedPantheonData === null) {
      self.generatedPantheonData = self.generatePantheon();
    }
    //console.log(JSON.stringify(pantheon));
    var dataArray = [];
    _.forEach(self.generatedPantheonData, function(p) {
      var v = [p.id, p['name' + jpLocale]];
      dataArray.push(_.join(v.concat(p['domains' + jpLocale]), '\t'));
    });
    $('#debug-ta').text(_.join(dataArray, '\n'));
  });

  self.createDomainHeader();
  $('#divinity-ref-data').css('display', 'none');
};
