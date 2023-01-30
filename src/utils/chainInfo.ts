import { BIP44, Network } from "@delphi-labs/shuttle"
import { Bech32Address } from "@keplr-wallet/cosmos"

import { ChainInfoID } from "../enums"
import { ChainInfoOptions } from "../types"

export interface SimplifiedChainInfo extends Network {
  explorer?: string
  explorerName?: string
  alternativeBIP44s?: BIP44[]
}

export const SimpleChainInfoList: Record<ChainInfoID, SimplifiedChainInfo> = {
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
  [ChainInfoID.OsmosisTestnet]: {
    rpc: "https://rpc-test.osmosis.zone",
    rest: "https://lcd-test.osmosis.zone",
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
  [ChainInfoID.Columbus5]: {
    rpc: "https://rpc-columbus.keplr.app",
    rest: "https://lcd-columbus.keplr.app",
    explorer: "https://finder.terra.money/classic",
    explorerName: "TerraFinder",
    chainId: ChainInfoID.Columbus5,
    name: "Terra Classic",
    bip44: {
      coinType: 330,
    },
    bech32Config: Bech32Address.defaultBech32Config("terra"),
    gasPrice: "0.015uluna",
    feeCurrencies: [
      {
        coinDenom: "LUNC",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna",
      },
      {
        coinDenom: "USTC",
        coinMinimalDenom: "uusd",
        coinDecimals: 6,
        coinGeckoId: "terrausd",
      },
    ],

    features: ["ibc-transfer"],
  },
  [ChainInfoID.Secret4]: {
    rpc: "https://rpc-secret.keplr.app",
    rest: "https://lcd-secret.keplr.app",
    explorer: "https://www.mintscan.io/secret",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Secret4,
    name: "Secret Network",
    bip44: {
      coinType: 529,
    },
    bech32Config: Bech32Address.defaultBech32Config("secret"),
    feeCurrencies: [
      {
        coinDenom: "SCRT",
        coinMinimalDenom: "uscrt",
        coinDecimals: 6,
        coinGeckoId: "secret",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Akashnet2]: {
    rpc: "https://rpc-akash.keplr.app",
    rest: "https://lcd-akash.keplr.app",
    explorer: "https://www.mintscan.io/akash",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Akashnet2,
    name: "Akash",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("akash"),
    feeCurrencies: [
      {
        coinDenom: "AKT",
        coinMinimalDenom: "uakt",
        coinDecimals: 6,
        coinGeckoId: "akash-network",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Regen1]: {
    rpc: "https://rpc-regen.keplr.app",
    rest: "https://lcd-regen.keplr.app",
    explorer: "https://www.mintscan.io/regen",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Regen1,
    name: "Regen Network",
    bip44: { coinType: 118 },
    bech32Config: Bech32Address.defaultBech32Config("regen"),
    feeCurrencies: [
      {
        coinDenom: "REGEN",
        coinMinimalDenom: "uregen",
        coinDecimals: 6,
        coinGeckoId: "regen",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Sentinelhub2]: {
    rpc: "https://rpc-sentinel.keplr.app",
    rest: "https://lcd-sentinel.keplr.app",
    explorer: "https://www.mintscan.io/sentinel",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Sentinelhub2,
    name: "Sentinel",
    bip44: { coinType: 118 },
    bech32Config: Bech32Address.defaultBech32Config("sent"),
    feeCurrencies: [
      {
        coinDenom: "DVPN",
        coinMinimalDenom: "udvpn",
        coinDecimals: 6,
        coinGeckoId: "sentinel",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Core1]: {
    rpc: "https://rpc-persistence.keplr.app",
    rest: "https://lcd-persistence.keplr.app",
    explorer: "https://www.mintscan.io/persistence",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Core1,
    name: "Persistence",
    bip44: {
      coinType: 750,
    },
    bech32Config: Bech32Address.defaultBech32Config("persistence"),
    feeCurrencies: [
      {
        coinDenom: "XPRT",
        coinMinimalDenom: "uxprt",
        coinDecimals: 6,
        coinGeckoId: "persistence",
      },
      {
        coinDenom: "PSTAKE",
        coinMinimalDenom:
          "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
        coinDecimals: 18,
        coinGeckoId: "pstake-finance",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Irishub1]: {
    rpc: "https://rpc-iris.keplr.app",
    rest: "https://lcd-iris.keplr.app",
    explorer: "https://www.mintscan.io/iris",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Irishub1,
    name: "IRISnet",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("iaa"),
    feeCurrencies: [
      {
        coinDenom: "IRIS",
        coinMinimalDenom: "uiris",
        coinDecimals: 6,
        coinGeckoId: "iris-network",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.CryptoOrgChainMainnet1]: {
    rpc: "https://rpc-crypto-org.keplr.app",
    rest: "https://lcd-crypto-org.keplr.app",
    explorer: "https://www.mintscan.io/crypto-org",
    explorerName: "Mintscan",
    chainId: ChainInfoID.CryptoOrgChainMainnet1,
    name: "Crypto.org",
    bip44: {
      coinType: 394,
    },
    bech32Config: Bech32Address.defaultBech32Config("cro"),
    feeCurrencies: [
      {
        coinDenom: "CRO",
        coinMinimalDenom: "basecro",
        coinDecimals: 8,
        coinGeckoId: "crypto-com-chain",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.IovMainnetIbc]: {
    rpc: "https://rpc-iov.keplr.app",
    rest: "https://lcd-iov.keplr.app",
    explorer: "https://www.mintscan.io/starname",
    explorerName: "Mintscan",
    chainId: ChainInfoID.IovMainnetIbc,
    name: "Starname",
    bip44: {
      coinType: 234,
    },
    bech32Config: Bech32Address.defaultBech32Config("star"),
    feeCurrencies: [
      {
        coinDenom: "IOV",
        coinMinimalDenom: "uiov",
        coinDecimals: 6,
        coinGeckoId: "starname",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Emoney3]: {
    rpc: "https://rpc-emoney.keplr.app",
    rest: "https://lcd-emoney.keplr.app",
    explorer: "https://www.mintscan.io/emoney",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Emoney3,
    name: "e-Money",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("emoney"),
    feeCurrencies: [
      {
        coinDenom: "NGM",
        coinMinimalDenom: "ungm",
        coinDecimals: 6,
        coinGeckoId: "e-money",
      },
      {
        coinDenom: "EEUR",
        coinMinimalDenom: "eeur",
        coinDecimals: 6,
        coinGeckoId: "e-money-eur",
        gasPriceStep: {
          low: 1,
          average: 1,
          high: 1,
        },
      },
    ],

    features: ["ibc-transfer"],
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
  [ChainInfoID.Uni3]: {
    rpc: "https://rpc.uni.juno.deuslabs.fi",
    rest: "https://lcd.uni.juno.deuslabs.fi",
    explorer: "https://testnet.mintscan.io/juno-testnet",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Uni3,
    name: "Juno Testnet",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("juno"),
    feeCurrencies: [
      {
        coinDenom: "junox",
        coinMinimalDenom: "ujunox",
        coinDecimals: 6,
        gasPriceStep: {
          low: 0.03,
          average: 0.04,
          high: 0.05,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
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
  [ChainInfoID.MarsAres2]: {
    rpc: "https://rpc-temp.marsprotocol.io",
    rest: " https://rest-temp.marsprotocol.io",
    explorer: "https://testnet-explorer.marsprotocol.io",
    explorerName: "Mars Explorer",
    chainId: ChainInfoID.MarsAres2,
    name: "Mars Hub Temporary Testnet",
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
  [ChainInfoID.Microtick1]: {
    rpc: "https://rpc-microtick.keplr.app",
    rest: "https://lcd-microtick.keplr.app",
    chainId: ChainInfoID.Microtick1,
    name: "Microtick",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("micro"),
    feeCurrencies: [
      {
        coinDenom: "TICK",
        coinMinimalDenom: "utick",
        coinDecimals: 6,
        coinGeckoId: "pool:utick",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.LikecoinMainnet2]: {
    rpc: "https://mainnet-node.like.co/rpc",
    rest: "https://mainnet-node.like.co",
    explorer: "https://mintscan.io/likecoin",
    explorerName: "Mintscan",
    chainId: ChainInfoID.LikecoinMainnet2,
    name: "LikeCoin",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("like"),
    feeCurrencies: [
      {
        coinDenom: "LIKE",
        coinMinimalDenom: "nanolike",
        coinDecimals: 9,
        coinGeckoId: "likecoin",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Impacthub3]: {
    rpc: "https://rpc-impacthub.keplr.app",
    rest: "https://lcd-impacthub.keplr.app",
    chainId: ChainInfoID.Impacthub3,
    name: "IXO",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("ixo"),
    feeCurrencies: [
      {
        coinDenom: "IXO",
        coinMinimalDenom: "uixo",
        coinDecimals: 6,
        coinGeckoId: "pool:uixo",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Bitcanna1]: {
    rpc: "https://rpc.bitcanna.io",
    rest: "https://lcd.bitcanna.io",
    explorer: "https://mintscan.io/bitcanna",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Bitcanna1,
    name: "BitCanna",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("bcna"),
    feeCurrencies: [
      {
        coinDenom: "BCNA",
        coinMinimalDenom: "ubcna",
        coinDecimals: 6,
        coinGeckoId: "bitcanna",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Bitsong2b]: {
    rpc: "https://rpc.explorebitsong.com",
    rest: "https://lcd.explorebitsong.com",
    explorer: "https://mintscan.io/bitsong",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Bitsong2b,
    name: "BitSong",
    bip44: {
      coinType: 639,
    },
    bech32Config: Bech32Address.defaultBech32Config("bitsong"),
    feeCurrencies: [
      {
        coinDenom: "BTSG",
        coinMinimalDenom: "ubtsg",
        coinDecimals: 6,
        coinGeckoId: "pool:ubtsg",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Kichain2]: {
    rpc: "https://rpc-mainnet.blockchain.ki",
    rest: "https://api-mainnet.blockchain.ki",
    explorer: "https://mintscan.io/ki-chain",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Kichain2,
    name: "Ki",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("ki"),
    feeCurrencies: [
      {
        coinDenom: "XKI",
        coinMinimalDenom: "uxki",
        coinDecimals: 6,
        coinGeckoId: "pool:uxki",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Panacea3]: {
    rpc: "https://rpc.gopanacea.org",
    rest: "https://api.gopanacea.org",
    explorer: "https://mintscan.io/medibloc",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Panacea3,
    name: "MediBloc",
    bip44: {
      coinType: 371,
    },
    bech32Config: Bech32Address.defaultBech32Config("panacea"),
    feeCurrencies: [
      {
        coinDenom: "MED",
        coinMinimalDenom: "umed",
        coinDecimals: 6,
        coinGeckoId: "medibloc",
        gasPriceStep: {
          low: 5,
          average: 7,
          high: 9,
        },
      },
    ],

    features: ["ibc-transfer"],
  },
  [ChainInfoID.Bostrom]: {
    rpc: "https://rpc.bostrom.cybernode.ai",
    rest: "https://lcd.bostrom.cybernode.ai",
    chainId: ChainInfoID.Bostrom,
    name: "Bostrom",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("bostrom"),
    feeCurrencies: [
      {
        coinDenom: "BOOT",
        coinMinimalDenom: "boot",
        coinDecimals: 0,
        coinGeckoId: "bostrom",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Comdex1]: {
    rpc: "https://rpc.comdex.one",
    rest: "https://rest.comdex.one",
    explorer: "https://mintscan.io/comdex",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Comdex1,
    name: "Comdex",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("comdex"),
    feeCurrencies: [
      {
        coinDenom: "CMDX",
        coinMinimalDenom: "ucmdx",
        coinDecimals: 6,
        coinGeckoId: "comdex",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.CheqdMainnet1]: {
    rpc: "https://rpc.cheqd.net",
    rest: "https://api.cheqd.net",
    chainId: ChainInfoID.CheqdMainnet1,
    name: "cheqd",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cheqd"),
    feeCurrencies: [
      {
        coinDenom: "CHEQ",
        coinMinimalDenom: "ncheq",
        coinDecimals: 9,
        coinGeckoId: "cheqd-network",
        gasPriceStep: {
          low: 25,
          average: 50,
          high: 100,
        },
      },
    ],

    features: ["ibc-transfer"],
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
  [ChainInfoID.Chihuahua1]: {
    rpc: "https://rpc.chihuahua.wtf",
    rest: "https://api.chihuahua.wtf",
    explorer: "https://mintscan.io/chihuahua",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Chihuahua1,
    name: "Chihuahua",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("chihuahua"),
    feeCurrencies: [
      {
        coinDenom: "HUAHUA",
        coinMinimalDenom: "uhuahua",
        coinDecimals: 6,
        coinGeckoId: "pool:uhuahua",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.035,
        },
      },
    ],

    features: ["ibc-transfer"],
  },
  [ChainInfoID.LumNetwork1]: {
    rpc: "https://node0.mainnet.lum.network/rpc",
    rest: "https://node0.mainnet.lum.network/rest",
    explorer: "https://mintscan.io/lum",
    explorerName: "Mintscan",
    chainId: ChainInfoID.LumNetwork1,
    name: "Lum Network",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("lum"),
    feeCurrencies: [
      {
        coinDenom: "LUM",
        coinMinimalDenom: "ulum",
        coinDecimals: 6,
        coinGeckoId: "pool:ulum",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Vidulum1]: {
    rpc: "https://mainnet-rpc.vidulum.app",
    rest: "https://mainnet-lcd.vidulum.app",
    chainId: ChainInfoID.Vidulum1,
    name: "Vidulum",
    bip44: {
      coinType: 370,
    },
    bech32Config: Bech32Address.defaultBech32Config("vdl"),
    feeCurrencies: [
      {
        coinDenom: "VDL",
        coinMinimalDenom: "uvdl",
        coinDecimals: 6,
        coinGeckoId: "vidulum",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.DesmosMainnet]: {
    rpc: "https://rpc.mainnet.desmos.network",
    rest: "https://api.mainnet.desmos.network",
    explorer: "https://mintscan.io/desmos",
    explorerName: "Mintscan",
    chainId: ChainInfoID.DesmosMainnet,
    name: "Desmos",
    bip44: {
      coinType: 852,
    },
    bech32Config: Bech32Address.defaultBech32Config("desmos"),
    feeCurrencies: [
      {
        coinDenom: "DSM",
        coinMinimalDenom: "udsm",
        coinDecimals: 6,
        coinGeckoId: "pool:udsm",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Dig1]: {
    rpc: "https://rpc-1-dig.notional.ventures",
    rest: "https://api-1-dig.notional.ventures",
    chainId: ChainInfoID.Dig1,
    name: "Dig",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("dig"),
    feeCurrencies: [
      {
        coinDenom: "DIG",
        coinMinimalDenom: "udig",
        coinDecimals: 6,
        coinGeckoId: "pool:udig",
        gasPriceStep: {
          low: 0.025,
          average: 0.03,
          high: 0.035,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Sommelier3]: {
    rpc: "https://rpc-sommelier.keplr.app",
    rest: "https://lcd-sommelier.keplr.app",
    explorer: "https://mintscan.io/sommelier",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Sommelier3,
    name: "Sommelier",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("somm"),
    feeCurrencies: [
      {
        coinDenom: "SOMM",
        coinMinimalDenom: "usomm",
        coinDecimals: 6,
        coinGeckoId: "pool:usomm",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Sifchain1]: {
    rpc: "https://rpc.sifchain.finance",
    rest: "https://api-int.sifchain.finance",
    explorer: "https://mintscan.io/sifchain",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Sifchain1,
    name: "Sifchain",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("sif"),
    feeCurrencies: [
      {
        coinDenom: "ROWAN",
        coinMinimalDenom: "rowan",
        coinDecimals: 18,
        coinGeckoId: "sifchain",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.LaoziMainnet]: {
    rpc: "https://rpc.laozi3.bandchain.org",
    rest: "https://laozi1.bandchain.org/api",
    explorer: "https://mintscan.io/band",
    explorerName: "Mintscan",
    chainId: ChainInfoID.LaoziMainnet,
    name: "BandChain",
    bip44: {
      coinType: 494,
    },
    bech32Config: Bech32Address.defaultBech32Config("band"),
    feeCurrencies: [
      {
        coinDenom: "BAND",
        coinMinimalDenom: "uband",
        coinDecimals: 6,
        coinGeckoId: "band-protocol",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Darchub]: {
    rpc: "https://node1.konstellation.tech:26657",
    rest: "https://node1.konstellation.tech:1318",
    explorer: "https://mintscan.io/konstellation",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Darchub,
    name: "Konstellation",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("darc"),
    feeCurrencies: [
      {
        coinDenom: "DARC",
        coinMinimalDenom: "udarc",
        coinDecimals: 6,
        coinGeckoId: "pool:udarc",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Umee1]: {
    rpc: "https://rpc.aphrodite.main.network.umee.cc",
    rest: "https://api.aphrodite.main.network.umee.cc",
    explorer: "https://mintscan.io/umee",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Umee1,
    name: "Umee",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("umee"),
    feeCurrencies: [
      {
        coinDenom: "UMEE",
        coinMinimalDenom: "uumee",
        coinDecimals: 6,
        coinGeckoId: "pool:uumee",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.GravityBridge3]: {
    rpc: "https://gravitychain.io:26657",
    rest: "https://gravitychain.io:1317",
    explorer: "https://mintscan.io/gravity-bridge",
    explorerName: "Mintscan",
    chainId: ChainInfoID.GravityBridge3,
    name: "Gravity Bridge",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("gravity"),
    feeCurrencies: [
      {
        coinDenom: "GRAV",
        coinMinimalDenom: "ugraviton",
        coinDecimals: 6,
        coinGeckoId: "pool:ugraviton",
        gasPriceStep: {
          low: 0,
          average: 0,
          high: 0.035,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Mainnet3]: {
    rpc: "https://poseidon.mainnet.decentr.xyz",
    rest: "https://rest.mainnet.decentr.xyz",
    chainId: ChainInfoID.Mainnet3,
    name: "Decentr",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("decentr"),
    feeCurrencies: [
      {
        coinDenom: "DEC",
        coinMinimalDenom: "udec",
        coinDecimals: 6,
        coinGeckoId: "decentr",
      },
    ],
    features: ["ibc-transfer"],
  },
  [ChainInfoID.Shentu22]: {
    rpc: "https://shenturpc.certikpowered.info",
    rest: "https://azuredragon.noopsbycertik.com",
    chainId: ChainInfoID.Shentu22,
    name: "Certik",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("certik"),
    feeCurrencies: [
      {
        coinDenom: "CTK",
        coinMinimalDenom: "uctk",
        coinDecimals: 6,
        coinGeckoId: "certik",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Carbon1]: {
    rpc: "https://tm-api.carbon.network",
    rest: "https://api.carbon.network",
    chainId: ChainInfoID.Carbon1,
    name: "Carbon",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("swth"),
    feeCurrencies: [
      {
        coinDenom: "SWTH",
        coinMinimalDenom: "swth",
        coinDecimals: 8,
        coinGeckoId: "switcheo",
        gasPriceStep: {
          low: 769.23077,
          average: 769.23077,
          high: 769.23077,
        },
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
  [ChainInfoID.CerberusChain1]: {
    rpc: "https://rpc.cerberus.zone:26657",
    rest: "https://api.cerberus.zone:1317",
    explorer: "https://mintscan.io/cerberus",
    explorerName: "Mintscan",
    chainId: ChainInfoID.CerberusChain1,
    name: "Cerberus",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("cerberus"),
    feeCurrencies: [
      {
        coinDenom: "CRBRUS",
        coinMinimalDenom: "ucrbrus",
        coinDecimals: 6,
        coinGeckoId: "cerberus-2",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Fetchhub4]: {
    rpc: "https://rpc-fetchhub.fetch.ai:443",
    rest: "https://rest-fetchhub.fetch.ai",
    explorer: "https://mintscan.io/fetchai",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Fetchhub4,
    name: "Fetch.ai",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("fetch"),
    feeCurrencies: [
      {
        coinDenom: "FET",
        coinMinimalDenom: "afet",
        coinDecimals: 18,
        coinGeckoId: "fetch-ai",
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.035,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Mantle1]: {
    rpc: "https://rpc.assetmantle.one",
    rest: "https://rest.assetmantle.one",
    explorer: "https://mintscan.io/asset-mantle",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Mantle1,
    name: "AssetMantle",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("mantle"),
    feeCurrencies: [
      {
        coinDenom: "MNTL",
        coinMinimalDenom: "umntl",
        coinDecimals: 6,
        coinGeckoId: "pool:umntl",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.PioMainnet1]: {
    rpc: "https://rpc.provenance.io",
    rest: "https://api.provenance.io",
    explorer: "https://mintscan.io/provenance",
    explorerName: "Mintscan",
    chainId: ChainInfoID.PioMainnet1,
    name: "Provenance",
    bip44: {
      coinType: 505,
    },
    bech32Config: Bech32Address.defaultBech32Config("pb"),
    feeCurrencies: [
      {
        coinDenom: "HASH",
        coinMinimalDenom: "nhash",
        coinGeckoId: "provenance-blockchain",
        coinDecimals: 9,
        gasPriceStep: {
          low: 1905,
          average: 2100,
          high: 2500,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Galaxy1]: {
    rpc: "https://rpc.galaxychain.zone",
    rest: "https://rest.galaxychain.zone",
    chainId: ChainInfoID.Galaxy1,
    name: "Galaxy",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("galaxy"),
    feeCurrencies: [
      {
        coinDenom: "GLX",
        coinMinimalDenom: "uglx",
        coinDecimals: 6,
        coinGeckoId: "pool:uglx",
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.035,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Meme1]: {
    rpc: "https://rpc-meme-1.meme.sx:443",
    rest: "https://api-meme-1.meme.sx:443",
    chainId: ChainInfoID.Meme1,
    name: "Meme",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("meme"),
    feeCurrencies: [
      {
        coinDenom: "MEME",
        coinMinimalDenom: "umeme",
        coinDecimals: 6,
        coinGeckoId: "pool:umeme",
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.035,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Evmos_9001_2]: {
    rpc: "https://rpc-evmos.keplr.app",
    rest: "https://lcd-evmos.keplr.app",
    explorer: "https://mintscan.io/evmos",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Evmos_9001_2,
    name: "Evmos",
    bip44: {
      coinType: 60,
    },
    bech32Config: Bech32Address.defaultBech32Config("evmos"),
    feeCurrencies: [
      {
        coinDenom: "EVMOS",
        coinMinimalDenom: "aevmos",
        coinDecimals: 18,
        coinGeckoId: "evmos",
        gasPriceStep: {
          low: 10000000000,
          average: 25000000000,
          high: 40000000000,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Phoenix1]: {
    rpc: "https://rpc.terrav2.ccvalidators.com",
    rest: "https://phoenix-lcd.terra.dev",
    explorer: "https://finder.terra.money/mainnet",
    explorerName: "TerraFinder",
    chainId: ChainInfoID.Phoenix1,
    name: "Terra 2.0",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("terra"),
    gasPrice: "0.015uluna",
    feeCurrencies: [
      {
        coinDenom: "LUNA",
        coinMinimalDenom: "uluna",
        coinDecimals: 6,
        coinGeckoId: "terra-luna-2",
        gasPriceStep: {
          low: 0.15,
          average: 0.2,
          high: 0.25,
        },
      },
    ],

    features: ["ibc-transfer"],
  },
  [ChainInfoID.Titan1]: {
    rpc: "https://rpcapi.rizon.world",
    rest: "https://restapi.rizon.world",
    explorer: "https://mintscan.io/rizon",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Titan1,
    name: "Rizon",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("rizon"),
    feeCurrencies: [
      {
        coinDenom: "ATOLO",
        coinMinimalDenom: "uatolo",
        coinDecimals: 6,
        coinGeckoId: "rizon",
        gasPriceStep: {
          low: 0.025,
          average: 0.025,
          high: 0.035,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Kava_2222_10]: {
    rpc: "https://rpc-kava.keplr.app",
    rest: "https://lcd-kava.keplr.app",
    explorer: "https://mintscan.io/kava",
    explorerName: "Mintscan",
    chainId: ChainInfoID.Kava_2222_10,
    name: "Kava",
    bip44: {
      coinType: 459,
    },
    bech32Config: Bech32Address.defaultBech32Config("kava"),
    feeCurrencies: [
      {
        coinDenom: "KAVA",
        coinMinimalDenom: "ukava",
        coinDecimals: 6,
        coinGeckoId: "kava",
      },
      {
        coinDenom: "HARD",
        coinMinimalDenom: "hard",
        coinDecimals: 6,
        coinGeckoId: "kava-lend",
      },
      {
        coinDenom: "SWP",
        coinMinimalDenom: "swp",
        coinDecimals: 6,
        coinGeckoId: "kava-swap",
      },
    ],
    features: ["ibc-transfer", "ibc-go"],
  },
  [ChainInfoID.Genesis_29_2]: {
    rpc: "https://26657.genesisl1.org",
    rest: "https://api.genesisl1.org",
    chainId: ChainInfoID.Genesis_29_2,
    name: "GenesisL1",
    bip44: {
      coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("genesis"),
    feeCurrencies: [
      {
        coinDenom: "L1",
        coinMinimalDenom: "el1",
        coinDecimals: 18,
        //coinGeckoId: "pool:el1",
        gasPriceStep: {
          low: 999999999,
          average: 1000000000,
          high: 1000000001,
        },
      },
    ],

    features: ["ibc-transfer", "ibc-go"],
  },
}

export const getChainInfo = (
  chainId: string,
  chainInfoOverrides?: ChainInfoOptions
) => {
  const chainInfo: SimplifiedChainInfo = SimpleChainInfoList[chainId]

  if (typeof chainInfoOverrides !== "undefined" && chainInfo) {
    Object.keys(chainInfoOverrides).map(function (key) {
      chainInfo[key] = chainInfoOverrides[key]
    })
  }

  return chainInfo
}
