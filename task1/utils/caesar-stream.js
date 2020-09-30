const fs = require('fs')

const CaesarStream = {
  readStream: function(input, charset = 'utf-8') {
    if (input) {
      fs.stat(input, function(err, stat) {
        if (err) {
          console.error('Invalid path to input file (or premission error)');
          process.exit(1)
        } 
      });
      return fs.createReadStream(input, charset);
    }
    console.log('Enter your text: ');
    return process.stdin;
  },
  writeStream: function(output) {
    if (output) {
      fs.stat(output, function(err, stat) {
        if(err) {
          console.error('Invalid path to output file (or premission error)');
          process.exit(1)
        } 
      });
      return fs.createWriteStream(output, {
        flags: 'a'
      });
    }
    return process.stdout;
  }
}

module.exports = CaesarStream;