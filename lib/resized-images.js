const getSrcsetItem = (name, size, ext, eol = false) => {
  let returned = `${name}-${size}px${ext} ${size}w`;
  if (!eol) {
    returned += `, `;
  }
  return returned;
}

const getSrcset = (name, breakpoints, ext) => {
  let srcset = '';
  breakpoints.forEach((bp, index) => {
    if (index !== breakpoints.length -1) {
      srcset += getSrcsetItem(name, bp, ext);
    } else {
      srcset += getSrcsetItem(name, bp, ext, true);
    }
  });
  return srcset;
};

const getSizeItem = (size, eol = false) => {
  if (!eol) {
    return `(max-width: ${size}px) ${size}px, `;
  } else {
    return `${size}px`;
  }
};

const getSizes = (breakpoints) => {
  let sizes = '';
  breakpoints.forEach((bp, index) => {
    if (index !== breakpoints.length - 1) {
      sizes += getSizeItem(bp)
    } else {
      sizes += getSizeItem(bp, true);
    }
  });
  return sizes;
};

const getImageTag = (srcset, sizes, name, breakpoints, ext, alt) =>
  `<img srcset="${srcset}" sizes="${sizes}" src="${name}-${breakpoints[0]}px${ext}" alt="${alt}"/>`;

module.exports = (name, ext, alt, breakpoints) => {
  let srcset = getSrcset(name, breakpoints, ext);
  let sizes = getSizes(breakpoints);
  return getImageTag(srcset, sizes, name, breakpoints, ext, alt);
};