class ArgumentsValidator {
  constructor({ input = '', output = '', shift = '', action = ''} = {}) {
    Object.assign(this, {input, output, shift, action});
  }
  shiftValidate() {
    return !!this.shift.match(/^(-)?\d+$/)
  }
  actionValidate() {
    return (this.action == 'decode' || this.action == 'encode')
  }
}

module.exports = ArgumentsValidator;