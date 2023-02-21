import {
  CosmostationProvider,
  FalconProvider,
  KeplrProvider,
  LeapCosmosProvider,
  MobileCosmostationProvider,
  MobileKeplrProvider,
  MobileTerraStationProvider,
  TerraStationProvider,
  XDefiProvider,
} from "@delphi-labs/shuttle"

import { WalletID } from "../enums"
import { Wallet } from "../types"

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
}

export const CosmostationMobileWallet: Wallet = {
  id: WalletID.CosmostationMobile,
  name: "Cosmostation Wallet",
  walletConnect: "Cosmostation WalletConnect",
  description: "Cosmostation Mobile App",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-extension.png",
  mobileImageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-extension.png",
  provider: MobileCosmostationProvider,
  type: "app",
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
}

export const XdefiWallet: Wallet = {
  id: WalletID.Xdefi,
  name: "XDEFI Wallet",
  install: "Install XDEFI Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
  description: "XDEFI Extension",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/xdefi-wallet-extension.png",
  provider: XDefiProvider,
  type: "extension",
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
