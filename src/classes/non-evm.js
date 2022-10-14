const validator = require('../utils/input-validator');

class nonEVM {
  constructor(chainName) {
    validator('nonEVM', chainName);
    this.chain = chainName;
  }
}

module.exports = nonEVM;
