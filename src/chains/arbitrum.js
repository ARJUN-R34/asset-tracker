module.exports = {
  CHAIN_ID: 42161,
  SYMBOL: 'ETH',
  NAME: 'Arbitrum',
  RPC: 'https://rpc.ankr.com/arbitrum',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api.arbiscan.io/api?module=account&action=txlist',
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: false,
    switchChain: true,
    getNativeAssetBalance: true,
    getFungibleTokenDetails: true,
    getNFTDetails: true,
  },
};
