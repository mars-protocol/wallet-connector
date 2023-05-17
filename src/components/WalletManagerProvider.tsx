import {
  MobileWalletProvider,
  ShuttleProvider,
  WalletProvider,
} from "@delphi-labs/shuttle"
import {
  FunctionComponent,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
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

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      providers ||
      !filteredWallets ||
      !networks
    )
      return
    //@ts-ignore
    setProviders(getWalletProviders(filteredWallets, networks))
  }, [filteredWallets, networks, providers])

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      mobileProviders ||
      !filteredWallets ||
      !networks
    )
      return
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

  const beginConnection = useCallback(() => {
    if (!providers) return
    setStatus(WalletConnectionStatus.Unconnected)
    const walletState: Wallet[] = []
    filteredWallets.forEach((wallet) => {
      //@ts-ignore
      const walletProvider = providers.find((provider) => {
        return provider.id === wallet.id
      })

      walletState.push({
        ...wallet,
        installed: walletProvider?.initialized || walletProvider?.initializing,
      })
    })
    setSelectableWallets(walletState)
    setPickerModalOpen(true)
  }, [providers, filteredWallets])

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

  if (!providers) return null

  return (
    <Suspense fallback={null}>
      <ShuttleProvider
        mobileProviders={mobileProviders ?? []}
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
    </Suspense>
  )
}
