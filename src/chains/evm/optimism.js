module.exports = {
  CHAIN_ID: 10,
  SYMBOL: 'ETH',
  NAME: 'Optimism',
  RPC: 'https://rpc.ankr.com/optimism',
  DECIMALS: 18,
  GET_TXN_LIST_API(address, page, limit) {
    return `https://api-optimistic.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&page=${page}&offset=${limit}&sort=asc`;
  },
  ASSET_API: 'https://api.coingecko.com/api/v3/coins/optimism',
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
    getNativeAssetDetails: true,
  },
};
