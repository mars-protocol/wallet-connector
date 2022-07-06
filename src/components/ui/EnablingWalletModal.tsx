import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react"

import { BaseModal, BaseModalProps } from "./BaseModal"

export interface EnablingWalletModalProps extends BaseModalProps {
  enablingStringOverride?: string | ReactElement
  renderLoader?: () => ReactNode
  reset: () => void
}

export const EnablingWalletModal: FunctionComponent<
  EnablingWalletModalProps
> = ({
  isOpen,
  classNames,
  renderLoader,
  enablingStringOverride,
  reset,
  ...props
}) => {
  const [showHelp, setShowHelp] = useState(false)
  // Show help if timeout is reached.
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
      maxWidth="24rem"
      title={
        enablingStringOverride ? enablingStringOverride : "Enabling Wallet..."
      }
      {...props}
    >
      {showHelp && (
        <p className={classNames?.textContent}>
          If nothing shows up in your wallet,{" "}
          <button onClick={reset}>click here to reset</button> and try
          connecting again. Refresh the page if the problem persists.
        </p>
      )}

      {renderLoader && <div className="mt-4">{renderLoader()}</div>}
    </BaseModal>
  )
}
