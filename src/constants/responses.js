module.exports = {
  invalidInit(chain) {
    return `Invalid chain selected - ${chain}.`;
  },
  invalidAddress(address) {
    return `Address ${address} passed is invalid.`;
  },
  functionalityNotSupported(functionName, chain) {
    return `${functionName} function is currently not supported on ${chain} chain.`;
  },
  invalidContractAddress(contractAddress) {
    return `Address ${contractAddress} is not a valid contract address.`;
  },
  invalidFunctionName(functionName) {
    return `${functionName} - Invalid function name passed.`;
  },
  INVALID_ADDRESS: 'Invalid address passed.',
  INVALID_TYPE_PASSED: 'The type value has to be "incoming" or "outgoing" or left empty.',
};
