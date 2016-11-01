'use strict';

var EyeCandy =function(opt) {
  // ctor
  this.sampleClassFeatureData = {
    name: 'クレリック（テンプラー）',
    weapons: '単純近接、単純遠隔',
    armors: 'クロース、レザー、ハイド、チェインメイル',
    'implements': '聖印'
  };
};

EyeCandy.prototype.init = function() {
  $('#exec-greeter').click(function() {
    alert('hi!');
  });
};
