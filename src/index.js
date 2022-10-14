const Web3 = require('web3');

const validator = require('./utils/inputValidator');
const chains = require('./chains');

class EVM {
  constructor(chainName) {
    validator.validateConstructor('EVM', chainName);
    this.chain = chainName;
    this.web3 = new Web3(new Web3.providers.HttpProvider(chains[chainName].RPC));
  }
}

class nonEVM {
  constructor(chainName) {
    validator('nonEVM', chainName);
    this.chain = chainName;
  }
}

module.exports = { EVM, nonEVM };
