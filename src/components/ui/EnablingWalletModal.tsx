import React, { FunctionComponent, ReactElement, ReactNode } from "react"

import { BaseModal, BaseModalProps } from "./BaseModal"

export interface EnablingWalletModalProps extends BaseModalProps {
  enablingStringOverride?: string | ReactElement
  renderLoader?: () => ReactNode
}

export const EnablingWalletModal: FunctionComponent<
  EnablingWalletModalProps
> = ({
  isOpen,
  classNames,
  renderLoader,
  enablingStringOverride,
  ...props
}) => {
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
      {renderLoader && <div className="mt-4">{renderLoader()}</div>}
    </BaseModal>
  )
}
