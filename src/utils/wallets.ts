import {
  CosmostationProvider,
  FalconProvider,
  KeplrProvider,
  LeapCosmosProvider,
  TerraStationProvider,
  XDefiProvider,
} from "@delphi-labs/shuttle"

import { WalletID } from "../enums"

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
}

export const LeapWallet: Wallet = {
  id: WalletID.Leap,
  name: "Leap Wallet",
  install: "Install Leap Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",
  description: "Leap Extension",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/leap-wallet-extension.png",
  provider: LeapCosmosProvider,
}

export const TerraStationWallet: Wallet = {
  id: WalletID.TerraStation,
  name: "Terra Station Wallet",
  install: "Install Terra Station Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp",
  description: "Terra Station Extension",
  imageUrl:
    "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/terra-station-wallet-extension.png",
  provider: TerraStationProvider,
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
}

export const Wallets: Wallet[] = [
  CosmostationWallet,
  FalconWallet,
  KeplrWallet,
  LeapWallet,
  TerraStationWallet,
  XdefiWallet,
]
