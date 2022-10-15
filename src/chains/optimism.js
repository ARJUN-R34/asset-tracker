module.exports = {
  CHAIN_ID: 10,
  SYMBOL: 'ETH',
  NAME: 'Optimism',
  RPC: 'https://rpc.ankr.com/optimism',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api-optimistic.etherscan.io/api?module=account&action=txlist',
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: false,
  },
};
