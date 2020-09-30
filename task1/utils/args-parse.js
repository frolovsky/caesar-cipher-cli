const { Command } = require('commander');
const program = new Command();

exports.args = program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <num>', 'shift number')
  .option('-i, --input <path>', 'Input file for encode/decode')
  .option('-o, --output <path>', 'Output file with result of CLI')
  .requiredOption('-a, --action <action>', 'An action with file (encode/decode)')
  .parse(process.argv);

