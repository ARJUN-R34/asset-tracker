# **Asset Tracker**


**Asset tracker** is a one-stop library for the user to track their assets and holdings across multiple EVM and Non EVM chains.

<br>

This library will be updated continuously with more and more chain support and increasing granularity of data.

<br>

## **Installation and Usage**


### Installation

Install the library by running the command,

```shell
npm install --save asset-tracker
```

Import the library into your project using,

```js
const assetTracker = require('asset-tracker');
```

<br>

### Initialization

This library comes with 2 different classes.
One is `EVM` and other is `nonEVM` with each class catering to their own set of chains and functionality.

#### Initialize the classes

```js
// Initialize the EVM class
const tracker = new assetTracker.EVM(evmChain);

// Initialize the non EVM class
const tracker = new assetTracker.nonEVM(nonEvmChain);
```

<br>

### Methods

> Get Native Asset Balance

Returns the native asset balance of the initialized chain.

```js
const nativeAssetbalance = await tracker.getNativeAssetBalance(address);
```

* `address` (required) - Address for which the native asset balance is to be fetched. Can be a contract address or an EOA.

<br>

> Discover Fungible Assets

Scans the address for any fungible asset balances and returns the same.

```js
const fungibleAssets = await tracker.discoverFungibleAssets(address);
```

* `address` (required) - Address for which the list of fungible assets is to be checked.

<br>

> Discover Non Fungible Assets (NFTs)

Scans the address for any non fungible assets and returns the same.

```js
const nonFungibleAssets = await tracker.discoverNonFungibleAssets(address);
```

* `address` (required) - Address for which the list of non fungible assets is to be checked.

<br>

> Get the list of transactions

Returns the list of transactions for the specified address. The function also accepts an option parameter `type` which accepts the values `incoming` or `outgoing` to filter out the transactions.

```js
const transactions = await tracker.getTransactions({ address, page, limit, type });
```

* `address` (required) - Address for which the list of transactions is to be fetched.
* `page` (required) - Page number for pagination.
* `limit` (required) - Number of results to be returned in every page for pagination.
* `type` (optional. default = `all`) - Parameter to filter out the `incoming` or `outgoing` transactions. Defaults to `all`.

<br>

> Get the token details for a particular fungible token address

Returns the basic info about a particular fungible asset.

```js
const fungibleAssetInfo = await tracker.getFungibleTokenDetails(contractAddress);
```

* `contractAddress` (required) - Contract address of the fungible token.

<br>

> Get the token details for a particular non fungible (NFT) token address

Returns the basic info about a particular non fungible asset.

```js
const nonFungibleAssetInfo = await tracker.getNFTDetails(contractAddress);
```

* `contractAddress` (required) - Contract address of the non fungible token.

<br>

> Switch Chains

Switch between different supported chains. Once the chain is switched, all the subsequent functions will work for this new chain.

```js
switchChain(chainName);
```

* `chainName` (required) - Name of the new chain to be switched.

<br>

> Get Supported Chains (filter by function name)

This function will return the list of all the supported chains. The user can pass an optional parameter `functionName` which will return all the chains that supports this particular functionality.

```js
getSupportedChains(functionName);
```

* `functionName` (optional. defaults to `all`) - Name of the function to be checked for chain support.

<br>

> **Note** <br />
> Please note that currently, this library only supports EVM chains. Will soon be adding support for non EVM chains.
