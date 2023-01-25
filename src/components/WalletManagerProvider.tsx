import { Network, ShuttleProvider, WalletProvider } from "@delphi-labs/shuttle"
import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"

import { WalletConnectionStatus } from "../enums"
import { Wallet, WalletManagerProviderProps } from "../types"
import { getChainInfo, wallets } from "../utils"
import { SelectWalletModal } from "./ui"
import { EnablingWalletModal } from "./ui/EnablingWalletModal"
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
  enablingStringOverride,
  persistent = false,
  renderLoader,
  selectWalletOverride,
  walletMetaOverride,
}) => {
  const [pickerModalOpen, setPickerModalOpen] = useState(false)
  const [status, setStatus] = useState<WalletConnectionStatus>(
    WalletConnectionStatus.Unconnected
  )

  const enabledWalletsFiltered: Wallet[] = useMemo(() => {
    const tempEnabledWalletFiltered: Wallet[] = []
    enabledWallets.forEach((walletID) => {
      wallets.map((walletData) => {
        if (walletData.id === walletID) {
          tempEnabledWalletFiltered.push(walletData)
          return
        }
      })
    })

    if (walletMetaOverride) {
      Object.entries(walletMetaOverride).forEach(([id, override]) => {
        Object.entries(override).forEach(([key, value]) => {
          tempEnabledWalletFiltered.forEach((wallet, index) => {
            if (wallet.id === id) {
              tempEnabledWalletFiltered[index][key] = value
            }
          })
        })
      })
    }

    return tempEnabledWalletFiltered
  }, [enabledWallets, walletMetaOverride])

  const providers: WalletProvider[] = useMemo(() => {
    const network = getChainInfo(defaultChainId, chainInfoOverrides)
    const mappedNetwork: any = network
    mappedNetwork.name = mappedNetwork.chainName
    const networks: Network[] = [mappedNetwork]
    const tempProviders: WalletProvider[] = []

    enabledWalletsFiltered.forEach((wallet) => {
      tempProviders.push(new wallet.provider({ networks }))
    })

    return tempProviders
  }, [enabledWalletsFiltered, defaultChainId, chainInfoOverrides])

  useEffect(
    () => {
      if (status !== WalletConnectionStatus.Unconnected || !persistent) return

      const shuttleStorage = localStorage.getItem("shuttle")
      if (shuttleStorage !== null && shuttleStorage !== "[]")
        setStatus(WalletConnectionStatus.Connected)
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const closePickerModal = () => setPickerModalOpen(false)

  const beginConnection = useCallback(() => setPickerModalOpen(true), [])

  const terminateConnection = useCallback(
    () => setStatus(WalletConnectionStatus.Unconnected),
    []
  )

  const statusChange = useCallback(
    (newStatus: WalletConnectionStatus) => setStatus(newStatus),
    []
  )

  const value = useMemo(
    () => ({
      connect: beginConnection,
      disconnect: terminateConnection,
      status,
    }),
    [beginConnection, terminateConnection, status]
  )

  return (
    <ShuttleProvider persistent={persistent} providers={providers}>
      <WalletManagerContext.Provider value={value}>
        {children}
        <SelectWalletModal
          chainId={defaultChainId}
          classNames={classNames}
          closeIcon={closeIcon}
          closeModal={closePickerModal}
          isOpen={pickerModalOpen}
          onClose={() => setPickerModalOpen(false)}
          selectWalletOverride={selectWalletOverride}
          setStatus={statusChange}
          wallets={enabledWalletsFiltered}
        />
        <EnablingWalletModal
          classNames={classNames}
          closeIcon={closeIcon}
          enablingStringOverride={enablingStringOverride}
          isOpen={status === WalletConnectionStatus.Connecting}
          renderLoader={renderLoader}
        />
      </WalletManagerContext.Provider>
    </ShuttleProvider>
  )
}
