import React, { FunctionComponent, ReactNode } from "react"
import { StationWalletTutorial } from "src/types"

import { BaseModal, BaseModalProps } from "./BaseModal"
import { modalStyles } from "./Styles"

interface Props extends BaseModalProps {
  stationWalletTutorial?: StationWalletTutorial
  reset: () => void
  renderLoader?: () => ReactNode
}

export const StationWalletErrorModal: FunctionComponent<Props> = ({
  isOpen,
  classNames,
  stationWalletTutorial,
  reset,
  ...props
}) => {
  return (
    <BaseModal
      classNames={classNames}
      isOpen={isOpen}
      maxWidth="540px"
      title={
        stationWalletTutorial?.headline
          ? stationWalletTutorial?.headline
          : "Connection Failed"
      }
      {...props}
    >
      <div style={modalStyles.body}>
        <p style={modalStyles.text}>
          {stationWalletTutorial?.intro
            ? stationWalletTutorial?.intro
            : "Connecting to your Station Wallet failed. Potential reasons include:"}
        </p>
        <p style={modalStyles.textSmall}>
          {stationWalletTutorial?.wrongNetwork
            ? stationWalletTutorial?.wrongNetwork
            : "1. You have the wrong network selected. Please make sure to select 'Mainnets' or 'Testnets' by clicking on the gear icon in your Station Wallet interface."}
        </p>
        <p style={modalStyles.textSmall}>
          {stationWalletTutorial?.reimportWallet
            ? stationWalletTutorial?.reimportWallet
            : "2. Your wallet address may use a legacy derivation path. Removing and reimporting it into Station Wallet will add support for BIP44 paths in addition to the 330 cointype without impacting your balances. If you are using a Ledger, remove your Ledger from your Station Wallet and import it again (making sure to click 'yes' on the 'Import Cosmos accounts' page). If you are not using a Ledger, make sure you've backed up your mnemonic phrase. Then, remove your wallet from the extension and re-add it by importing your mnemonic phrase."}
        </p>
        <p style={modalStyles.textSubInfo}>
          {stationWalletTutorial?.ready
            ? stationWalletTutorial?.ready
            : "After trying the suggestions above, please retry the connection."}
        </p>
        <button onClick={reset} style={modalStyles.button}>
          {stationWalletTutorial?.retry
            ? stationWalletTutorial?.retry
            : "Retry Connection"}
        </button>
      </div>
    </BaseModal>
  )
}
