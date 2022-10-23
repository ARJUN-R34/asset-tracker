module.exports = {
    SYMBOL: 'BTC',
    NAME: 'Bitcoin',
    DECIMALS: 8,
    IS_PROGRAMMABLE: false,
    ASSET_API: 'https://api.coingecko.com/api/v3/coins/bitcoin',
    GET_TXN_LIST_API(address) {
      return `https://blockchain.info/address/${address}?format=json`;
    },
    FUNCTIONALITY_SUPPORT: {
      getNativeAssetDetails: true,
      getTransactions: true,
    },
};
