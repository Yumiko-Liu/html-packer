var path = require('path');
var fs = require('fs');
var glob = require('glob');

module.exports = {
  getMultiEntry: function (_path) {
    var files = glob.sync(_path + '*');
    var newEntries = {};
    files.forEach(function(f) {
      var name = path.parse(f).base;
      newEntries[name] = f + '/index.js';
    });
    return newEntries;
  }
}


