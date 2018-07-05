const Metalsmith = require('metalsmith');
const {
  markdown,
  //domTransform,
  layouts,
  assets,
  beautify,
} = require('load-metalsmith-plugins')();
const responsiveImages = require('./responsive-images');

Metalsmith(__dirname) 
  .metadata({ 
    sitename: "Responsive Image Testing",
    siteurl: "http://responsiveimagetesting.com/",
    description: "Testing the metalsmith-responsive-images plugin",
  })
  .source('./src') 
  .destination('./build') 
  .clean(true) 
  .use(markdown())
  .use(responsiveImages()) 
  .use(layouts({
    engine: 'pug',
    default: 'default.pug',
  }))
  .use(assets())
  .use(beautify())
  .build(function (err) {
    if (err) throw err; 
  });