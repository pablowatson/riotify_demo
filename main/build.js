const browserify = require('browserify');
const riotify = require('riotify');

const b = browserify('./index.js', {
  insertGlobalVars: {
    riot: function() {
      return "require('riot')";
    },
  },
});

b.transform(riotify, { global: true });
b.bundle().pipe(process.stdout);
