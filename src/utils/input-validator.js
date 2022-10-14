const web3 = require('web3');

const chains = require('../chains');
const responses = require('../constants/responses');

function validateConstructor(chainType, chainName) {
  if (chainType === 'EVM' && chains.evmChains[chainName] === undefined || chainType === 'nonEVM' && chains.nonEvmChains[chainName] === undefined) {
    throw responses.invalidInit(chainName);
  }
}

function validateAddress(address) {
  const checksumAddress = web3.utils.toChecksumAddress(address);

  const isValidAddress = web3.utils.isAddress(checksumAddress);

  if (!isValidAddress) {
    throw responses.invalidAddress(address);
  }
}

module.exports = {
  validateConstructor,
  validateAddress,
};
