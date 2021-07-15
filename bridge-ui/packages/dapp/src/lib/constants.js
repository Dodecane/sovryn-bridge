import { BigNumber } from 'ethers';
import { RINKEBY_RSKTESTNET_BRIDGE } from 'lib/networks';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const ETHER_CURRENCY_LOGO =
  'https://assets.coingecko.com/coins/images/279/small/ethereum.png?1595348880';

export const LARGEST_UINT256 = BigNumber.from(
  '115792089237316195423570985008687907853269984665640564039457584007913129639935',
);

export const POLLING_INTERVAL =
  process.env.REACT_APP_UI_STATUS_UPDATE_INTERVAL || 5000;

export const DEFAULT_BRIDGE_DIRECTION =
  process.env.REACT_APP_DEFAULT_BRIDGE_DIRECTION || RINKEBY_RSKTESTNET_BRIDGE;

export const NON_ETH_CHAIN_IDS = [31];

export const HOME_AMB_ADDRESS = process.env.REACT_APP_HOME_AMB_ADDRESS;
export const FOREIGN_AMB_ADDRESS = process.env.REACT_APP_FOREIGN_AMB_ADDRESS;
export const HOME_MEDIATOR_ADDRESS =
  process.env.REACT_APP_HOME_MEDIATOR_ADDRESS;
export const FOREIGN_MEDIATOR_ADDRESS =
  process.env.REACT_APP_FOREIGN_MEDIATOR_ADDRESS;

export const ALM_URL = process.env.REACT_APP_ALM_URL;

export const nativeCurrencies = {
  4: {
    chainId: 4,
    decimals: 18,
    logoURI: ETHER_CURRENCY_LOGO,
    address: ADDRESS_ZERO,
    name: 'Rinkeby Ether',
    symbol: 'RETH',
    mode: 'NATIVE',
    homeTokenAddress: ADDRESS_ZERO,
  },
  31: {
    chainId: 31,
    decimals: 18,
    logoURI: ETHER_CURRENCY_LOGO,
    address: ADDRESS_ZERO,
    name: 'Test RBTC',
    symbol: 'tRBTC',
    mode: 'NATIVE',
    homeTokenAddress: ADDRESS_ZERO,
  },
};

export const nativeCurrencyMediators = {};

export const networkNames = {
  4: 'Rinkeby Testnet',
  31: 'RSK Testnet',
};

export const networkLabels = {
  4: 'Rinkeby',
  31: 'RSK Testnet',
};

export const networkCurrencies = {
  4: {
    name: 'Rinkeby Ethereum',
    symbol: 'RETH',
  },
  31: {
    name: 'Testnet RBTC',
    symbol: 'tRBTC',
  },
};

const { REACT_APP_RINKEBY_RPC_URL, REACT_APP_RSKTESTNET_RPC_URL } = process.env;

export const chainUrls = {
  4: {
    rpc: REACT_APP_RINKEBY_RPC_URL.split(' '),
    explorer: 'https://rinkeby.etherscan.io',
    chainId: 4,
    name: networkNames[4],
  },
  31: {
    rpc: REACT_APP_RSKTESTNET_RPC_URL.split(' '),
    explorer: 'https://explorer.testnet.rsk.co',
    chainId: 31,
    name: networkNames[31],
  },
};

export const defaultTokensUrl = {
  4: '',
  31: '',
};

export const GRAPH_HEALTH_ENDPOINT =
  'https://api.thegraph.com/index-node/graphql';

export const LOCAL_STORAGE_KEYS = {
  DONT_SHOW_CLAIMS: 'dont-show-claims',
  RINKEBY_RPC_URL: 'rinkeby-rpc-url',
  RSKTESTNET_RPC_URL: 'rsktestnet-rpc-url',
  NEVER_SHOW_CLAIMS: 'never-show-claims',
  INFINITE_UNLOCK: 'infinite-unlock',
  CUSTOM_TOKENS: 'customTokens',
  DISABLE_BALANCE_WHILE_TOKEN_FETCH: 'disable-balance-while-token-fetch',
  BRIDGE_DIRECTION: 'bridge-direction',
};
