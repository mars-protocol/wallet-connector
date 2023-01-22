import { ShuttleProvider, useShuttle } from "@delphi-labs/shuttle"
import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useMemo,
  useState,
} from "react"

import { WalletID } from "../enums"
import { Wallets } from "../utils"
import { SelectWalletModal } from "./ui"
import { WalletManagerContext } from "./WalletManagerContext"

export type WalletManagerProviderProps = PropsWithChildren<{
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
}>

export const WalletManagerProvider: FunctionComponent<
  WalletManagerProviderProps
> = ({
  children,
  chainInfoOverrides,
  classNames,
  closeIcon,
  defaultChainId,
  enabledWallets,
  persistent = false,
  selectWalletOverride,
  walletMetaOverride,
}) => {
  //! STATE
  const { connect, disconnect, recentWallet } = useShuttle()

  const enabledWalletsFiltered = useMemo(
    () => Wallets.filter(({ id }) => enabledWallets.includes(id)),
    [enabledWallets]
  )

  if (walletMetaOverride) {
    Object.entries(walletMetaOverride).forEach(([id, override]) => {
      Object.entries(override).forEach(([key, value]) => {
        enabledWallets.forEach((walletID, index) => {
          if (walletID === id) {
            enabledWallets[index][key] = value
          }
        })
      })
    })
  }

  const selectWallet = (wallet: string) => {
    connect(wallet, defaultChainId)
    setPickerModalOpen(false)
  }

  const _closePickerModal = () => {
    setPickerModalOpen(false)
  }

  const [pickerModalOpen, setPickerModalOpen] = useState(false)

  const value = useMemo(
    () => ({
      connect: connect,
      disconnect,
      recentWallet,
      connected: !!recentWallet,
      chainInfoOverrides,
    }),
    [connect, disconnect, recentWallet, chainInfoOverrides]
  )

  return (
    <ShuttleProvider
      persistent={persistent}
      providers={
        [
          // ...
        ]
      }
    >
      <WalletManagerContext.Provider value={value}>
        {children}
        <SelectWalletModal
          classNames={classNames}
          closeIcon={closeIcon}
          closeModal={_closePickerModal}
          isOpen={pickerModalOpen}
          onClose={() => setPickerModalOpen(false)}
          selectWallet={selectWallet}
          selectWalletOverride={selectWalletOverride}
          wallets={enabledWalletsFiltered}
        />
      </WalletManagerContext.Provider>
    </ShuttleProvider>
  )
}
