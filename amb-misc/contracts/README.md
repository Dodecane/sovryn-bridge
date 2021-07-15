## Bridge Overview

The Arbitrary Message Bridge (AMB) allows users to transfer arbitrary data between two blockchain networks as so the data could be interpreted as an arbitrary contract method invocation.

### Components

The AMB contracts consist of several components:
* The **Home Bridge** smart contract. This is currently deployed in the Rinkeby Testnet.
* The **Foreign Bridge** smart contract. This is deployed in the RSK Testnet.
* The **Validators** smart contract is deployed in both the Rinkeby Testnet and the RSK Testnet.

### Bridge Roles and Responsibilities

Responsibilities and roles of the bridge:
- **Administrator** role (representation of a multisig contract):
  - add/remove validators
  - set daily limits on both bridges
  - set maximum per transaction limit on both bridges
  - upgrade contracts in case of vulnerability
  - set minimum required signatures from validators in order to relay a user's transaction
- **Validator** role:
  - provide 100% uptime to relay transactions
  - listen for `UserRequestForSignature` events on Home Bridge and sign an approval to relay messages on Foreign network
  - listen for `CollectedSignatures` events on Home Bridge. As soon as enough signatures are collected, transfer all collected signatures to the Foreign Bridge contract.
  - listen for `UserRequestForAffirmation` events on the Foreign Bridge and send approval to Home Bridge to relay messages from Foreign Network to Home
- **User** role:
  - Invoke Home/Foreign Bridge to send a message that will be executed on the other Network as an arbitrary contract method invocation;

## Usage

There are two ways to deploy contracts:
* install and use NodeJS
* use Docker to deploy

### Deployment with NodeJS

#### Install Dependencies
```bash
npm install
```
#### Deploy
Please read the [README.md](deploy/README.md) in the `deploy` folder for instructions and .env file configuration

#### Test
```bash
npm test
```

#### Run coverage tests
```bash
npm run coverage
```

The results can be found in the `coverage` directory.

#### Flatten
Fattened contracts can be used to verify the contract code in a block explorer like BlockScout or Etherscan.
The following command will prepare flattened version of the contracts:

```bash
npm run flatten
```
The flattened contracts can be found in the `flats` directory.

### Deployment in the Docker environment
[Docker](https://www.docker.com/community-edition) and [Docker Compose](https://docs.docker.com/compose/install/) can be used to deploy contracts without NodeJS installed on the system.
If you are on Linux, we recommend you [create a docker group and add your user to it](https://docs.docker.com/install/linux/linux-postinstall/), so that you can use the CLI without `sudo`.

#### Prepare the docker container
```bash
docker-compose up --build
```
_Note: The container must be rebuilt every time the code in a contract or deployment script is changed._

#### Deploy the contracts
1. Create the `.env` file in the `deploy` directory as described in the deployment [README.md](deploy/README.md).
2. Run deployment process:
   ```bash
   docker-compose run bridge-contracts deploy.sh
   ```
   or with Linux:
   ```bash
   ./deploy.sh
   ```

#### Copy flatten sources (if needed)
1. Discover the container name:
   ```bash
   docker-compose images bridge-contracts
   ```
2. In the following command, use the container name to copy the flattened contracts code to the current working directory. The contracts will be located in the `flats` directory.
   ```bash
   docker cp name-of-your-container:/contracts/flats ./
   ```

#### Test contract and run coverage (if needed)
```bash
$ docker-compose run bridge-contracts bash
$ npm test
$ npm run coverage
```

#### Shutdown the container
If the container is no longer needed, it can be shutdown:
```bash
docker-compose down
```