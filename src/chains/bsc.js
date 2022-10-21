module.exports = {
  CHAIN_ID: 56,
  SYMBOL: 'BNB',
  NAME: 'BSC',
  RPC: 'https://rpc.ankr.com/bsc',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api.bscscan.com/api?module=account&action=txlist',
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/binancecoin',
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
