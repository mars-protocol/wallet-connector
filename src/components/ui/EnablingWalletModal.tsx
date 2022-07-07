import { IEnableMeta } from "@walletconnect/types"
import React, {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react"
import styled from "styled-components"

import { BaseModal, BaseModalProps } from "./BaseModal"

export interface EnablingWalletModalProps extends BaseModalProps {
  enablingStringOverride?: string | ReactElement
  enablingMeta?: IEnableMeta
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
  enablingMeta,
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

  const ButtonRow = styled.div`
    display: flex;
    flex: 0 0 100%;
    flex-wrap: nowrap;
  `

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
        <>
          {enablingMeta ? (
            <ButtonRow>
              <p className={enablingMeta.textClassName}>{enablingMeta.text}</p>
              <button className={enablingMeta.buttonClassName} onClick={reset}>
                {enablingMeta.buttonText}
              </button>
            </ButtonRow>
          ) : (
            <p className={classNames?.textContent}>
              If nothing shows up in your wallet,{" "}
              <button onClick={reset}>click here to reset</button> and try
              connecting again. Refresh the page if the problem persists.
            </p>
          )}
        </>
      )}

      {renderLoader && <div className="mt-4">{renderLoader()}</div>}
    </BaseModal>
  )
}
