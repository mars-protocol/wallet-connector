import {
  CosmostationProvider,
  FalconProvider,
  KeplrProvider,
  LeapCosmosProvider,
  MobileCosmostationProvider,
  MobileKeplrProvider,
  MobileTerraStationProvider,
  MobileWalletProvider,
  TerraStationProvider,
  WalletProvider,
  XDEFICosmosProvider,
} from "@delphi-labs/shuttle"

import { ChainInfoID, WalletID } from "../enums"
import { IWalletMetaOverride, Wallet } from "../types"
import { SimplifiedChainInfo } from "./chainInfo"
import { ensure } from "./helpers"

export const CosmostationWallet: Wallet = {
  id: WalletID.Cosmostation,
  name: "Cosmostation Wallet",
  install: "Install Cosmostation Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
  description: "Cosmostation Extension",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-extension.png",
  provider: CosmostationProvider,
  type: "extension",
  supportedChains: [
    ChainInfoID.Cosmoshub4,
    ChainInfoID.Injective1,
    ChainInfoID.Juno1,
    ChainInfoID.Mars1,
    ChainInfoID.MarsAres1,
    ChainInfoID.NeutronTestnet,
    ChainInfoID.Neutron,
    ChainInfoID.Osmosis1,
    ChainInfoID.OsmosisTestnet,
    ChainInfoID.Stargaze1,
  ],
}

export const CosmostationMobileWallet: Wallet = {
  id: WalletID.CosmostationMobile,
  name: "Cosmostation Wallet",
  walletConnect: "Cosmostation WalletConnect",
  description: "Cosmostation Mobile App",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-extension.png",
  mobileImageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-connect.png",
  provider: MobileCosmostationProvider,
  type: "app",
  supportedChains: [
    ChainInfoID.Cosmoshub4,
    ChainInfoID.Injective1,
    ChainInfoID.Juno1,
    ChainInfoID.Mars1,
    ChainInfoID.MarsAres1,
    ChainInfoID.NeutronTestnet,
    ChainInfoID.Neutron,
    ChainInfoID.Osmosis1,
    ChainInfoID.OsmosisTestnet,
    ChainInfoID.Stargaze1,
  ],
}

export const FalconWallet: Wallet = {
  id: WalletID.Falcon,
  name: "Falcon Wallet",
  install: "Install Falcon Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/falcon-wallet/gkhnjcpkikkkfhhdhhphcbhmkikoicgn",
  description: "Falcon Extension",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/falcon-wallet-extension.png",
  provider: FalconProvider,
  type: "extension",
  supportedChains: [ChainInfoID.Cosmoshub4, ChainInfoID.Osmosis1],
}

export const KeplrWallet: Wallet = {
  id: WalletID.Keplr,
  name: "Keplr Wallet",
  install: "Install Keplr Wallet",
  installURL: "https://www.keplr.app/download",
  description: "Keplr Extension",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/keplr-wallet-extension.png",
  provider: KeplrProvider,
  type: "extension",
  supportedChains: [
    ChainInfoID.Cosmoshub4,
    ChainInfoID.Injective1,
    ChainInfoID.Juno1,
    ChainInfoID.Mars1,
    ChainInfoID.MarsAres1,
    ChainInfoID.NeutronTestnet,
    ChainInfoID.Neutron,
    ChainInfoID.Osmosis1,
    ChainInfoID.OsmosisTestnet,
    ChainInfoID.Stargaze1,
  ],
}

export const KeplrMobileWallet: Wallet = {
  id: WalletID.KeplrMobile,
  name: "Keplr Wallet",
  walletConnect: "Keplr WalletConnect",
  description: "Keplr Mobile App",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/keplr-wallet-extension.png",
  mobileImageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/keplr-wallet-connect.png",
  provider: MobileKeplrProvider,
  type: "app",
  supportedChains: [
    ChainInfoID.Cosmoshub4,
    ChainInfoID.Injective1,
    ChainInfoID.Juno1,
    ChainInfoID.Neutron,
    ChainInfoID.Osmosis1,
    ChainInfoID.Stargaze1,
  ],
}

