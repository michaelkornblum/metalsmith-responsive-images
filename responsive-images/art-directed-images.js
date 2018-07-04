const getSourceTag = (name, ext, bp) =>
  `<source media="(max-width: ${bp}px)" srcset="${name}-${bp}px${ext}">`;

const getImgTag = (name, bp, ext, alt) =>
  `<img src="${name}-${bp}px${ext}" alt="${alt}" />`

module.exports = (name, ext, alt, breakpoints) => {
  let pictureTag = `<picture>`;
  breakpoints.forEach((bp) => {
    pictureTag += getSourceTag(name, ext, bp);
  });
  pictureTag += getImgTag(name, breakpoints[0], ext, alt);
  return pictureTag + '</picture>';
};