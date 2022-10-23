module.exports = {
  CHAIN_ID: 10,
  SYMBOL: 'ETH',
  NAME: 'Optimism',
  RPC: 'https://rpc.ankr.com/optimism',
  DECIMALS: 18,
  GET_TXN_LIST_API: 'https://api-optimistic.etherscan.io/api?module=account&action=txlist',
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/optimism',
  EVM_FUNGIBLE_ASSET_DISCOVERY_API: 'https://account.metafi.codefi.network/accounts',
  EVM_NON_FUNGIBLE_ASSET_DISCOVERY_API: '',
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
