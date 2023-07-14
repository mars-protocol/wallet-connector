import { BIP44, Network } from "@delphi-labs/shuttle-react"
import { Bech32Address } from "@keplr-wallet/cosmos"

import { ChainInfoID } from "../enums"
import { ChainInfoOptions } from "../types"

export interface SimplifiedChainInfo extends Network {
  explorer?: string
  explorerName?: string
  alternativeBIP44s?: BIP44[]
}

export const SimpleChainInfoList: Record<ChainInfoID, SimplifiedChainInfo> = {
  [ChainInfoID.Cosmoshub4]: {
    rpc: "https://rpc-cosmoshub.keplr.app",
    rest: "https://lcd-cosmoshub.keplr.app",
    explorer: "https://www.mintscan.io/cosmos",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Cosmoshub4,
    name: "Cosmos Hub",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cosmos"),
    feeCurrencies: [
      {
        coinDenom: "ATOM",
        coinMinimalDenom: "uatom",
        coinDecimals: 6,
        coinGeckoId: "cosmos",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Injective1]: {
    rpc: "https://public.api.injective.network",
    rest: "https://public.lcd.injective.network",
    explorer: "https://mintscan.io/injective",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Injective1,
    name: "Injective",
    bip44: {
      coinType: 60,
    },
    bech32Config: Bech32Address.defaultBech32Config("inj"),
    gasPrice: "0.0005inj",
    feeCurrencies: [
      {
        coinDenom: "INJ",
        coinMinimalDenom: "inj",
        coinDecimals: 18,
        coinGeckoId: "injective-protocol",
        gasPriceStep: {
          low: 0.0005,
          average: 0.0007,
          high: 0.0009,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Juno1]: {
    rpc: "https://rpc-juno.itastakers.com",
    rest: "https://lcd-juno.itastakers.com",
    explorer: "https://www.mintscan.io/juno",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Juno1,
    name: "Juno",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("juno"),
    feeCurrencies: [
      {
        coinDenom: "JUNO",
        coinMinimalDenom: "ujuno",
        coinDecimals: 6,
        coinGeckoId: "juno-network",
        gasPriceStep: {
          low: 0.03,
          average: 0.04,
          high: 0.05,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go", "wasmd_0.24+", "cosmwasm"],
  },
  [ChainInfoID.Mars1]: {
    rpc: "https://rpc.marsprotocol.io",
    rest: "https://rest.marsprotocol.io",
    explorer: "https://explorer.marsprotocol.io",
    explorerName: "Mars Explorer",
    chainId: ChainInfoID.Mars1,
    name: "Mars Hub",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [{ coinType: 330 }],
    bech32Config: Bech32Address.defaultBech32Config("mars"),
    gasPrice: "0umars",
    defaultCurrency: {
      coinDenom: "MARS",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
      coinGeckoId: "marsprotocol",
      gasPriceStep: {
        low: 0,
        average: 0.00625,
        high: 0.01,
      },
    },
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.MarsAres1]: {
    rpc: "https://testnet-rpc.marsprotocol.io",
    rest: "https://testnet-rest.marsprotocol.io",
    explorer: "https://testnet-explorer.marsprotocol.io",
    explorerName: "Mars Explorer",
    chainId: ChainInfoID.MarsAres1,
    name: "Mars Hub Testnet",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [{ coinType: 330 }],
    bech32Config: Bech32Address.defaultBech32Config("mars"),
    gasPrice: "0umars",
    defaultCurrency: {
      coinDenom: "MARS",
      coinMinimalDenom: "umars",
      coinDecimals: 6,
      coinGeckoId: "marsprotocol",
      gasPriceStep: {
        low: 0,
        average: 0.00625,
        high: 0.01,
      },
    },
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Neutron]: {
    rpc: "https://rpc-neutron.keplr.app/",
    rest: "https://lcd-neutron.keplr.app/",
    explorer: "https://neutron.explorers.guru",
    explorerName: "Explorer",
    chainId: ChainInfoID.Neutron,
    name: "Neutron",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [{ coinType: 330 }],
    gasPrice: "0.025untrn",
    bech32Config: Bech32Address.defaultBech32Config("neutron"),
    defaultCurrency: {
      coinDenom: "NTRN",
      coinMinimalDenom: "untrn",
      coinDecimals: 6,
      coinGeckoId: "neutron",
      gasPriceStep: {
        low: 0,
        average: 0.025,
        high: 0.04,
      },
    },
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.NeutronTestnet]: {
    rpc: "https://rpc-palvus.pion-1.ntrn.tech/",
    rest: "https://rest-palvus.pion-1.ntrn.tech/",
    explorer: "https://testnet.mintscan.io/neutron-testnet",
    explorerName: "Mintscan",
    chainId: ChainInfoID.NeutronTestnet,
    name: "Neutron Testnet",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [{ coinType: 330 }],
    gasPrice: "0.025untrn",
    bech32Config: Bech32Address.defaultBech32Config("neutron"),
    defaultCurrency: {
      coinDenom: "NTRN",
      coinMinimalDenom: "untrn",
      coinDecimals: 6,
      coinGeckoId: "neutron",
      gasPriceStep: {
        low: 0,
        average: 0.025,
        high: 0.04,
      },
    },
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Osmosis1]: {
    rpc: "https://rpc-osmosis.blockapsis.com",
    rest: "https://lcd-osmosis.blockapsis.com",
    explorer: "https://www.mintscan.io/osmosis",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Osmosis1,
    name: "Osmosis",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [{ coinType: 330 }],
    gasPrice: "0.025uosmo",
    bech32Config: Bech32Address.defaultBech32Config("osmo"),
    defaultCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      gasPriceStep: {
        low: 0,
        average: 0.025,
        high: 0.04,
      },
    },
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.OsmosisDevnet]: {
    rpc: "https://rpc.devnet.osmosis.zone",
    rest: "	https://lcd.devnet.osmosis.zone",
    explorer: "https://www.mintscan.io/osmosis",
    explorerName: "Mintscan",
    chainId: ChainInfoID.OsmosisDevnet,
    name: "Osmosis Devnet",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [{ coinType: 330 }],
    gasPrice: "0.025uosmo",
    bech32Config: Bech32Address.defaultBech32Config("osmo"),
    defaultCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      gasPriceStep: {
        low: 0,
        average: 0.025,
        high: 0.04,
      },
    },
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.OsmosisTestnet]: {
    rpc: "https://rpc.osmotest5.osmosis.zone",
    rest: "https://lcd.osmotest5.osmosis.zone",
    explorer: "https://testnet.mintscan.io/osmosis-testnet",
    explorerName: "Mintscan",
    chainId: ChainInfoID.OsmosisTestnet,
    name: "Osmosis Testnet",
    bip44: {
      coinType: 118,
    },
    alternativeBIP44s: [{ coinType: 330 }],
    gasPrice: "0.025uosmo",
    bech32Config: Bech32Address.defaultBech32Config("osmo"),
    defaultCurrency: {
      coinDenom: "OSMO",
      coinMinimalDenom: "uosmo",
      coinDecimals: 6,
      coinGeckoId: "osmosis",
      gasPriceStep: {
        low: 0,
        average: 0.025,
        high: 0.04,
      },
    },
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Stargaze1]: {
    rpc: "https://rpc.stargaze-apis.com",
    rest: "https://rest.stargaze-apis.com",
    explorer: "https://mintscan.io/stargaze",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Stargaze1,
    name: "Stargaze",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("stars"),
    feeCurrencies: [
      {
        coinDenom: "STARS",
        coinMinimalDenom: "ustars",
        coinDecimals: 6,
        coinGeckoId: "pool:ustars",
      },
    ],
    features: ["ibc-transfer"],
  },
}

export const getChainInfo = (
  chainId: ChainInfoID,
  chainInfoOverrides?: ChainInfoOptions,
) => {
  const chainInfo: SimplifiedChainInfo = SimpleChainInfoList[chainId]

  if (chainInfoOverrides && chainInfo) {
    Object.keys(chainInfoOverrides).map(function (key) {
      //@ts-ignore
      chainInfo[key as keyof SimplifiedChainInfo] =
        chainInfoOverrides[key as keyof SimplifiedChainInfo]
    })
  }

  return chainInfo
}
