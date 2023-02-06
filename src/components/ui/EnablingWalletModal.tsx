import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react"

import { BaseModal, BaseModalProps } from "./BaseModal"
import { enablingWalletStyles } from "./Styles"

interface Props extends BaseModalProps {
  enablingStringOverride?: string | ReactElement
  reset: () => void
  renderLoader?: () => ReactNode
}

export const EnablingWalletModal: FunctionComponent<Props> = ({
  isOpen,
  classNames,
  renderLoader,
  enablingStringOverride,
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
        enablingStringOverride ? enablingStringOverride : "Enabling Wallet..."
      }
      {...props}
    >
      <div style={enablingWalletStyles.body}>
        {renderLoader && renderLoader()}
        {showHelp && (
          <>
            <p style={enablingWalletStyles.text}>
              If nothing shows up in your wallet try to connect again, by
              clicking on the button below. Refresh the page if the problem
              persists.
            </p>
            <button onClick={reset} style={enablingWalletStyles.button}>
              Reset Connection
            </button>
          </>
        )}
      </div>
    </BaseModal>
  )
}
