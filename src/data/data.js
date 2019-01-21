const fs = require('fs');
const path = require('path');

const yxlm = require('./yxlm');
const zjl = require('./zjl');
let data = {
  yxlm,
  zjl,
};

fs.writeFileSync(path.resolve("./dist-data/data.json"), JSON.stringify(data));
