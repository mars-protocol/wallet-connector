import React, { FunctionComponent } from "react"

import { Wallet, WalletType } from "../../types"
import { BaseModal, BaseModalProps } from "./BaseModal"
import { selectWalletStyles } from "./Styles"

export interface SelectWalletModalProps extends BaseModalProps {
  wallets: Wallet[]
  selectWallet: (wallet: Wallet) => void
  closeModal: () => void
  isKeplrExtentionNotInstalled: boolean
}

export const SelectWalletModal: FunctionComponent<SelectWalletModalProps> = ({
  wallets,
  selectWallet,
  closeModal,
  classNames,
  isKeplrExtentionNotInstalled,
  ...props
}) => {
  return (
    <BaseModal classNames={classNames} title="Select a wallet" {...props}>
      <div
        className={classNames?.walletList}
        style={
          classNames?.walletList ? undefined : selectWalletStyles.walletList
        }
      >
        {wallets.map((wallet, index) => {
          const isKeplrInstall =
            wallet.type === (WalletType.Leap || WalletType.Keplr) &&
            isKeplrExtentionNotInstalled &&
            wallet.install &&
            wallet.installURL
          return (
            <div key={index}>
              <div
                key={wallet.type}
                className={classNames?.wallet}
                onClick={(e) => {
                  e.preventDefault()
                  if (isKeplrInstall) {
                    window.open(wallet.installURL, "_blank")
                    closeModal()
                  } else {
                    selectWallet(wallet)
                  }
                }}
                style={
                  classNames?.wallet ? undefined : selectWalletStyles.walletRow
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
