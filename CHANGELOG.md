### 1.0.0 (16-10-2022)

##### Initial commit with EVM functionalities

Users can track their assets across supported EVM chains

Functionalities included :

* `getNativeAssetBalance(address)` - Get the Native asset balance for an address on a particular chain.
* `discoverFungibleAssets(address)` - Discover the fungible assets for an address on a particular chain.
* `discoverNonFungibleAssets(address)` - Discover the non-fungible assets for an address on a particular chain.
* `getTransactions({ address, page, limit, type })` - Discover the list of transactions for an address on a particular chain.
* `getFungibleTokenDetails(contractAddress)` - Get the details for a particular fungible token from the contract.
* `getNFTDetails(contractAddress)` - Get the details for a particular non fungible token from the contract.
* `switchChain(chainName)` - Functionality to switch between the supported chains.
