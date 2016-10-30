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
Page.prototype.generatePantheon = function(classicFantasyTaste) {
  classicFantasyTaste = classicFantasyTaste || true;

  var self = this;
  var data = _.shuffle(AppData.divinity.primalFactors);
  // 神格の数は(1d6+6)柱
  var pantheonSize = Utils.nextInt(6) + 6;
  var pantheon = [];
  var divinityId = 0;
  var i, divinity, element;
  for (i = 0; i < data.length; i++) {

    if (divinityId >= pantheonSize) {
      divinityId = 0;
    }

    element = data[i];
    divinity = pantheon[divinityId];
    if (divinity) {
      // 領域を付与することで属性が反転するならスキップする.
      // Unalignedな領域はどの属性の神格にも付与できる.
      // Unalignedな神格にGood / Evilの領域が付与されたら、属性が変わる.
      if (element.alignment !== 0 &&
        divinity.alignment + element.alignment === 0) {
        continue;
      } else {
        if (divinity.alignment === 0 &&
          element.alignment !== 0) {
          divinity.alignment = element.alignment;
        }
      }

      divinity.domains = _.uniq(
        _.concat(divinity.domains, element.provides));
      divinity.powers = _.concat(divinity.powers, element.titleJa);

    } else {
      divinity = {};
      divinity['id'] = divinityId;
      divinity['domains'] = element.provides;
      divinity['powers'] = [element.titleJa];
      divinity['alignment'] = element.alignment;

      pantheon.push(divinity);
    }

    divinityId++;
  }

  // ナラティヴのタグをあてはめる.
  data = _.shuffle(AppData.divinity.narrativeFactors);
  var expelDislikes = Utils.nextBoolean();
  var racialTags = ['フェイ', 'ドラゴン', 'ドワーフ', 'ジャイアント', 'アビス', '地獄'];
  var limit = 99;
  var x = 1;
  while (x < limit && data.length !== 0) {
    element = _.sample(data);
    // 属性が矛盾しないか、無属性の候補を先頭から探索.
    divinity = _.find(pantheon, function(entry) {
      return (entry.alignment === 0 || entry.alignment === element.alignment);
    });

    var expels = [];
    var narrativitySatisfied = true;
    // 競合する要素が存在するかどうかを検査
    if (element.expels.length !== 0) {
      expels = _.map(element.expels, function(index) {
        return self.primaryDomains[index];
      });
      for (var k = 0; k < expels.length; k++) {
        if (_.indexOf(divinity.powers, expels[k]) !== -1) {
          narrativitySatisfied = false;
          break;
        }
      }
    }

    // 種族ナラティヴは1柱につき1つ.
    if (_.includes(racialTags, element.titleJa) && divinity.hasRacialTag) {
      narrativitySatisfied = false;
    }

    if (narrativitySatisfied) {

      if (_.includes(racialTags, element.titleJa)) {
        divinity.hasRacialTag = true;
      }

      // 属性が変わる場合は上書き.
      if (divinity.alignment !== element.alignment) {
        divinity.alignment = element.alignment;
      }

      divinity.narratives = divinity.narratives || [];
      divinity.narratives.push(element.titleJa);

      _.remove(data, element);
    }
    var _debugOut = JSON.stringify({
      divinity: divinity,
      narrative: element.titleJa,
      expels: expels
    });
    console.log(_debugOut);

    // 無作為に抽出するためにシャッフル.
    pantheon = _.shuffle(pantheon);
    x++;
  }

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
    for (var i = 0; i < pantheon.length; i++) {
      var p = pantheon[i];
      dataArray.push([
        p.id,
        Utils.join(p.powers),
        (p.narratives) ? Utils.join(p.narratives) : ''
      ]);
    }
    $('#handson-sample').empty();
    new Handsontable(
      document.getElementById('handson-sample'),
      {data: dataArray}
    );
  });

  self.createDomainHeader();
  $('#divinity-ref-data').css('display', 'none');
};
