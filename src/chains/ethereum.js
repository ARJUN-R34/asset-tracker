module.exports = {
  CHAIN_ID: 1,
  SYMBOL: 'ETH',
  NAME: 'Ethereum',
  RPC: 'https://rpc.ankr.com/eth',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api.etherscan.io/api?module=account&action=txlist',
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: true,
  },
};
