import { useShuttle } from "@delphi-labs/shuttle"
import React, { FunctionComponent, useState } from "react"

import { WalletConnectionStatus } from "../../enums"
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
    setStatus(WalletConnectionStatus.Connecting)
    let connected = true
    try {
      await connect(providerId, chainId)
    } catch (error) {
      if (error) {
        connected = false
      }
    }
    setStatus(
      connected
        ? WalletConnectionStatus.Connected
        : WalletConnectionStatus.Errored
    )
    closeModal()
  }

  console.warn("providers", providers)

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
        {wallets.map((wallet, index) => {
          const installWallet = providers.map((provider) => {
            if (provider.id === wallet.id) {
              return !provider.initialized && !provider.initializing
            }
          })

          return (
            <div key={index}>
              <div
                key={wallet.id}
                className={classNames?.wallet}
                onClick={(e) => {
                  e.preventDefault()
                  setIsHover("")
                  if (installWallet) {
                    window.open(wallet.installURL, "_blank")
                    closeModal()
                  } else {
                    handleConnectClick(wallet.id, chainId)
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
                    classNames?.walletInfo
                      ? undefined
                      : selectWalletStyles.walletInfo
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
                    {installWallet ? wallet.install : wallet.name}
                  </div>
                  <div
                    className={classNames?.walletDescription}
                    style={
                      classNames?.walletDescription
                        ? undefined
                        : selectWalletStyles.walletDescription
                    }
                  >
                    {installWallet ? wallet.installURL : wallet.description}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </BaseModal>
  )
}
