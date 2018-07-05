const adi = require('./art-directed-images');
const ri = require('./resized-images');

const defaults = {
  breakpoints: [
    380,
    420,
    768,
    992,
    1198,
  ],
  artDirected: {
    dir: 'art-directed',
    media: 'max-width',
    sizeUnit: 'px',
  },
  resized: {
    dir: 'resize',
    media: 'max-width',
    sizeUnit: 'px',
  }
}

module.exports = (opts) => {
  let normalizedOptions = Object.assign({}, defaults, opts);

  return function responsiveImages(root, data, metalsmith, done) {
    Array.from(root.querySelectorAll('img')).forEach((image) => {

      // set variables
      let parent = image.parentNode;
      let src = image.src;
      let name = src.slice(0, src.lastIndexOf('.'));
      let ext = src.slice(src.lastIndexOf('.'));
      let alt = image.alt;
      let { breakpoints } = normalizedOptions;

      // which transform are we going to call?
      if (image.src.indexOf(normalizedOptions.resized.dir) !== -1) {
        elem = ri(name, ext, alt, breakpoints);
        elemType = 'img';
      } else {
        elem = adi(name, ext, alt, breakpoints);
        elemType = 'picture';
      }
      parent.innerHTML = elem;
      elem = root.querySelector(elemType);
      parent.after(elem);
      parent.remove();
    });
    done();
  }
}
