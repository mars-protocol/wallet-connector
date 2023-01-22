import { ShuttleProvider } from "@delphi-labs/shuttle"
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
  const enabledWalletsFiltered = useMemo(
    () => Wallets.filter(({ id }) => enabledWallets.includes(id)),
    [enabledWallets]
  )
  if (walletMetaOverride) {
    Object.entries(walletMetaOverride).forEach(([id, override]) => {
      Object.entries(override).forEach(([key, value]) => {
        enabledWalletsFiltered.forEach((wallet, index) => {
          if (wallet.id === id) {
            enabledWalletsFiltered[index][key] = value
          }
        })
      })
    })
  }

  const _closePickerModal = () => {
    setPickerModalOpen(false)
  }

  const beginConnection = useCallback(() => {
    setPickerModalOpen(true)
  }, [])

  const [pickerModalOpen, setPickerModalOpen] = useState(false)

  const value = useMemo(
    () => ({
      connect: beginConnection,
    }),
    [beginConnection]
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
          chainId={defaultChainId}
          classNames={classNames}
          closeIcon={closeIcon}
          closeModal={_closePickerModal}
          isOpen={pickerModalOpen}
          onClose={() => setPickerModalOpen(false)}
          selectWalletOverride={selectWalletOverride}
          wallets={enabledWalletsFiltered}
        />
      </WalletManagerContext.Provider>
    </ShuttleProvider>
  )
}
function useCallback(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.")
}
