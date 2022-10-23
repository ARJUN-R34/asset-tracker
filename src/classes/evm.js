const Web3 = require('web3');

const validator = require('../utils/input-validator');
const helper = require('../utils/helper');
const chains = require('../chains');
const responses = require('../constants/responses');
const erc20ABI = require('../constants/erc20-abi');
const erc721ABI = require('../constants/erc721-abi');

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

  async discoverFungibleAssets(address) {
    validator.checkSupportForChains(this.chain, 'discoverFungibleAssets');

    validator.validateAddress(address);

    const checksumAddress = this.web3.utils.toChecksumAddress(address);

    const assets = await helper.getRequest(chains[this.chain].EVM_FUNGIBLE_ASSET_DISCOVERY_API(checksumAddress, chains[this.chain].CHAIN_ID));

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

    const assets = await helper.getRequest(chains[this.chain].EVM_NON_FUNGIBLE_ASSET_DISCOVERY_API(checksumAddress));

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

    const apiURL = chains[this.chain].GET_TXN_LIST_API(checksumAddress, page, limit);

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

  async getFungibleTokenDetails(contractAddress) {
    validator.validateAddress(contractAddress);

    const checksumAddress = this.web3.utils.toChecksumAddress(contractAddress);

    await validator.validateContractAddress(this.web3, checksumAddress);

    const erc20Instance = new this.web3.eth.Contract(erc20ABI, checksumAddress);

    const totalSupply = await erc20Instance.methods.totalSupply().call();
    const name = await erc20Instance.methods.name().call();
    const symbol = await erc20Instance.methods.symbol().call();
    const decimals = await erc20Instance.methods.decimals().call();

    return {
      totalSupply, name, symbol, decimals,
    };
  }

  async getNFTDetails(contractAddress) {
    validator.validateAddress(contractAddress);

    const checksumAddress = this.web3.utils.toChecksumAddress(contractAddress);

    await validator.validateContractAddress(this.web3, checksumAddress);

    const erc721Instance = new this.web3.eth.Contract(erc721ABI, checksumAddress);

    const name = await erc721Instance.methods.name().call();
    const symbol = await erc721Instance.methods.symbol().call();

    return {
      name, symbol,
    };
  }

  getSupportedChains(functionName = 'all') {
    validator.validateFunctionName(functionName);

    const chainsArray = [];

    if (functionName === 'all') {
      chainsArray.push(...Object.keys(chains.evmChains));
    } else {
      const chainsArr = Object.keys(chains.evmChains);

      for (let i = 0; i < chainsArr.length; i += 1) {
        if (chains[chainsArr[i]].FUNCTIONALITY_SUPPORT[functionName]) {
          chainsArray.push(chains[chainsArr[i]].NAME.toLowerCase());
        }
      }
    }

    return chainsArray;
  }
}

module.exports = EVM;
