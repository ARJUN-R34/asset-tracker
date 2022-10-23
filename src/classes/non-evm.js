const validator = require('../utils/input-validator');
const helper = require('../utils/helper');
const chains = require('../chains');

class nonEVM {
  constructor(chainName) {
    validator.validateConstructor('nonEVM', chainName);
    this.chain = chainName;
  }

  switchChain(chainName) {
    validator.validateConstructor('nonEVM', chainName);

    this.chain = chainName;
  }

  async getNativeAssetDetails() {
    validator.checkSupportForChains(this.chain, 'getNativeAssetDetails');

    const details = await helper.getRequest(`${chains[this.chain].ASSET_API}`);

    let response = {};

    response.chain = details.name;
    response.symbol = details.symbol;
    response.image = details.image.large;
    response.currentPrice = details.market_data.current_price.usd;
    response.marketCap = details.market_data.market_cap.usd;
    response.high_24h = details.market_data.high_24h.usd;
    response.low_24h = details.market_data.low_24h.usd;

    return response;
  }

  getSupportedChains(functionName = 'all') {
    validator.validateFunctionName(functionName);

    const chainsArray = [];

    if (functionName === 'all') {
      chainsArray.push(...Object.keys(chains.nonEvmChains));
    } else {
      const chainsArr = Object.keys(chains.nonEvmChains);

      for (let i = 0; i < chainsArr.length; i += 1) {
        if (chains[chainsArr[i]].FUNCTIONALITY_SUPPORT[functionName]) {
          chainsArray.push(chains[chainsArr[i]].NAME.toLowerCase());
        }
      }
    }

    return chainsArray;
  }

  async getTransactions({ address }) {
    validator.checkSupportForChains(this.chain, 'getTransactions');

    if (type !== 'incoming' && type !== 'outgoing' && type !== 'all') {
      throw responses.INVALID_TYPE_PASSED;
    }

    const apiURL = chains[this.chain].GET_TXN_LIST_API(address);

    const transactions = await helper.getRequest(apiURL);

    return transactions;
  }
}

module.exports = nonEVM;
