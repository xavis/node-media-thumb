var exec, image, path;
exec = require('child_process').exec;
path = require('path');

function isImage(source) {
      var filetype = path.extname(source);
      if(filetype == ".jpg" || filetype == ".jpeg" || filetype == ".png" || filetype == ".gif") {
        return true;
      } return false;
}

module.exports = {

  extract: function(source, destPath, options, callback) {

    if(!options) {
      options = {};
    }

    size = `-vf "scale=160:-1"`;

    if(options.size) {
      if(options.size.width && options.size.height) {
        size = "-s " + options.size.width + "x" + options.size.height;
      } else if(options.size.width) {
        size = `-vf "scale=${options.size.width}:-1"`;
      } else if(options.size.height) {
        size = `-vf "scale=-1:${options.size.height}"`;
      }
    }

    if(isImage(source)) {
      return exec('ffmpeg -i ' + source + ' -y ' + size + ' ' + destPath, function( err ) {
        if (callback) {
          return callback( err );
        }
      });
    } else {

      if (options.time == null) {
        options.time = '00:00:01';
      }
      console.log('ffmpeg -ss ' + options.time + ' -i ' + source + ' -y ' + size + ' -vframes 1 -f image2 ' + destPath);
      return exec('ffmpeg -ss ' + options.time + ' -i ' + source + ' -y ' + size + ' -vframes 1 -f image2 ' + destPath, function( err ) {
        if (callback) {
          return callback( err );
        }
      });
    }
  }
};
