# How to Deploy AMB Contracts

In order to deploy bridge contracts you must run `npm install` to install all dependencies. For more information, see the [project README](../README.md).

1. Compile the source contracts.
```
cd ..
npm run compile
```

2. Create a `.env` file.
```
cd deploy
cp .env.example .env
```

3. If necessary, deploy and configure a multi-sig wallet contract to manage the bridge contracts after deployment such as https://github.com/gnosis/MultiSigWallet/.

4. Adjust the parameters in the `.env` file. See below for comments related to each parameter.

5. Add funds to the deployment accounts in both the Home and Foreign networks.

6. Run `npm run deploy`.

## Arbitrary Message Bridge Configuration Example.

This example of an `.env` file for the `arbitrary-message` bridge mode includes comments describing each parameter.

```bash
# The type of bridge. Defines set of contracts to be deployed.
BRIDGE_MODE=ARBITRARY_MESSAGE

# The private key hex value of the account responsible for contracts
# deployments and initial configuration. The account's balance must contain
# funds from both networks.
DEPLOYMENT_ACCOUNT_PRIVATE_KEY=67..14
# Extra gas added to the estimated gas of a particular deployment/configuration transaction
# E.g. if estimated gas returns 100000 and the parameter is 0.2,
# the transaction gas limit will be (100000 + 100000 * 0.2) = 120000
DEPLOYMENT_GAS_LIMIT_EXTRA=0.2
# The "gasPrice" parameter set in every deployment/configuration transaction on
# Home network (in Wei).
HOME_DEPLOYMENT_GAS_PRICE=10000000000
# The "gasPrice" parameter set in every deployment/configuration transaction on
# Foreign network (in Wei).
FOREIGN_DEPLOYMENT_GAS_PRICE=10000000000
# The timeout limit to wait for receipt of the deployment/configuration
# transaction.
GET_RECEIPT_INTERVAL_IN_MILLISECONDS=3000

# The RPC channel to a Home node able to handle deployment/configuration
# transactions.
HOME_RPC_URL=https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161
# Address on Home network with permissions to change parameters of the bridge contract.
# For extra security we recommended using a multi-sig wallet contract address here.
HOME_BRIDGE_OWNER=0x
# Address on Home network with permissions to change parameters of bridge validator contract.
HOME_VALIDATORS_OWNER=0x
# Address on Home network with permissions to upgrade the bridge contract and the
# bridge validator contract.
HOME_UPGRADEABLE_ADMIN=0x
# The maximum value of gas for one call to be allowed for relaying.
HOME_MAX_AMOUNT_PER_TX=20000000
# The finalization threshold. The number of blocks issued after the block with
# the corresponding deposit transaction to guarantee the transaction will not be
# rolled back.
HOME_REQUIRED_BLOCK_CONFIRMATIONS=1
# The default gas price (in Wei) used to send Home Network signature
# transactions for deposit or withdrawal confirmations. This price is used if
# the Gas price oracle is unreachable.
HOME_GAS_PRICE=1000000000

# The RPC channel to a Foreign node able to handle deployment/configuration
# transactions.
FOREIGN_RPC_URL=https://mainnet.infura.io
# Address on Foreign network with permissions to change parameters of the bridge contract.
# For extra security we recommended using a multi-sig wallet contract address here.
FOREIGN_BRIDGE_OWNER=0x
# Address on Foreign network with permissions to change parameters of bridge validator contract.
FOREIGN_VALIDATORS_OWNER=0x
# Address on Foreign network with permissions to upgrade the bridge contract and the
# bridge validator contract.
FOREIGN_UPGRADEABLE_ADMIN=0x
# The maximum value of gas for one call to be allowed for relaying.
FOREIGN_MAX_AMOUNT_PER_TX=20000000
# The finalization threshold. The number of blocks issued after the block with
# the corresponding deposit transaction to guarantee the transaction will not be
# rolled back.
FOREIGN_REQUIRED_BLOCK_CONFIRMATIONS=8
# The default gas price (in Wei) used to send Foreign network transactions
# finalizing message transfers. This price is used if the Gas price oracle is
# unreachable.
FOREIGN_GAS_PRICE=10000000000

# The minimum number of validators required to send their signatures confirming
# the relay of messages. The same number of validators is expected on both sides
# of the bridge.
REQUIRED_NUMBER_OF_VALIDATORS=1
# The set of validators' addresses. It is assumed that signatures from these
# addresses are collected on the Home side. The same addresses will be used on
# the Foreign network to confirm that the finalized agreement was transferred
# correctly to the Foreign network.
VALIDATORS=0x 0x 0x

# The api url of an explorer to verify all the deployed contracts in Home network. Supported explorers: Blockscout, etherscan
#HOME_EXPLORER_URL=https://api-rinkeby.etherscan.io/api
# The api key of the explorer api, if required, used to verify all the deployed contracts in Home network.
#HOME_EXPLORER_API_KEY=
# The api url of an explorer to verify all the deployed contracts in Foreign network. Supported explorers: Blockscout, etherscan
#FOREIGN_EXPLORER_URL=https://api.etherscan.io/api
# The api key of the explorer api, if required, used to verify all the deployed contracts in Foreign network.
#FOREIGN_EXPLORER_API_KEY=
```