import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import {
  Bech32Config,
  BIP44,
  BroadcastResult,
  SigningResult,
  SimulateResult,
  TransactionMsg,
  WalletConnection,
} from "@delphi-labs/shuttle-react"
import { AppCurrency, Currency } from "@keplr-wallet/types"
import { AxiosRequestConfig } from "axios"
import { ReactNode } from "react"

import { ChainInfoID, WalletConnectionStatus, WalletID } from "./enums"

export interface Wallet {
  id: WalletID
  name: string | ReactNode
  install?: string | ReactNode
  installURL?: string
  description: string | ReactNode
  imageUrl?: string
  mobileImageUrl?: string
  walletConnect?: string
  provider: any
  installed?: boolean
  type: "app" | "extension"
  supportedChains: ChainInfoID[]
}

export interface AssetResponse {
  denom: string
  amount: string
}

export interface Pagination {
  next_key: null | number
  total: string
}

export interface BalancesResponse {
  balances?: AssetResponse[]
  pagination: Pagination
}

export interface IEnableMeta {
  text: string | ReactNode
  textClassName: string
  buttonText: string | ReactNode
  buttonClassName: string
  contentClassName: string
}

export interface ChainInfoOptions {
  rpc: string
  rpcConfig?: AxiosRequestConfig
  rest: string
  restConfig?: AxiosRequestConfig
  chainId?: string
  chainPrefix?: string
  name?: string
  stakeCurrency?: Currency
  walletUrl?: string
  walletUrlForStaking?: string
  gasPrice?: string
  bip44?: BIP44
  alternativeBIP44s?: BIP44[]
  bech32Config?: Bech32Config
  currencies?: AppCurrency[]
  defaultCurrency?: AppCurrency
  feeCurrencies?: Currency[]
  coinType?: number
  gasPriceStep?: {
    low: number
    average: number
    high: number
  }
  features?: string[]
  beta?: boolean
  explorer?: string
  explorerName?: string
  evm?: string
}

export type IWalletMetaOverride = {
  [key in WalletID]?: IWalletMeta
}

export interface IWalletMeta {
  description?: string | ReactNode
  imageUrl?: string
  name?: string | ReactNode
  install?: string | ReactNode
  installURL?: string
}

export interface ModalClassNames {
  modalContent?: string
  modalOverlay?: string
  modalHeader?: string
  modalSubheader?: string
  modalCloseButton?: string
  walletList?: string
  wallet?: string
  walletImage?: string
  walletInfo?: string
  walletName?: string
  walletConnect?: string
  walletConnectQR?: string
  walletDescription?: string
  textContent?: string
  noneAvailableText?: string
}

export interface IWalletManagerContext {
  connect: () => void
  disconnect: () => void
  connectedWallet: WalletConnection | undefined
  status: WalletConnectionStatus
}

export interface WalletManagerProviderProps {
  enabledWallets: WalletID[keyof WalletID][]
  chainIds: ChainInfoID[]
  walletConnectProjectId?: string
  chainInfoOverrides?: ChainInfoOptions
  classNames?: ModalClassNames
  closeIcon?: ReactNode
  defaultChainId: ChainInfoID
  enablingStringOverride?: string
  selectWalletOverride?: string
  noWalletsOverride?: string
  scanQRCodeOverride?: string
  walletMetaOverride?: IWalletMetaOverride
  renderLoader?: () => ReactNode
  persistent?: boolean
  children?: ReactNode | undefined
  stationWalletTutorial?: StationWalletTutorial
}

export interface StationWalletTutorial {
  headline: string
  intro: string
  reimportWallet: string
  wrongNetwork: string
  ready: string
  retry: string
}

export interface WalletClient {
  sign: (options: {
    messages: TransactionMsg<any>[]
    feeAmount?: string | null | undefined
    gasLimit?: string | null | undefined
    memo?: string | null | undefined
    wallet?: WalletConnection | null | undefined
  }) => Promise<SigningResult>
  cosmWasmClient: CosmWasmClient
  connectedWallet: WalletConnection
  broadcast: (options: {
    messages: TransactionMsg<any>[]
    feeAmount?: string | null | undefined
    gasLimit?: string | null | undefined
    memo?: string | null | undefined
    wallet?: WalletConnection | null | undefined
  }) => Promise<BroadcastResult>
  simulate: (options: {
    messages: TransactionMsg<any>[]
    wallet?: WalletConnection | null | undefined
  }) => Promise<SimulateResult>
}

export type TxBroadcastResult = BroadcastResult
