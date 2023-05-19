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
  useRef,
  useState,
} from "react"

import { WalletConnectionStatus } from "../enums"
import { Wallet, WalletManagerProviderProps } from "../types"
import {
  getChainInfo,
  getEnabledWallets,
  getMobileProviders,
  getWalletProviders,
  wallets,
} from "../utils"
import AutoConnectHandler from "./AutoConnectHandler"
import DisconnectHandler from "./DisconnectHandler"
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
  chainIds,
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
  const [providers, setProviders] = useState<WalletProvider[]>()
  const [mobileProviders, setMobileProviders] =
    useState<MobileWalletProvider[]>()

  const networks = chainIds.map((chainId) => {
    return getChainInfo(chainId, chainInfoOverrides)
  })

  const filteredWallets = getEnabledWallets(
    wallets,
    enabledWallets,
    walletMetaOverride
  )

  const usePrevious = (value: any) => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current
  }

  const prevDefaultChainId = usePrevious(defaultChainId)

  useEffect(() => {
    if (providers || !filteredWallets || !networks) return
    //@ts-ignore
    setProviders(getWalletProviders(filteredWallets, networks))
  }, [filteredWallets, networks, providers])

  useEffect(() => {
    if (mobileProviders || !filteredWallets || !networks) return
    setMobileProviders(getMobileProviders(filteredWallets, networks))
  }, [filteredWallets, networks, mobileProviders])

  useEffect(() => {
    setStatus(
      persistent
        ? WalletConnectionStatus.AutoConnect
        : WalletConnectionStatus.Unconnected
    )
  }, [defaultChainId, persistent])

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

  useEffect(() => {
    if (!providers || prevDefaultChainId === defaultChainId) return
    const walletState: Wallet[] = []
    filteredWallets.forEach((wallet) => {
      //@ts-ignore
      const walletProvider = providers.find((provider) => {
        return provider.id === wallet.id
      })
      if (wallet.supportedChains.includes(defaultChainId)) {
        walletState.push({
          ...wallet,
          installed:
            walletProvider?.initialized || walletProvider?.initializing,
        })
      }
    })
    setSelectableWallets(walletState)
    if (persistent) setStatus(WalletConnectionStatus.AutoConnect)
  }, [
    providers,
    filteredWallets,
    persistent,
    selectableWallets.length,
    defaultChainId,
    prevDefaultChainId,
  ])

  const beginConnection = useCallback(() => {
    setPickerModalOpen(true)
  }, [])

  const terminateConnection = useCallback(
    () => setStatus(WalletConnectionStatus.Disconnecting),
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

  if (!providers) return null

  return (
    <ShuttleProvider
      mobileProviders={mobileProviders ?? []}
      persistent={persistent}
      providers={providers}
    >
      <WalletManagerContext.Provider value={value}>
        {status === WalletConnectionStatus.AutoConnect && (
          <AutoConnectHandler
            chainId={defaultChainId}
            setConnected={() => setStatus(WalletConnectionStatus.Connected)}
          />
        )}
        {status === WalletConnectionStatus.Disconnecting && (
          <DisconnectHandler
            chainId={defaultChainId}
            setDisconnected={() =>
              setStatus(WalletConnectionStatus.Unconnected)
            }
          />
        )}
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
