const through = require('through2')
const { pipeline } = require('stream');

const { args } = require('./utils/args-parse')
const { encode, decode } = require('./utils/cipher')
const ArgumentsValidator = require('./utils/args-validator')
const cs = require('./utils/caesar-stream')

const av = new ArgumentsValidator(args.opts())

if (!av.actionValidate()) {
  console.error("Invalid action value. Must be equal to 'decode' or 'encode'")
  process.exit(1)
}
if (!av.shiftValidate()) {
  console.error('Invalid shift value. Must be number')
  process.exit(1)
}

pipeline(
  cs.readStream(av.input),
  through(av.action.toString() === 'encode' ? encode(av.shift) : decode(av.shift)),
  cs.writeStream(av.output),
  err => {
    if (err) { 
      if (err.code === 'EISDIR') {
        console.error('Error: You put directory to input/output')
      }
      process.exit(1)
    }
  }
)
