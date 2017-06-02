var thumbler = require('../../');

var options1 = {
  size : {
    width:  300,
    height: 120
  }
}

var options2 = {
  size : {
    width:  300
  }
}

var options3 = {
  size : {
    height: 120
  }
}


thumbler.extract('image.png', 'thumb1.jpg', options1, function(error){
  if(!error) {
	   console.log('thumbnail saved to thumb1.jpg (300x120)');
  } else {
    console.log(error);
  }
});

thumbler.extract('image.png', 'thumb2.jpg', options2, function(error){
  if(!error) {
	   console.log('thumbnail saved to thumb2.jpg (300x?)');
  } else {
    console.log(error);
  }
});

thumbler.extract('image.png', 'thumb3.jpg', options3, function(error){
  if(!error) {
	   console.log('thumbnail saved to thumb3.jpg (?x120)');
  } else {
    console.log(error);
  }
});

thumbler.extract('image.png', 'thumb4.jpg', null, function(error){
  if(!error) {
	   console.log('thumbnail saved to thumb4.jpg (default)');
  } else {
    console.log(error);
  }
});
