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

function checkSupportForChains(chain, functionName) {
  if (!chains[chain].FUNCTIONALITY_SUPPORT[functionName]) {
    throw responses.functionalityNotSupported(functionName, chain);
  }
}

async function validateContractAddress(Web3, contractAddress) {
  try {
    const code = await Web3.eth.getCode(contractAddress);

    if (code === '0x') {
      throw responses.invalidContractAddress(contractAddress);
    }
  } catch (err) {
    throw responses.invalidContractAddress(contractAddress);
  }
}

function validateFunctionName(functionName) {
  if (!chains.supportedFunctions.includes(functionName) && functionName !== 'all') {
    throw responses.invalidFunctionName(functionName);
  }
}

module.exports = {
  validateConstructor,
  validateAddress,
  checkSupportForChains,
  validateContractAddress,
  validateFunctionName,
};
