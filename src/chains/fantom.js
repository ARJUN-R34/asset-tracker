module.exports = {
  CHAIN_ID: 250,
  SYMBOL: 'FTM',
  NAME: 'Fantom',
  RPC: 'https://rpc.ankr.com/fantom',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api.ftmscan.com/api?module=account&action=txlist',
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: false,
  },
};
