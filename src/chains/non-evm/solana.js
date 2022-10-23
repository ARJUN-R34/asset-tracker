module.exports = {
    SYMBOL: 'SOL',
    NAME: 'Solana',
    DECIMALS: 9,
    IS_PROGRAMMABLE: true,
    ASSET_API: 'https://api.coingecko.com/api/v3/coins/solana',
    GET_TXN_LIST_API(address) {
      return `https://public-api.solscan.io/account/transactions?account=${address}`;
    },
    GET_TOKEN_API(address) {
      return `https://public-api.solscan.io/account/tokens?account=${address}`;
    },
    FUNCTIONALITY_SUPPORT: {
      getNativeAssetDetails: true,
      getTransactions: true,
    },
};
