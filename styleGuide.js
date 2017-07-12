var fs = require('fs');
var postcss = require('postcss');
var styleguide = require('postcss-style-guide');
var input = fs.readFileSync('css/envoy.css', 'utf8');

var output = postcss([
  styleguide
]).process(input)
.then(function (result) {
  var output = fs.readFileSync('styleGuide/index.html', 'utf8');
  // console.log('output:', output);
});
