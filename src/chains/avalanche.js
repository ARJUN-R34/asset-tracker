module.exports = {
  CHAIN_ID: 43114,
  SYMBOL: 'AVAX',
  NAME: 'Avalanche',
  RPC: 'https://rpc.ankr.com/avalanche',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api.snowtrace.io/api?module=account&action=txlist',
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: true,
  },
};
