import { useShuttle } from "@delphi-labs/shuttle"
import { FunctionComponent, useEffect, useState } from "react"
import { isAndroid, isDesktop, isIOS, isMobile } from "react-device-detect"
import QRCode from "react-qr-code"

import { ChainInfoID, WalletConnectionStatus, WalletID } from "../../enums"
import { Wallet } from "../../types"
import { BaseModal, BaseModalProps } from "./BaseModal"
import { selectWalletStyles } from "./Styles"

interface Props extends BaseModalProps {
  wallets: Wallet[]
  chainId: ChainInfoID
  closeModal: () => void
  noWalletsOverride?: string
  setStatus: (status: WalletConnectionStatus) => void
  selectWalletOverride?: string
  scanQRCodeOverride?: string
  status: WalletConnectionStatus
}

export const SelectWalletModal: FunctionComponent<Props> = ({
  wallets,
  chainId,
  closeModal,
  classNames,
  noWalletsOverride,
  selectWalletOverride,
  scanQRCodeOverride,
  setStatus,
  status,
  ...props
}) => {
  const { connect, recentWallet, disconnect, mobileConnect } = useShuttle()
  const [isHover, setIsHover] = useState<WalletID | undefined>()
  const [lastClicked, setLastClicked] = useState<WalletID | undefined>()
  const [qrCodeUrl, setQRCodeUrl] = useState<string | undefined>()

  const handleMouseEnter = (walletID: WalletID) => {
    setIsHover(walletID)
  }

  const handleMouseLeave = () => {
    setIsHover(undefined)
  }

  const handleConnectClick = async (
    providerId: WalletID,
    chainId: ChainInfoID,
    walletType: string
  ) => {
    setLastClicked(providerId)

    console.log(providerId, chainId, walletType)

    let connected = true
    if (walletType !== "app") {
      const slightDelay = setTimeout(
        () => setStatus(WalletConnectionStatus.Connecting),
        500
      )
      try {
        closeModal()
        await connect({ providerId, chainId })
      } catch (error) {
        if (error) {
          console.error("Connecting with:", { providerId, chainId })
          console.error("Wallet Connector: ", error)
          connected = false
        }
      }
      clearTimeout(slightDelay)
      setStatus(
        connected
          ? WalletConnectionStatus.Connected
          : providerId === WalletID.StationWallet
          ? WalletConnectionStatus.StationWalletError
          : WalletConnectionStatus.Errored
      )
    } else {
      try {
        const urls = await mobileConnect({
          mobileProviderId: providerId,
          chainId,
          callback: () => {
            closeModal()
          },
        })
        if (!isDesktop) {
          setStatus(WalletConnectionStatus.Connecting)
          if (isAndroid) {
            window.location.href = urls.androidUrl
          } else if (isIOS) {
            window.location.href = urls.iosUrl
          } else {
            window.location.href = urls.androidUrl
          }
        } else {
          setStatus(WalletConnectionStatus.WalletConnect)
          setQRCodeUrl(urls.walletconnectUrl)
        }
      } catch (error) {
        if (error) {
          console.error("Connecting with:", { providerId, chainId })
          console.error("Wallet Connector: ", error)
          connected = false
        }
      }
    }
  }

  useEffect(
    () => {
      if (
        ((status === WalletConnectionStatus.Connecting && isMobile) ||
          status === WalletConnectionStatus.WalletConnect) &&
        recentWallet
      ) {
        setStatus(WalletConnectionStatus.Connected)
      }

      if (status === WalletConnectionStatus.Retry && lastClicked) {
        handleConnectClick(lastClicked, chainId, "extension")
      }
      if (
        status === WalletConnectionStatus.AutoConnect &&
        recentWallet !== null
      ) {
        if (recentWallet.providerId.split("-")[0] === "mobile") {
          disconnect({
            providerId: recentWallet.providerId,
            chainId: recentWallet.network.chainId,
          })
          setStatus(WalletConnectionStatus.Unconnected)
        }

        recentWallet.network.chainId === chainId
          ? handleConnectClick(
              recentWallet.providerId as WalletID,
              chainId,
              "extension"
            )
          : () => {
              disconnect({
                providerId: recentWallet.providerId,
                chainId: recentWallet.network.chainId,
              })
              setStatus(WalletConnectionStatus.Unconnected)
            }
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [status, recentWallet, isMobile]
  )

  const walletItem = (wallet: Wallet) => {
    const isApp = wallet.type === "app"
    const isWalletConnect = isApp && isDesktop

    return (
      <div key={wallet.id}>
        <div
          key={wallet.id}
          className={classNames?.wallet}
          onClick={(e) => {
            e.preventDefault()
            setIsHover(undefined)
            if (wallet.installed || wallet.type === "app") {
              handleConnectClick(wallet.id, chainId, wallet.type)
            } else {
              window.open(wallet.installURL, "_blank")
              closeModal()
            }
          }}
          onMouseEnter={() => {
            handleMouseEnter(wallet.id)
          }}
          onMouseLeave={handleMouseLeave}
          style={
            classNames?.wallet
              ? undefined
              : isHover === wallet.id
              ? {
                  ...selectWalletStyles.wallet,
                  ...selectWalletStyles.walletHover,
                }
              : selectWalletStyles.wallet
          }
        >
          <img
            alt={`${wallet.name} logo`}
            className={classNames?.walletImage}
            src={isWalletConnect ? wallet.mobileImageUrl : wallet.imageUrl}
            style={
              classNames?.walletImage
                ? undefined
                : selectWalletStyles.walletIconImg
            }
          />
          <div
            className={classNames?.walletInfo}
            style={
              classNames?.walletInfo ? undefined : selectWalletStyles.walletInfo
            }
          >
            <div
              className={classNames?.walletName}
              style={
                classNames?.walletName
                  ? undefined
                  : selectWalletStyles.walletName
              }
            >
              {isWalletConnect
                ? wallet.walletConnect
                : isApp || wallet.installed
                ? wallet.name
                : wallet.install}
            </div>
            <div
              className={classNames?.walletDescription}
              style={
                classNames?.walletDescription
                  ? undefined
                  : selectWalletStyles.walletDescription
              }
            >
              {isApp || wallet.installed
                ? wallet.description
                : wallet.installURL}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const sortedWallets = wallets
    .filter((wallet) => isDesktop || wallet.type === "app")
    .sort((a, b) => {
      if (a.installed === b.installed) return 0
      return a.installed ? -1 : 1
    })

  const installedWallets = wallets.filter((wallet) => wallet.installed)

  if (!sortedWallets.length) {
    return (
      <BaseModal
        classNames={classNames}
        title={selectWalletOverride ? selectWalletOverride : "Select a wallet"}
        {...props}
      >
        <p
          className={classNames?.noneAvailableText}
          style={
            classNames?.noneAvailableText
              ? undefined
              : selectWalletStyles.noneAvailableText
          }
        >
          {noWalletsOverride
            ? noWalletsOverride
            : "There are currently no wallets supported for your device"}
        </p>
      </BaseModal>
    )
  }

  return (
    <BaseModal
      classNames={classNames}
      title={
        status === WalletConnectionStatus.WalletConnect
          ? scanQRCodeOverride
            ? scanQRCodeOverride
            : "Scan QR Code to Connect"
          : selectWalletOverride
          ? selectWalletOverride
          : "Select a wallet"
      }
      {...props}
    >
      {status === WalletConnectionStatus.WalletConnect ? (
        <div
          className={classNames?.walletConnect}
          style={
            classNames?.walletConnect
              ? undefined
              : selectWalletStyles.walletConnect
          }
        >
          {qrCodeUrl && (
            <QRCode
              bgColor="transparent"
              className={classNames?.walletConnectQR}
              fgColor="##fff"
              style={
                classNames?.walletConnectQR
                  ? undefined
                  : selectWalletStyles.walletConnectQR
              }
              value={qrCodeUrl}
            />
          )}
        </div>
      ) : (
        <div
          className={classNames?.walletList}
          style={
            classNames?.walletList ? undefined : selectWalletStyles.walletList
          }
        >
          {isMobile && installedWallets.length
            ? installedWallets.map((wallet) => walletItem(wallet))
            : sortedWallets.map((wallet) => walletItem(wallet))}
        </div>
      )}
    </BaseModal>
  )
}
