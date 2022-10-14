const chains = require('../chains');
const responses = require('../constants/responses');

function validateConstructor(chainType, chainName) {
   if (chainType === 'EVM' && chains.evmChains[chainName] === undefined || chainType === 'nonEVM' && chains.nonEvmChains[chainName] === undefined) {
    throw responses.invalidInit(chainName);
   }
}

module.exports = { validateConstructor }
