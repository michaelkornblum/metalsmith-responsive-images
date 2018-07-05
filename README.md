# metalsmith-responsive-images

Convert markdown image tags to responsive images with metalsmith.

## Why do I need this?

Under normal circumstances, markdown does not support responsive images. For example, if I was to add this piece of markdown syntax to an article ...

```md
![image test](images/my-image.jpg);
```

I'd get something like this.

```html
<image src="images/my-image.jpg" alt="image test" />
```

Back in the day this result would have been acceptible. But the HTML `img` element has grown up since markdown was created to support responsive web design. Additionally a new `picture` element has been introduced to the HTML specification for those who like doing things like art direction.

With all this being said, I still love markdown as it allows me to create web content quickly and easily. So how do I support modern web standards and other best practices without retiring markdown?

### metalsmith-dom-transform to the rescue
As it turns out, I didn't have to retire markdown. Some time ago, a Metalsmith community member named Fortes created a really cool Metalsmith plugin called [metalsmith-dom-transform](https://github.com/fortes/metalsmith-dom-transform). 

**metalsmith-dom-transform** allows me to take the HTML in my metalsmith build and perform additional changes to the document. Additionally, this plugin provides an easy to understand API which allowed me to build this plugin.

## How to use metalsmith-responsive-images

Full documentation coming soon.