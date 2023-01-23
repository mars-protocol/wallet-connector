import { Network, ShuttleProvider, WalletProvider } from "@delphi-labs/shuttle"
import React, { FunctionComponent, useCallback, useMemo, useState } from "react"

import { getChainInfo, Wallets } from "../utils"
import { SelectWalletModal } from "./ui"
import { WalletManagerContext } from "./WalletManagerContext"

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
  const enabledWalletsFiltered: Wallet[] = []
  enabledWallets.forEach((walletID) => {
    Wallets.map((walletData) => {
      if (walletData.id === walletID) {
        enabledWallets.push(walletData)
        return
      }
    })
  })

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

  const network = getChainInfo(defaultChainId, chainInfoOverrides)
  const mappedNetwork: any = network
  mappedNetwork.name = mappedNetwork.chainName
  const networks: Network[] = [mappedNetwork]
  const providers: WalletProvider[] = []

  enabledWalletsFiltered.forEach((wallet) => {
    providers.push(new wallet.provider({ networks }))
  })

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
    <ShuttleProvider persistent={persistent} providers={providers}>
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
