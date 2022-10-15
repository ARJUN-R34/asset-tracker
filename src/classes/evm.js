const Web3 = require('web3');

const validator = require('../utils/input-validator');
const helper = require('../utils/helper');
const chains = require('../chains');
const config = require('../config');
const responses = require('../constants/responses');

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
    validator.checkSupportForChains(this.chain, 'discoverFungibleAssets');

    validator.validateAddress(address);

    const checksumAddress = this.web3.utils.toChecksumAddress(address);

    const assets = await helper.getRequest(
      `${config.EVM_FUNGIBLE_ASSET_DISCOVERY_API}/${checksumAddress}?chainId=${chains[this.chain].CHAIN_ID}&includePrices=true`,
    );

    const assetDetails = [];

    assets.tokenBalances.forEach((asset) => {
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

  async discoverNonFungibleAssets(address) {
    validator.checkSupportForChains(this.chain, 'discoverNonFungibleAssets');

    validator.validateAddress(address);

    const checksumAddress = this.web3.utils.toChecksumAddress(address);

    const assets = await helper.getRequest(
      `${config.EVM_NON_FUNGIBLE_ASSET_DISCOVERY_API}/${checksumAddress}/nfts`,
    );

    const assetDetails = [];

    const filteredData = assets.data.filter((asset) => asset.chainId === chains[this.chain].CHAIN_ID);

    filteredData.forEach((asset) => {
      const obj = {};

      obj.name = asset.name;
      obj.symbol = asset.symbol;
      obj.tokenId = asset.tokenId;
      obj.tokenUrl = asset.tokenUrl;
      obj.contractAddress = asset.tokenAddress;
      obj.metadata = { name: asset.metadata.name };
      obj.metadata.description = asset.metadata.description;
      obj.metadata.image = asset.metadata.image;

      assetDetails.push(obj);
    });

    return assetDetails;
  }

  async getTransactions({
    address, page, limit, type = 'all',
  }) {
    validator.checkSupportForChains(this.chain, 'getTransactions');

    validator.validateAddress(address);

    if (type !== 'incoming' && type !== 'outgoing' && type !== 'all') {
      throw responses.INVALID_TYPE_PASSED;
    }

    const checksumAddress = this.web3.utils.toChecksumAddress(address);

    const apiURL = helper.getApiURL(this.chain, checksumAddress, page, limit);

    const transactions = await helper.getRequest(apiURL);

    let txDetails = [];

    transactions.result.forEach((txn) => {
      const obj = { };

      obj.from = txn.from;
      obj.to = txn.to || txn.contractAddress;
      obj.blockNumber = txn.blockNumber;
      obj.transactionHash = txn.hash;
      obj.nonce = txn.nonce;
      obj.value = txn.value;
      obj.gas = txn.gas;
      obj.gasPrice = txn.gasPrice;
      obj.transactionSuccess = txn.isError === '0';
      obj.input = txn.input;
      obj.methodId = txn.methodId;
      obj.function = txn.functionName;

      txDetails.push(obj);
    });

    if (type === 'incoming') {
      txDetails = txDetails.filter((element) => element.to === address);
    } else if (type === 'outgoing') {
      txDetails = txDetails.filter((element) => element.from === address);
    }

    return txDetails;
  }
}

module.exports = EVM;
