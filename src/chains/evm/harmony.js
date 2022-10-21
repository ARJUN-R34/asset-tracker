module.exports = {
  CHAIN_ID: 1666600000,
  SYMBOL: 'ONE',
  NAME: 'Harmony',
  RPC: 'https://rpc.ankr.com/harmony',
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/harmony',
  DECIMALS: 18,
  FUNCTIONALITY_SUPPORT: {
    getTransactions: false,
    discoverFungibleAssets: false,
    discoverNonFungibleAssets: false,
    switchChain: true,
    getNativeAssetBalance: true,
    getFungibleTokenDetails: true,
    getNFTDetails: true,
    getNativeAssetDetails: true,
  },
};
