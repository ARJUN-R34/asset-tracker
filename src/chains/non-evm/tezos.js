module.exports = {
    SYMBOL: 'XTZ',
    NAME: 'Tezos',
    DECIMALS: 6,
    IS_PROGRAMMABLE: true,
    ASSET_API: 'https://api.coingecko.com/api/v3/coins/tezos',
    GET_TXN_LIST_API(address) {
      return `https://api.tzkt.io/v1/accounts/${address}/operations?type=transaction`;
    },
    GET_TOKEN_API(address) {
      return ``;
    },
    FUNCTIONALITY_SUPPORT: {
      getNativeAssetDetails: true,
      getTransactions: true,
    },
};
