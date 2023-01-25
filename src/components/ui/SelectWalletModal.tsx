import { useShuttle } from "@delphi-labs/shuttle"
import React, { FunctionComponent, useState } from "react"

import { WalletConnectionStatus } from "../../enums"
import { Wallet } from "../../types"
import { BaseModal, BaseModalProps } from "./BaseModal"
import { selectWalletStyles } from "./Styles"

interface Props extends BaseModalProps {
  wallets: Wallet[]
  chainId: string
  closeModal: () => void
  setStatus: (status: WalletConnectionStatus) => void
  selectWalletOverride?: string
}

export const SelectWalletModal: FunctionComponent<Props> = ({
  wallets,
  chainId,
  closeModal,
  classNames,
  selectWalletOverride,
  setStatus,
  ...props
}) => {
  const { connect, providers } = useShuttle()
  const [isHover, setIsHover] = useState("")
  const handleMouseEnter = (walletID: string) => {
    setIsHover(walletID)
  }

  const handleMouseLeave = () => {
    setIsHover("")
  }

  const handleConnectClick = async (providerId: string, chainId: string) => {
    closeModal()
    const slightDelay = setTimeout(
      () => setStatus(WalletConnectionStatus.Connecting),
      500
    )

    let connected = true
    try {
      await connect(providerId, chainId)
    } catch (error) {
      if (error) {
        console.error(error)
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

  const walletItem = (wallet: Wallet) => {
    return (
      <div key={wallet.id}>
        <div
          key={wallet.id}
          className={classNames?.wallet}
          onClick={(e) => {
            e.preventDefault()
            setIsHover("")
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
          .filter((wallet) => wallet.installed === true)
          .map((installedWallet) => walletItem(installedWallet))}
        {wallets
          .filter((wallet) => wallet.installed !== true)
          .map((installableWallet) => walletItem(installableWallet))}
      </div>
    </BaseModal>
  )
}
