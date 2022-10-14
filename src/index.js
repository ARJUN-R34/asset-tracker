const Web3 = require('web3');

const validator = require('./utils/input-validator');
const chains = require('./chains');

class EVM {
  constructor(chainName) {
    validator.validateConstructor('EVM', chainName);
    this.chain = chainName;
    this.web3 = new Web3(new Web3.providers.HttpProvider(chains[chainName].RPC));
  }

  switchChain(chainName) {
    validator.validateConstructor('EVM', chainName);

    this.chain = chainName;
    this.web3 = new Web3(new Web3.providers.HttpProvider(chains[chainName].RPC));
  }

  async getNativeAssetBalance(address) {
    validator.validateAddress(address);

    const checksumAddress = this.web3.utils.toChecksumAddress(address);

    const balance = await this.web3.eth.getBalance(checksumAddress);

    return this.web3.utils.fromWei(balance.toString(), 'ether');
  }
}

class nonEVM {
  constructor(chainName) {
    validator('nonEVM', chainName);
    this.chain = chainName;
  }
}

module.exports = { EVM, nonEVM };
