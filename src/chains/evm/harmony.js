module.exports = {
  CHAIN_ID: 1666600000,
  SYMBOL: 'ONE',
  NAME: 'Harmony',
  RPC: 'https://rpc.ankr.com/harmony',
  DECIMALS: 18,
  GET_TXN_LIST_API: '',
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/harmony',
  EVM_FUNGIBLE_ASSET_DISCOVERY_API: '',
  EVM_NON_FUNGIBLE_ASSET_DISCOVERY_API: '',
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
