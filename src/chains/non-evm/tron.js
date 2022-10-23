module.exports = {
    SYMBOL: 'TRX',
    NAME: 'Tron',
    DECIMALS: 6,
    IS_PROGRAMMABLE: true,
    ASSET_API: 'https://api.coingecko.com/api/v3/coins/tron',
    GET_TXN_LIST_API(address) {
      return `https://api.trongrid.io/v1/accounts/${address}/transactions`;
    },
    GET_TOKEN_API(address) {
      return ``;
    },
    FUNCTIONALITY_SUPPORT: {
      getNativeAssetDetails: true,
      getTransactions: true,
    },
};
