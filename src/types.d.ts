interface Wallet {
  id: import("./enums").WalletID
  name: string | import("react").ReactNode
  install?: string | import("react").ReactNode
  installURL?: string
  description: string | import("react").ReactNode
  imageUrl?: string
  provider: import("delphi-labs/shuttle").WalletProvider
}

interface AssetResponse {
  denom: string
  amount: string
}

interface Pagination {
  next_key: null | number
  total: string
}

interface BalancesResponse {
  balances?: AssetResponse[]
  pagination: Pagination
}

interface IEnableMeta {
  text: string | import("react").ReactNode
  textClassName: string
  buttonText: string | import("react").ReactNode
  buttonClassName: string
  contentClassName: string
}

interface ChainInfoOptions {
  rpc: string
  rpcConfig?: import("axios").AxiosRequestConfig
  rest: string
  restConfig?: import("axios").AxiosRequestConfig
  chainId?: string
  chainName?: string
  stakeCurrency?: import("@keplr-wallet/types").Currency
  walletUrl?: string
  walletUrlForStaking?: string
  bip44?: import("@keplr-wallet/types").BIP44
  alternativeBIP44s?: import("@keplr-wallet/types").BIP44[]
  bech32Config?: import("@keplr-wallet/types").Bech32Config
  currencies?: import("@keplr-wallet/types").AppCurrency[]
  feeCurrencies?: import("@keplr-wallet/types").Currency[]
  coinType?: number
  gasPriceStep?: {
    low: number
    average: number
    high: number
  }
  features?: string[]
  beta?: boolean
}

type IWalletMetaOverride = {
  [key in import("./enums").WalletID]?: IWalletMeta
}

type ChainInfoOverrides = {
  [key in import("./enums").ChainInfoID]?: ChainInfoOptions
}

interface IWalletMeta {
  description?: string | import("react").ReactNode
  imageUrl?: string
  name?: string | import("react").ReactNode
  install?: string | import("react").ReactNode
  installURL?: string
}

interface ModalClassNames {
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
  walletDescription?: string
  textContent?: string
}

interface IWalletManagerContext {
  connect: () => void
}

interface WalletManagerProviderProps {
  enabledWallets: WalletID[keyof WalletID][]
  defaultChainId: string
  chainInfoOverrides?: ChainInfoOverrides
  classNames?: ModalClassNames
  closeIcon?: ReactNode
  enablingMeta?: IEnableMeta
  selectWalletOverride?: string
  walletMetaOverride?: IWalletMetaOverride
  renderLoader?: () => ReactNode
  persistent?: boolean
  children?: ReactNode | undefined
}
