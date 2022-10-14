const ethereum = require('./ethereum');
const polygon = require('./polygon');
const bsc = require('./bsc');
const velas = require('./velas');
const harmony = require('./harmony');
const optimism = require('./optimism');
const arbitrum = require('./arbitrum');
const avalanche = require('./avalanche');
const fantom = require('./fantom');

const evmChains = {
    'ethereum': 'ETH',
    'bsc': 'BNB',
    'polygon': 'MATIC',
    'velas': 'VLX',
    'avalanche': 'AVAX',
    'harmony': 'ONE',
    'optimism': 'ETH',
    'arbitrum': 'ETH',
    'fantom': 'FTM',
};

const nonEvmChains = { };

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
    evmChains,
    nonEvmChains,
}