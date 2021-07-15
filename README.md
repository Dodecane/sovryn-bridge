# Sovryn Token Bridge

The Sovryn Token Bridge enables the transfer of ERC20 tokens across any two EVM-based chains.

It consists of the following components:
 - arbitrary message bridge (AMB) contracts
 - validator instances to facilitate operation of the AMB
 - a live monitoring app for the AMB
 - token bridge extension contracts for the AMB
 - a dapp for easier interaction with the bridge

More documentation can be found in corresponding directories.

## Presentation & Video Demo

- [Link to presentation](https://github.com/Dodecane/sovryn-bridge/blob/main/Sovryn%20Token%20Bridge%20Presentation.pdf)
- [Link to video demo](https://www.youtube.com/watch?v=87PVCjS0KB4)

## Live deployments

 - Sovryn Token Bridge dapp: [https://sovryn-token-bridge.web.app/](https://sovryn-token-bridge.web.app/)
 - AMB Live Monitoring app: [https://alm-rinkeby-rsktestnet.herokuapp.com/](https://alm-rinkeby-rsktestnet.herokuapp.com/)
 - Rinkeby AMB address: `0x0dE1B8dA43f26e0cb520eD7B6579827888d7f930`
 - RSK Testnet AMB address: `0x7446dE01829c1e31fB3b690B108d1E1499ccfCCE`
 - Rinkeby Bridge Mediator address: `0xf0acB9E6C15fF2c131Aa7Fb32D7300Da56EB9Aed`
 - RSK Testnet Bridge Mediator address: `0xfbA1a1D67bb81ac6a6dF58e5a88785C6c93dbfC6`

## Steps to deploy yourself (non-production)

Prerequisites:
- Docker
- Ansible
- Git
- at least one hosted node with ssh access for running validator instances (Ubuntu 18.04 LTS with Python installed)
- access to a remote logging service such as SolarWinds Papertrail
- an Etherscan API key

### Part A: AMB Contracts Deployment

 1. Generate at least one private key using Metamask or MyEtherWallet
 2. Clone the repository
 3. Navigate to `amb-misc/contracts/deploy`
 4. Make a copy of `.env.example` and name it `.env`
 5. Replace all variables in `.env` templated with tags `<>` with actual values
 6. Move up a directory and prepare the docker container: 
```
cd ..
docker-compose up --build
```
7. Deploy contracts:
```
docker-compose run bridge-contracts deploy.sh
```
After successful deployment the following information is displayed, please note it down.
```
{
    "homeBridge": {
        "address": "0x...",
        "deployedBlockNumber": 12345678
    },
    "foreignBridge": {
        "address": "0x...",
        "deployedBlockNumber": 87654321
    }
}
```

### Part B: Validator Instance Deployment

 1. Navigate to `amb-misc/deployment`
2. Make a copy of `hosts.yml.example` and name it `hosts.yml`
3. Replace all variables in `hosts.yml` templated with tags `<>` with actual values
4. `cd group_vars` and replace tags in `rinkeby-rsktestnet.yml` with actual values
5. Run Ansible playbook:
```
cd .. 
ansible-playbook --private-key=<PATH_TO_KEY_FILE> -i hosts.yml site.yml
```
After successful deployment log messages should start appearing on the remote log server.

### Part C: AMB Live Monitoring (ALM) App Deployment
1. Navigate to `amb-misc/alm`
2. Make a copy of `.env.example` and name it `.env`
3. Replace tags in `.env` with actual values
4. Build the docker image with `docker-compose build`
5. Deploy the docker image to a cloud platform (e.g. Heroku) or use `docker-compose up -d` to run app locally

### Part D: Token Bridge Extension Contracts Deployment
1. Navigate to `extension-contracts/deploy`
2. Make a copy of `.env.example` and name it `.env`
3. Replace tags in `.env` with actual values
4. Install packages, compile contracts and deploy contracts
```
cd ..
yarn
yarn compile
yarn deploy
```
After successful deployment the following information is displayed, please note it down.
```
[ Home ] Bridge Mediator: 0x...
[ Foreign ] Bridge Mediator: 0x...
```
### Finally Part E: Sovryn Token Bridge Dapp Deployment
1. Navigate to `bridge-ui/packages/dapp`
2. Make a copy of `.env.example` and name it `.env`
3. Replace tags in `.env` with actual values
4. Start the dapp locally:
```
cd ../..
yarn
yarn dapp:start
```
5. Optionally build the dapp for deployment to a hosting platform (e.g. Firebase) with `yarn dapp:build`