export const LeapWallet: Wallet = {
  id: WalletID.Leap,
  name: "Leap Wallet",
  install: "Install Leap Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",
  description: "Leap Extension",
  imageUrl: "https://assets.leapwallet.io/logos/leap-cosmos-logo.png",
  provider: LeapCosmosProvider,
  type: "extension",
  supportedChains: [
    ChainInfoID.Cosmoshub4,
    ChainInfoID.Injective1,
    ChainInfoID.Juno1,
    ChainInfoID.Mars1,
    ChainInfoID.MarsAres1,
    ChainInfoID.NeutronTestnet,
    ChainInfoID.Neutron,
    ChainInfoID.Osmosis1,
    ChainInfoID.OsmosisTestnet,
    ChainInfoID.Stargaze1,
  ],
}

export const StationWallet: Wallet = {
  id: WalletID.StationWallet,
  name: "Station Wallet",
  install: "Install Station Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp",
  description: "Station Wallet Extension",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/terra-station-wallet-extension.png",
  provider: TerraStationProvider,
  type: "extension",
  supportedChains: [ChainInfoID.Mars1, ChainInfoID.Osmosis1],
}

export const StationMobileWallet: Wallet = {
  id: WalletID.StationWalletMobile,
  name: "Station Wallet",
  walletConnect: "Station Wallet WalletConnect",
  description: "Station Wallet Mobile App",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/terra-station-wallet-extension.png",
  mobileImageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/wallet-connect.png",
  provider: MobileTerraStationProvider,
  type: "app",
  supportedChains: [],
}

export const XdefiWallet: Wallet = {
  id: WalletID.Xdefi,
  name: "XDEFI Wallet",
  install: "Install XDEFI Wallet",
  installURL: "https://go.xdefi.io/mars",
  description: "XDEFI Extension",
  imageUrl: "https://xdefi-static.s3.eu-west-1.amazonaws.com/xdefi.png",
  provider: XDEFICosmosProvider,
  type: "extension",
  supportedChains: [ChainInfoID.Mars1, ChainInfoID.Osmosis1],
}

export const wallets: Wallet[] = [
  CosmostationWallet,
  CosmostationMobileWallet,
  FalconWallet,
  KeplrWallet,
  KeplrMobileWallet,
  LeapWallet,
  StationWallet,
  StationMobileWallet,
  XdefiWallet,
]

export const getEnabledWallets = (
  wallets: Wallet[],
  enabledWallets: WalletID[keyof WalletID][],
  walletMetaOverride?: IWalletMetaOverride
): Wallet[] => {
  const updatedWallets = enabledWallets.map((walletID) => {
    return ensure(wallets.find((wallet) => wallet.id === walletID))
  })

  if (walletMetaOverride) {
    Object.entries(walletMetaOverride).forEach(([id, override]) => {
      Object.entries(override).forEach(([key, value]) => {
        updatedWallets.forEach((wallet, index) => {
          if (wallet?.id === id) {
            //@ts-ignore
            enabledWalletsFiltered[index][key] = value
          }
        })
      })
    })
  }

  return updatedWallets
}

export const getWalletProviders = (
  wallets: Wallet[],
  networks?: SimplifiedChainInfo[]
) => {
  if (!networks) return

  const providers: WalletProvider[] = []

  wallets.forEach((wallet) => {
    if (wallet.type === "extension") {
      const newProvider = new wallet.provider({ networks })
      providers.push(newProvider)
    }
  })
  return providers
}

export const getMobileProviders = (
  wallets: Wallet[],
  networks?: SimplifiedChainInfo[]
) => {
  if (!networks) return

  const providers: MobileWalletProvider[] = []

  wallets.forEach((wallet) => {
    if (wallet.type === "app") {
      const newProvider = new wallet.provider({ networks })
      providers.push(newProvider)
    }
  })
  return providers
}
