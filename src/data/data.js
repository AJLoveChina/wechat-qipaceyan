const fs = require('fs');
const path = require('path');

const yxlm = require('./yxlm');
const zjl = require('./zjl');
const hefei = require('./hefei');
const naojin = require('./naojin');
let data = {
  naojin,
  yxlm,
  zjl,
  hefei,
};

fs.writeFileSync(path.resolve("./dist-data/data.json"), JSON.stringify(data));
