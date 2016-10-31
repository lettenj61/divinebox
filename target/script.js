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
  // should be implemented!!

  this.primaryDomains = ['嵐', '狂気', '裁き', '死', '自然', '専制',
    '戦争', '太陽', '地', '力', '知識', '月', '破壊', '秘術', '文明', '闇'];

  this.knownWarpriestsDomains = ['嵐', '死', '専制', '太陽', '地', '知識',
    '月', '秘術'];

  this.narrativeDivineKeywords = ['フェイ', 'ドワーフ', 'ドラゴン', 'ジャイアント',
    '地獄', 'アビス', '水', '風', '火']

  this.alignments = ['無属性', '秩序にして善', '善', '悪', '混沌にして悪'];

  this.domainRefVisible = false;

  this.gridView = null;
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
  var domains = _.cloneDeep(AppData.divinity.powerElements);
  var pantheonSize = Utils.nextInt(8) + 8;

  var pantheon = [];
  var deity = {};

  for (var i = 0; i < pantheonSize; i++) {
    domains = _.shuffle(domains);
    var heavyDomains = _.filter(domains, { 'weight': 1 });
    var utmost = _.sample(heavyDomains);

    deity.id = i;
    deity.alignment = utmost.alignment;

    deity['domains'] = deity.domains || [];
    deity.domains.push(utmost.title);

    pantheon.push(deity);
    deity = {};
    _.remove(domains, utmost);
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
      // if tag is already used, retry just one time.
      if (freq > 0) {
        subDomain = _.sample(_.without(candidates, subDomain));
        tag = subDomain.title;
        freq = tagsFrequency[tag] || 0;
      }
      tagsFrequency[tag] = ++freq;
      p.domains.push(tag);

      if (subDomain.weight === 1 || freq > 1) {
        _.remove(domains, subDomain);
      }
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


Page.prototype.toggleDomainRefVisibility = function(visible) {
  var $tbl = $('#divinity-ref-data');
  if (visible) {
    $tbl.css('display', 'table');
  } else {
    $tbl.css('display', 'none');
  }
};


/**
  * ページの初期表示.
  */
Page.prototype.init = function() {
  var self = this;

  // 領域対応表トグルのハンドラ
  $('#toggle-domain-refs').click( function() {
    self.domainRefVisible = !(self.domainRefVisible);
    self.toggleDomainRefVisibility(self.domainRefVisible);
  });

  // サイコロ機能のハンドラ
  $('#roll-button').click( function() {
    self.doDiceRoll();
  });

  // パンテオン生成ボタンのハンドラ
  $('#generate-pantheon').click( function() {
    var pantheon = self.generatePantheon();
    console.log(JSON.stringify(pantheon));
    var dataArray = [];
    _.forEach(pantheon, function(p) {
      dataArray.push(p.id + '\t' + _.join(p.domains, '\t'));
    });
    $('#handson-sample').empty();
    // new Handsontable(
    //   document.getElementById('handson-sample'),
    //   {data: dataArray}
    // );
    $('#debug-ta').text(_.join(dataArray, '\n'));
  });

  self.createDomainHeader();
  $('#divinity-ref-data').css('display', 'none');
};
