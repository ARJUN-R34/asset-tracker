const ethereum = require('./evm/ethereum');
const polygon = require('./evm/polygon');
const bsc = require('./evm/bsc');
const velas = require('./evm/velas');
const harmony = require('./evm/harmony');
const optimism = require('./evm/optimism');
const arbitrum = require('./evm/arbitrum');
const avalanche = require('./evm/avalanche');
const fantom = require('./evm/fantom');

const bitcoin = require('./non-evm/bitcoin');
const tezos = require('./non-evm/tezos');
const solana = require('./non-evm/solana');
const tron = require('./non-evm/tron');

const evmChains = {
  ethereum: 'ETH',
  bsc: 'BNB',
  polygon: 'MATIC',
  velas: 'VLX',
  avalanche: 'AVAX',
  harmony: 'ONE',
  optimism: 'ETH',
  arbitrum: 'ETH',
  fantom: 'FTM',
};

const nonEvmChains = {
  bitcoin: 'BTC',
  solana: 'SOL',
  tron: 'TRX',
  tezos: 'XTZ',
};

const supportedFunctions = ['switchChain', 'getNativeAssetBalance', 'discoverFungibleAssets', 'discoverNonFungibleAssets', 'getTransactions', 'getFungibleTokenDetails', 'getNFTDetails'];

module.exports = {
  ethereum,
  polygon,
  bsc,
  harmony,
  avalanche,
  velas,
  optimism,
  arbitrum,
  fantom,
  bitcoin,
  tezos,
  solana,
  tron,
  evmChains,
  nonEvmChains,
  supportedFunctions,
};
