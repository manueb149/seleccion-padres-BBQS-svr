const xlsx = require('node-xlsx').default;

// Parse a file
const ws = xlsx.parse(`${__dirname}/families.xlsx`);

module.exports = ws[1].data;