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
  const [isHover, setIsHover] = useState("")
  const handleMouseEnter = (walletID: string) => {
    setIsHover(walletID)
  }

  const handleMouseLeave = () => {
    setIsHover("")
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
            <div key={index}>
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
                  src={
                    wallet.imageUrl
                      ? wallet.imageUrl
                      : `'https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/${wallet.id}-wallet-extension.png'`
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
