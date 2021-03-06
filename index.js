const domTransform = require('metalsmith-dom-transform');
const responsiveImageTransform = require('./lib/responsive-image-transform');

module.exports = function (options) {
  return domTransform({
    transforms: [responsiveImageTransform(options)],
  });
};