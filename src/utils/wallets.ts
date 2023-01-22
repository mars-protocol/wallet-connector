import { WalletID } from "../enums"

export const CosmostationWallet: Wallet = {
  id: WalletID.Cosmostation,
  name: "Cosmostation Wallet",
  install: "Install Cosmostation Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
  description: "Cosmostation Extension",
}

export const FalconWallet: Wallet = {
  id: WalletID.Falcon,
  name: "Falcon Wallet",
  install: "Install Falcon Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/falcon-wallet/gkhnjcpkikkkfhhdhhphcbhmkikoicgn",
  description: "Falcon Extension",
}

export const KeplrWallet: Wallet = {
  id: WalletID.Keplr,
  name: "Keplr Wallet",
  install: "Install Keplr Wallet",
  installURL: "https://www.keplr.app/download",
  description: "Keplr Chrome Extension",
}

export const LeapWallet: Wallet = {
  id: WalletID.Leap,
  name: "Leap Wallet",
  install: "Install Leap Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",
  description: "Leap Extension",
}

export const TerraStationWallet: Wallet = {
  id: WalletID.TerraStation,
  name: "Terra Station Wallet",
  install: "Install Terra Station Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp",
  description: "Terra Station Extension",
}

export const XdefiWallet: Wallet = {
  id: WalletID.Xdefi,
  name: "XDEFI Wallet",
  install: "Install XDEFI Wallet",
  installURL:
    "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
  description: "XDEFI Extension",
}

export const Wallets: Wallet[] = [
  CosmostationWallet,
  FalconWallet,
  KeplrWallet,
  LeapWallet,
  TerraStationWallet,
  XdefiWallet,
]
