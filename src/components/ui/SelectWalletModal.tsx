import React, { FunctionComponent } from "react"
import styled from "styled-components"

import { Wallet, WalletType } from "../../types"
import { BaseModal, BaseModalProps } from "./BaseModal"

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
}) => (
  <BaseModal classNames={classNames} title="Select a wallet" {...props}>
    <WalletList className={classNames?.walletList}>
      {wallets.map((wallet, index) => (
        <div key={index}>
          {wallet.type === WalletType.Keplr &&
          isKeplrExtentionNotInstalled &&
          wallet.install &&
          wallet.installURL ? (
            <WalletRow
              key={wallet.type}
              className={classNames?.wallet}
              onClick={(e) => {
                e.preventDefault()
                window.open(wallet.installURL, "_blank")
                closeModal()
              }}
            >
              <WalletIconImg
                alt={`${wallet.name} logo`}
                className={classNames?.walletImage}
                src={wallet.imageUrl}
              />
              <WalletInfo className={classNames?.walletInfo}>
                <WalletName className={classNames?.walletName}>
                  {wallet.install}
                </WalletName>
                <WalletDescription className={classNames?.walletDescription}>
                  {wallet.installURL}
                </WalletDescription>
              </WalletInfo>
            </WalletRow>
          ) : (
            <WalletRow
              key={wallet.type}
              className={classNames?.wallet}
              onClick={(e) => {
                e.preventDefault()
                selectWallet(wallet)
              }}
            >
              <WalletIconImg
                alt={`${wallet.name} logo`}
                className={classNames?.walletImage}
                src={wallet.imageUrl}
              />
              <WalletInfo className={classNames?.walletInfo}>
                <WalletName className={classNames?.walletName}>
                  {wallet.name}
                </WalletName>
                <WalletDescription className={classNames?.walletDescription}>
                  {wallet.description}
                </WalletDescription>
              </WalletInfo>
            </WalletRow>
          )}
        </div>
      ))}
    </WalletList>
  </BaseModal>
)

const WalletList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const WalletRow = styled.div`
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  background-color: rgb(229 231 235);
  box-shadow: inset 0 0 0 1px rgb(156 163 175);

  &:hover {
    cursor: pointer;
  }
`

const WalletIconImg = styled.img`
  width: 4rem;
  height: 4rem;
`

const WalletInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`

const WalletName = styled.div`
  color: black;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
`

const WalletDescription = styled.div`
  margin-top: 0.25rem;
  color: rgb(75 85 99);
`
