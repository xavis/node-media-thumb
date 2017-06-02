var thumbler = require('../../');

var options1 = {
  time : '00:00:05',
  size : {
    width:  300,
    height: 120
  }
}

var options2 = {
  time : '00:00:35',
  size : {
    width:  300
  }
}

var options3 = {
  time : '00:01:15',
  size : {
    height: 120
  }
}

thumbler.extract('video.mp4', 'thumb1.jpg', options1, function(error){

  if (!error) {
    console.log('thumbnail saved to thumb1.jpg (300x120) with a frame at 00:00:05');
  } else {
    console.log(error)
  }

});

thumbler.extract('video.mp4', 'thumb2.jpg', options2, function(error){
  if (!error) {
	console.log('thumbnail saved to thumb2.jpg with width 300px and frame at 00:01:15');
  } else {
    console.log(error)
  }
});

thumbler.extract('video.mp4', 'thumb3.jpg', options3, function(error){
  if (!error) {
	console.log('thumbnail saved to thumb3.jpg with height 120px with a frame at 00:00:05');
  } else {
    console.log(error)
  }
});

thumbler.extract('video.mp4', 'thumb4.jpg', null, function(error){
  if (!error) {
	console.log('thumbnail saved to thumb4.jpg');
  } else {
    console.log(error)
  }
});
