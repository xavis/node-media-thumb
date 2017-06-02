# media-thumb

  Extract snapshots from images and video at a given time. Requires ffmpeg.
  
  This module has been created as a fork of [Vadim Demedes' video-thumb](https://github.com/vadimdemedes/node-video-thumb) repo.

# Installation

```npm install media-thumb```

# Usage

```
var thumbler = require('media-thumb');

//VIDEO EXAMPLE

var videoOptions = {
	time : "00:00:22",
	size: {
		width: 200,
		height: 125
	}
}

thumbler.extract('video.mp4', 'thumbnail', videoOptions, 

function() {
	
	console.log('thumbnail saved to thumbnail (200x125) with a frame at 00:00:22');
	
});
	
//IMAGE EXAMPLE
	
	
var imageOptions = {
	size: {
		width: 200,
		height: 125
	}
});

thumbler.extract('image.png', 'snapshot.png', imageOptions, 

function() {
	
	console.log('thumbnail saved to thumbnail (200x125)');

});
```

For more examples please see the **examples** folder.

## License 

(The MIT License)

Copyright **media-thumb** (c) 2017 Javier Sánchez Riquelme
&lt;xavi_hdlie@hotmail.com&gt;

Copyright **video-thumb** (c) 2011 Vadim Demedes &lt;sbioko@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.