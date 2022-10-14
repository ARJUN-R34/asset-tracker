module.exports = {
  invalidInit(chain) {
    return `Invalid chain selected - ${chain}.`;
  },
  invalidAddress(address) {
    return `Address ${address} passed is invalid.`;
  },
  INVALID_ADDRESS: 'Invalid address passed.',
};
