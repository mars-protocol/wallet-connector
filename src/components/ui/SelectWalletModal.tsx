import { useShuttle } from "@delphi-labs/shuttle"
import React, { FunctionComponent, useEffect, useState } from "react"
import { isMobile, isTablet } from "react-device-detect"

import { WalletConnectionStatus, WalletID } from "../../enums"
import { Wallet } from "../../types"
import { BaseModal, BaseModalProps } from "./BaseModal"
import { selectWalletStyles } from "./Styles"

interface Props extends BaseModalProps {
  wallets: Wallet[]
  chainId: string
  closeModal: () => void
  setStatus: (status: WalletConnectionStatus) => void
  selectWalletOverride?: string
  status: WalletConnectionStatus
}

export const SelectWalletModal: FunctionComponent<Props> = ({
  wallets,
  chainId,
  closeModal,
  classNames,
  selectWalletOverride,
  setStatus,
  status,
  ...props
}) => {
  const { connect, providers, recentWallet, disconnect } = useShuttle()
  const [isHover, setIsHover] = useState<WalletID | undefined>()
  const [lastClicked, setLastClicked] = useState<WalletID | undefined>()

  const handleMouseEnter = (walletID: WalletID) => {
    setIsHover(walletID)
  }

  const handleMouseLeave = () => {
    setIsHover(undefined)
  }

  const handleConnectClick = async (providerId: WalletID, chainId: string) => {
    setLastClicked(providerId)
    closeModal()
    const slightDelay = setTimeout(
      () => setStatus(WalletConnectionStatus.Connecting),
      500
    )

    let connected = true
    try {
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
        : WalletConnectionStatus.Errored
    )
  }

  wallets.forEach((wallet, index) => {
    const walletProvider = providers.find((provider) => {
      return provider.id === wallet.id
    })

    wallets[index].installed =
      walletProvider?.initialized || walletProvider?.initializing
  })

  useEffect(
    () => {
      if (status === WalletConnectionStatus.Retry && lastClicked) {
        handleConnectClick(lastClicked, chainId)
      }
      if (
        status === WalletConnectionStatus.AutoConnect &&
        recentWallet !== null
      ) {
        recentWallet.network.chainId === chainId
          ? handleConnectClick(recentWallet.providerId as WalletID, chainId)
          : () => {
              disconnect({
                providerId: recentWallet.providerId,
                chainId: recentWallet.network.chainId,
              })
              setStatus(WalletConnectionStatus.Unconnected)
            }
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [status, recentWallet]
  )

  const walletItem = (wallet: Wallet) => {
    return (
      <div key={wallet.id}>
        <div
          key={wallet.id}
          className={classNames?.wallet}
          onClick={(e) => {
            e.preventDefault()
            setIsHover(undefined)
            if (wallet.installed) {
              handleConnectClick(wallet.id, chainId)
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
            src={wallet.imageUrl}
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
              {wallet.installed ? wallet.name : wallet.install}
            </div>
            <div
              className={classNames?.walletDescription}
              style={
                classNames?.walletDescription
                  ? undefined
                  : selectWalletStyles.walletDescription
              }
            >
              {wallet.installed ? wallet.description : wallet.installURL}
            </div>
          </div>
        </div>
      </div>
    )
  }

  const walletType = isMobile || isTablet ? "app" : "extension"

  const sortedWallets = wallets
    .filter((wallet) => wallet.type === walletType)
    .sort((a) => (a.installed ? -1 : 1))

  if (!sortedWallets.length) {
    return (
      <BaseModal classNames={classNames} title={"Select a wallet"} {...props}>
        <p
          className={classNames?.noneAvailableText}
          style={
            classNames?.noneAvailableText
              ? undefined
              : selectWalletStyles.noneAvailableText
          }
        >
          There are currently no wallets supported for your device
        </p>
      </BaseModal>
    )
  }

  return (
    <BaseModal
      classNames={classNames}
      title={selectWalletOverride ? selectWalletOverride : "Select a wallet"}
      {...props}
    >
      <div
        className={classNames?.walletList}
        style={
          classNames?.walletList ? undefined : selectWalletStyles.walletList
        }
      >
        {wallets
          .filter((wallet) => wallet.type === walletType)
          .sort((a) => (a.installed ? -1 : 1))
          .map((installedWallet) => walletItem(installedWallet))}
      </div>
    </BaseModal>
  )
}
