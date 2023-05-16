import {
  MobileWalletProvider,
  ShuttleProvider,
  WalletProvider,
} from "@delphi-labs/shuttle"
import {
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
import { StationWalletErrorModal } from "./ui/StationWalletErrorModal"
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
  noWalletsOverride,
  scanQRCodeOverride,
  stationWalletTutorial,
  walletMetaOverride,
}) => {
  const [pickerModalOpen, setPickerModalOpen] = useState(false)
  const [selectableWallets, setSelectableWallets] = useState<Wallet[]>([])
  const [status, setStatus] = useState<WalletConnectionStatus>(
    WalletConnectionStatus.Unconnected
  )

  const networks = useMemo(() => {
    const network = getChainInfo(defaultChainId, chainInfoOverrides)
    return [network]
  }, [defaultChainId, chainInfoOverrides])

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
              //@ts-ignore
              tempEnabledWalletFiltered[index][key] = value
            }
          })
        })
      })
    }

    return tempEnabledWalletFiltered
  }, [enabledWallets, walletMetaOverride])

  const providers: WalletProvider[] | undefined = useMemo(() => {
    if (!networks) return
    const tempProviders: WalletProvider[] = []

    enabledWalletsFiltered.forEach((wallet) => {
      if (wallet.type === "extension")
        tempProviders.push(new wallet.provider({ networks }))
    })

    return tempProviders
  }, [enabledWalletsFiltered, networks])

  const mobileProviders: MobileWalletProvider[] | undefined = useMemo(() => {
    if (!networks) return
    const tempProviders: MobileWalletProvider[] = []

    enabledWalletsFiltered.forEach((wallet) => {
      if (wallet.type === "app") {
        tempProviders.push(new wallet.provider({ networks }))
      }
    })

    return tempProviders
  }, [enabledWalletsFiltered, networks])

  useEffect(
    () => {
      if (
        (status !== WalletConnectionStatus.Unconnected &&
          status !== WalletConnectionStatus.AutoConnect) ||
        !persistent
      )
        return

      const shuttleStorage = localStorage.getItem("shuttle")
      if (shuttleStorage !== null && shuttleStorage !== "[]")
        setStatus(WalletConnectionStatus.AutoConnect)
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const closePickerModal = () => {
    if (status === WalletConnectionStatus.WalletConnect) {
      setStatus(WalletConnectionStatus.Unconnected)
    }

    setPickerModalOpen(false)
  }

  const beginConnection = useCallback(() => {
    setStatus(WalletConnectionStatus.Unconnected)
    const walletState: Wallet[] = []
    enabledWalletsFiltered.forEach((wallet) => {
      const walletProvider = providers?.find((provider) => {
        return provider.id === wallet.id
      })

      walletState.push({
        ...wallet,
        installed: walletProvider?.initialized || walletProvider?.initializing,
      })
    })
    setSelectableWallets(walletState)
    setPickerModalOpen(true)
  }, [providers, enabledWalletsFiltered])

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

  const resetConnection = () => {
    setStatus(WalletConnectionStatus.Retry)
  }

  if (!providers || !mobileProviders) return null

  return (
    <ShuttleProvider
      mobileProviders={mobileProviders}
      persistent={persistent}
      providers={providers}
    >
      <WalletManagerContext.Provider value={value}>
        {children}
        <SelectWalletModal
          chainId={defaultChainId}
          classNames={classNames}
          closeIcon={closeIcon}
          closeModal={closePickerModal}
          isOpen={pickerModalOpen}
          noWalletsOverride={noWalletsOverride}
          onClose={() => setPickerModalOpen(false)}
          scanQRCodeOverride={scanQRCodeOverride}
          selectWalletOverride={selectWalletOverride}
          setStatus={statusChange}
          status={status}
          wallets={selectableWallets}
        />
        <EnablingWalletModal
          classNames={classNames}
          closeIcon={closeIcon}
          enablingStringOverride={enablingStringOverride}
          isOpen={status === WalletConnectionStatus.Connecting}
          onClose={() => {
            setStatus(WalletConnectionStatus.Unconnected)
            setPickerModalOpen(true)
          }}
          renderLoader={renderLoader}
          reset={resetConnection}
        />
        <StationWalletErrorModal
          classNames={classNames}
          closeIcon={closeIcon}
          isOpen={status === WalletConnectionStatus.StationWalletError}
          onClose={() => {
            setStatus(WalletConnectionStatus.Unconnected)
            setPickerModalOpen(true)
          }}
          renderLoader={renderLoader}
          reset={resetConnection}
          stationWalletTutorial={stationWalletTutorial}
        />
      </WalletManagerContext.Provider>
    </ShuttleProvider>
  )
}
