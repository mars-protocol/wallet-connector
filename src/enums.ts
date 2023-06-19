export enum WalletConnectionStatus {
  Unconnected,
  Connecting,
  AutoConnect,
  WalletConnect,
  Connected,
  Disconnecting,
  Errored,
  Retry,
  StationWalletError,
}

export enum WalletID {
  Cosmostation = "cosmostation",
  CosmostationMobile = "mobile-cosmostation",
  Falcon = "falcon",
  Keplr = "keplr",
  KeplrMobile = "mobile-keplr",
  Leap = "leap-cosmos",
  StationWallet = "terra-station",
  StationWalletMobile = "mobile-terra-station",
  Xdefi = "xfi-cosmos",
}

export enum ChainInfoID {
  Cosmoshub4 = "cosmoshub-4",
  Injective1 = "injective-1",
  Juno1 = "juno-1",
  Mars1 = "mars-1",
  MarsAres1 = "ares-1",
  Neutron = "neutron-1",
  NeutronTestnet = "pion-1",
  Osmosis1 = "osmosis-1",
  OsmosisDevnet = "devnet",
  OsmosisTestnet = "osmo-test-5",
  Stargaze1 = "stargaze-1",
}
