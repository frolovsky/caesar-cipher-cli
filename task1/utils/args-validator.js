const path = require('path');

class ArgumentsValidator {
  constructor({ input = '', output = '', shift = '', action = ''} = {}) {
    Object.assign(this, {input, output, shift, action});
    if (this.input !== '') {
      this.input = path.resolve(this.input)
    }
    if (this.output !== '') {
      this.output = path.resolve(this.output)
    }
  }
  shiftValidate() {
    return !!this.shift.match(/^(-)?\d+$/)
  }
  actionValidate() {
    return (this.action == 'decode' || this.action == 'encode')
  }
}

module.exports = ArgumentsValidator;