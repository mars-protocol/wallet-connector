import React, { FunctionComponent, useState } from "react"
import { WalletID } from "src/enums"

import { BaseModal, BaseModalProps } from "./BaseModal"
import { selectWalletStyles } from "./Styles"

interface Props extends BaseModalProps {
  wallets: Wallet[]
  selectWallet: (wallet: string) => void
  closeModal: () => void
  selectWalletOverride?: string
}

export const SelectWalletModal: FunctionComponent<Props> = ({
  wallets,
  selectWallet,
  closeModal,
  classNames,
  selectWalletOverride,
  ...props
}) => {
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
                    selectWallet(wallet.id)
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
