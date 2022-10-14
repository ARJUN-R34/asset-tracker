const Web3 = require('web3');

const validator = require('../utils/input-validator');
const helper = require('../utils/helper');
const chains = require('../chains');
const config = require('../config');

class EVM {
  constructor(chainName) {
    validator.validateConstructor('EVM', chainName);
    this.chain = chainName;
    this.web3 = new Web3(new Web3.providers.HttpProvider(chains[chainName].RPC));
  }

  switchChain(chainName) {
    validator.validateConstructor('EVM', chainName);

    this.chain = chainName;
    this.web3 = new Web3(new Web3.providers.HttpProvider(chains[chainName].RPC));
  }

  async getNativeAssetBalance(address) {
    validator.validateAddress(address);

    const checksumAddress = this.web3.utils.toChecksumAddress(address);

    const balance = await this.web3.eth.getBalance(checksumAddress);

    return this.web3.utils.fromWei(balance.toString(), 'ether');
  }

  async discoverFungibleAssets(address) {
    validator.validateAddress(address);

    const checksumAddress = this.web3.utils.toChecksumAddress(address);

    const assets = await helper.getRequest(
      `${config.EVM_FUNGIBLE_ASSET_DISCOVERY_API}/${checksumAddress}?chainId=${chains[this.chain].CHAIN_ID}&includePrices=true`,
    );

    const assetDetails = [];

    assets.forEach((asset) => {
      const obj = {};

      obj.name = asset.name;
      obj.symbol = asset.symbol;
      obj.balance = asset.balance;
      obj.decimals = asset.decimals;
      obj.priceInUSD = asset.value.price;
      obj.iconURL = asset.iconUrl;

      assetDetails.push(obj);
    });

    return assetDetails;
  }
}

module.exports = EVM;
