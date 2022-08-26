import React, {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
} from "react"
import ReactModal from "react-modal"

import { ModalClassNames } from "../../types"
import { CloseIcon as DefaultCloseIcon } from "./CloseIcon"
import { baseModalStyles } from "./Styles"

export type BaseModalProps = PropsWithChildren<{
  isOpen: boolean
  onClose?: () => void

  title?: ReactElement | string
  maxWidth?: string

  classNames?: ModalClassNames
  closeIcon?: ReactNode
}>

export const BaseModal: FunctionComponent<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  maxWidth = "36rem",
  classNames,
  closeIcon,
  children,
}) => {
  // ReactModal accessibility.
  useEffect(() => {
    ReactModal.setAppElement("body")
  }, [])

  const modalContentStyles: React.CSSProperties = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "1.25rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    background: "white",
    width: `${maxWidth}px`,
    outline: "none",
    cursor: "auto",
    maxWidth: "calc(100% - 40px)",
  }

  return (
    <ReactModal
      ariaHideApp={false}
      className={classNames?.modalContent ?? "_"}
      contentElement={(props, children) => (
        <div style={modalContentStyles} {...props}>
          {children}
        </div>
      )}
      isOpen={isOpen}
      onRequestClose={(e) => {
        e.preventDefault()
        onClose?.()
      }}
      overlayClassName={classNames?.modalOverlay ?? "_"}
      overlayElement={(props, children) => (
        <div style={baseModalStyles.modalOverlay} {...props}>
          {children}
        </div>
      )}
      style={{
        overlay: classNames?.modalOverlay
          ? undefined
          : baseModalStyles.modalOverlay,
        content: classNames?.modalContent ? undefined : modalContentStyles,
      }}
    >
      <>
        <div
          className={classNames?.modalHeader}
          style={
            classNames?.modalHeader ? undefined : baseModalStyles.modalHeader
          }
        >
          {title}
        </div>

        {onClose && (
          <div
            className={classNames?.modalCloseButton}
            onClick={onClose}
            style={
              classNames?.modalCloseButton
                ? undefined
                : baseModalStyles.modalCloseButton
            }
          >
            {closeIcon ?? <DefaultCloseIcon height={26} width={26} />}
          </div>
        )}
        {children}
      </>
    </ReactModal>
  )
}
