import { useShuttle } from "@delphi-labs/shuttle"
import React, { FunctionComponent, useState } from "react"

import { WalletID } from "../../enums"
import { BaseModal, BaseModalProps } from "./BaseModal"
import { selectWalletStyles } from "./Styles"

interface Props extends BaseModalProps {
  wallets: Wallet[]
  chainId: string
  closeModal: () => void
  selectWalletOverride?: string
}

export const SelectWalletModal: FunctionComponent<Props> = ({
  wallets,
  chainId,
  closeModal,
  classNames,
  selectWalletOverride,
  ...props
}) => {
  const { connect } = useShuttle()
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
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
        {wallets.map((wallet, index) => {
          const isKeplrInstall =
            wallet.id === WalletID.Keplr && wallet.install && wallet.installURL
          return (
            <div
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                key={wallet.id}
                className={classNames?.wallet}
                onClick={(e) => {
                  e.preventDefault()
                  if (isKeplrInstall) {
                    window.open(wallet.installURL, "_blank")
                    closeModal()
                  } else {
                    connect(wallet.id, chainId)
                    closeModal()
                  }
                }}
                style={
                  classNames?.wallet
                    ? undefined
                    : isHover
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
                  src={
                    wallet.imageUrl
                      ? wallet.imageUrl
                      : `'./images/${wallet.id}-wallet-extension.png'`
                  }
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
                    {isKeplrInstall ? wallet.install : wallet.name}
                  </div>
                  <div
                    className={classNames?.walletDescription}
                    style={
                      classNames?.walletDescription
                        ? undefined
                        : selectWalletStyles.walletDescription
                    }
                  >
                    {isKeplrInstall ? wallet.installURL : wallet.description}
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
