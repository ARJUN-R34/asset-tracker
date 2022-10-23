### 1.0.0 (16-10-2022)

##### Initial commit with EVM functionalities

Users can track their assets across supported EVM chains.

Functionalities included :

* `getNativeAssetBalance(address)` - Get the Native asset balance for an address on a particular chain.
* `discoverFungibleAssets(address)` - Discover the fungible assets for an address on a particular chain.
* `discoverNonFungibleAssets(address)` - Discover the non-fungible assets for an address on a particular chain.
* `getTransactions({ address, page, limit, type })` - Discover the list of transactions for an address on a particular chain.
* `getFungibleTokenDetails(contractAddress)` - Get the details for a particular fungible token from the contract.
* `getNFTDetails(contractAddress)` - Get the details for a particular non fungible token from the contract.
* `switchChain(chainName)` - Functionality to switch between the supported chains.

### 1.1.0 (16-10-2022)

##### Get Supported Chains

* `getSupportedChains(functionName)` - Get the list of all the supported chains. This list can be filtered by `functionName` supported by the chains.

### 1.2.0 (22-10-2022)

##### Get Native Asset Details

* `getNativeAssetDetails()` - Get the details of the native token of the initialized chain.

### 1.3.0 (22-10-2022)

##### Get Native Asset Details

* `getNativeAssetDetails()` - Get the details of the native token of the initialized nonEVM chain.

### 1.4.0 (22-10-2022)

##### Switch Chains - nonEVM

* `switchChain(chainName)` - Switch between the supported nonEVM chains.

### 1.5.0 (22-10-2022)

##### Get Supported Chains - nonEVM

* `getSupportedChains(functionName)` - Get the list of all the supported chains. This list can be filtered by `functionName` supported by the chains.

### 1.6.0 (24-10-2022)

##### Get Transactions - nonEVM

* `getTransactions({ address })` - Get the list of all transactions of the passed public address.
* Minor updates to the code structure.
