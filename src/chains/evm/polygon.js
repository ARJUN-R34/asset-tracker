module.exports = {
  CHAIN_ID: 137,
  SYMBOL: 'MATIC',
  NAME: 'Polygon',
  RPC: 'https://rpc.ankr.com/polygon',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api.polygonscan.com/api?module=account&action=txlist',
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/matic-network',
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: true,
    switchChain: true,
    getNativeAssetBalance: true,
    getFungibleTokenDetails: true,
    getNFTDetails: true,
    getNativeAssetDetails: true,
  },
};
