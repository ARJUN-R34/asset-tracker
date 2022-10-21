module.exports = {
  CHAIN_ID: 106,
  SYMBOL: 'VLX',
  NAME: 'Velas',
  RPC: 'https://explorer.velas.com/rpc',
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/velas',
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
