'use strict';

var Utils = window.Utils || {};

Utils.convertCsvData = function(src, linesep, datasep) {
  linesep = linesep || '\n';
  datasep = datasep || ',';
  var rows = src.split(linesep);
  var i, unknownFieldCount;
  var temp = {};

  var header = rows[0];
  var headerElems = header.split(datasep);

  var dataBody = [];
  for (i = 1; i < rows.length; i++) {
    unknownFieldCount = 0;
    var currentRow = rows[i];
    if (!currentRow || currentRow === '') {
      continue;
    }
    var elems = currentRow.split(datasep);
    for (var j = 0; j < elems.length; j++) {
      var fieldName = headerElems[j];
      if (!fieldName || fieldName === '') {
        fieldName = '___FIELD' + unknownFieldCount++;
      }
      temp[fieldName] = elems[j];
    }
    dataBody.push(temp);
    temp = {};
  }

  return { data: dataBody };
};
