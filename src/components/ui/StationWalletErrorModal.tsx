import React, { FunctionComponent, ReactNode, useEffect, useState } from "react"
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
  renderLoader,
  stationWalletTutorial,
  reset,
  ...props
}) => {
  const [showHelp, setShowHelp] = useState(false)
  useEffect(() => {
    if (!isOpen) {
      setShowHelp(false)
      return
    }

    const timeout = setTimeout(() => setShowHelp(true), 8000)
    return () => clearTimeout(timeout)
  }, [isOpen, setShowHelp])

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
            : "Connecting to your Station Wallet, failed."}
        </p>
        <p style={modalStyles.textSmall}>
          {stationWalletTutorial?.reimportWallet
            ? stationWalletTutorial?.reimportWallet
            : "1. You have likely just the 330 cointype in your current wallet. If you are using a Ledger can you disconnect it from the extension and then reconnect it again (make sure to click on YES on the 'import cosmos accounts' page) If you are not using a ledger delete you wallet from the extension and import your mnemonic again."}
        </p>
        <p style={modalStyles.textSmall}>
          {stationWalletTutorial?.wrongNetwork
            ? stationWalletTutorial?.wrongNetwork
            : "2. You have the wrong network selected. Please make sure to select 'Mainnets' or 'Testnets' by clicking on the gear icon in your Station Wallet interface."}
        </p>
        <p style={modalStyles.textSubInfo}>
          {stationWalletTutorial?.ready
            ? stationWalletTutorial?.ready
            : "If you followed the instructions above, you can retry the connection now."}
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
