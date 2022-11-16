import { Keplr } from "@keplr-wallet/types"

import { Wallet, WalletType } from "../types"

// eslint-disable-next-line @typescript-eslint/no-namespace
export declare const getLeapFromWindow: () => Promise<Keplr | undefined>

export const LeapWallet: Wallet = {
  type: WalletType.Leap,
  name: "Leap Wallet",
  install: "Install Leap Wallet",
  installURL: "https://www.leapwallet.io/",
  description: "Leap Chrome Extension",
  imageUrl: "/leap-cosmos-logo.png",
  getClient: async () => getLeapFromWindow(),
  getOfflineSignerFunction: (client) =>
    client.getOfflineSignerAuto.bind(client), // // This function expects to be bound to the `client` instance.
}

export const KeplrWallet: Wallet = {
  type: WalletType.Keplr,
  name: "Keplr Wallet",
  install: "Install Keplr Wallet",
  installURL: "https://keplr.app",
  description: "Keplr Chrome Extension",
  imageUrl: "/keplr-wallet-extension.png",
  getClient: async () =>
    (await import("@keplr-wallet/stores")).getKeplrFromWindow(),
  getOfflineSignerFunction: (client) =>
    // This function expects to be bound to the `client` instance.
    client.getOfflineSignerAuto.bind(client),
}

export const WalletConnectKeplrWallet: Wallet = {
  type: WalletType.WalletConnectKeplr,
  name: "WalletConnect",
  description: "Keplr Mobile",
  imageUrl: "/walletconnect-keplr.png",
  getClient: async (chainInfo, walletConnect) => {
    if (walletConnect?.connected) {
      return new (await import("../connectors")).KeplrWalletConnectV1(
        walletConnect,
        [chainInfo]
      )
    }
    throw new Error("Mobile wallet not connected.")
  },
  // WalletConnect only supports Amino signing.
  getOfflineSignerFunction: (client) =>
    // This function expects to be bound to the `client` instance.
    client.getOfflineSignerOnlyAmino.bind(client),
}

export const Wallets: Wallet[] = [
  KeplrWallet,
  LeapWallet,
  WalletConnectKeplrWallet,
]
