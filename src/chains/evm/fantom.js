module.exports = {
  CHAIN_ID: 250,
  SYMBOL: 'FTM',
  NAME: 'Fantom',
  RPC: 'https://rpc.ankr.com/fantom',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api.ftmscan.com/api?module=account&action=txlist',
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/fantom',
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: false,
    switchChain: true,
    getNativeAssetBalance: true,
    getFungibleTokenDetails: true,
    getNFTDetails: true,
    getNativeAssetDetails: true,
  },
};