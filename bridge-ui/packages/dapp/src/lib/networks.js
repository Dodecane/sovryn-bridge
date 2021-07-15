export const RINKEBY_RSKTESTNET_BRIDGE = 'rinkeby-rsktestnet';

const RINKEBY_RSKTESTNET_BRIDGE_CONFIG = {
  label: 'rinkeby⥊rsktestnet',
  homeChainId: 4,
  foreignChainId: 31,
  enableReversedBridge: true,
  enableForeignCurrencyBridge: true,
  foreignMediatorAddress:
    process.env.REACT_APP_FOREIGN_MEDIATOR_ADDRESS.toLowerCase(),
  homeMediatorAddress:
    process.env.REACT_APP_HOME_MEDIATOR_ADDRESS.toLowerCase(),
  foreignAmbAddress: process.env.REACT_APP_FOREIGN_AMB_ADDRESS.toLowerCase(),
  homeAmbAddress: process.env.REACT_APP_HOME_AMB_ADDRESS.toLowerCase(),
  foreignGraphName: 'raid-guild/mainnet-omnibridge', // placeholder, currently the graph does not support RSK and its testnets
  homeGraphName: 'raid-guild/xdai-omnibridge', // placeholder, currently the graph does not support RSK and its testnets
  ambLiveMonitorPrefix: process.env.REACT_APP_ALM_URL,
};

const ENABLED_BRIDGES = process.env.REACT_APP_ENABLED_BRIDGES.split(' ').map(
  b => b.toLowerCase(),
);

const bridgeInfo = {
  [RINKEBY_RSKTESTNET_BRIDGE]: RINKEBY_RSKTESTNET_BRIDGE_CONFIG,
};

const getNetworkConfig = bridges => {
  if (bridges && bridges.length > 0 && bridgeInfo) {
    return bridges.reduce((t, b) => ({ ...t, [b]: bridgeInfo[b] }), {});
  }
  return bridgeInfo;
};

export const networks = getNetworkConfig(ENABLED_BRIDGES);

export const defaultTokens = {
  [RINKEBY_RSKTESTNET_BRIDGE]: {
    4: {
      address: '0xFab46E002BbF0b4509813474841E0716E6730136',
      chainId: 4,
      symbol: 'FAU',
      name: 'FaucetToken',
    },
    31: {
      address: '0x19F64674D8A5B4E652319F5e239eFd3bc969A1fE',
      chainId: 31,
      symbol: 'tRIF',
      name: 'tRIF',
    },
  },
};
