module.exports = {
  CHAIN_ID: 42161,
  SYMBOL: 'ETH',
  NAME: 'Arbitrum',
  RPC: 'https://rpc.ankr.com/arbitrum',
  DECIMALS: 18,
  GET_TXN_LIST_API(address, page, limit) {
    return `https://api.arbiscan.io/api?module=account&action=txlist&address=${address}&startblock=0&page=${page}&offset=${limit}&sort=asc`;
  },
  ASSET_API: '',
  EVM_FUNGIBLE_ASSET_DISCOVERY_API(address) {
    return `https://account.metafi.codefi.network/accounts/${address}?chainId=${this.CHAIN_ID}&includePrices=true`
  },
  EVM_NON_FUNGIBLE_ASSET_DISCOVERY_API(address) {
    return ``;
  },
  FUNCTIONALITY_SUPPORT: {
    getTransactions: true,
    discoverFungibleAssets: true,
    discoverNonFungibleAssets: false,
    switchChain: true,
    getNativeAssetBalance: true,
    getFungibleTokenDetails: true,
    getNFTDetails: true,
    getNativeAssetDetails: false,
  },
};
