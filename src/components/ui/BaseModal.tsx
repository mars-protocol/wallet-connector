import {
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
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
  noModal?: boolean
}>

export const BaseModal: FunctionComponent<BaseModalProps> = ({
  isOpen,
  onClose,
  title,
  classNames,
  closeIcon,
  children,
  noModal,
}) => {
  useEffect(() => {
    ReactModal.setAppElement("body")
  }, [])

  const modalContent = useMemo(
    () => (
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
            {closeIcon ? (
              closeIcon
            ) : (
              <DefaultCloseIcon height={26} width={26} />
            )}
          </div>
        )}
        {children}
      </>
    ),
    [
      children,
      classNames?.modalCloseButton,
      classNames?.modalHeader,
      closeIcon,
      onClose,
      title,
    ],
  )

  if (noModal)
    return (
      <div
        className={classNames?.modalContent ?? "_"}
        style={
          classNames?.modalContent ? undefined : baseModalStyles.modalContent
        }
      >
        {modalContent}
      </div>
    )

  return (
    <ReactModal
      ariaHideApp={false}
      className={classNames?.modalContent ?? "_"}
      contentElement={(props, children) => (
        <div style={baseModalStyles.modalContent} {...props}>
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
        content: classNames?.modalContent
          ? undefined
          : baseModalStyles.modalContent,
      }}
    >
      {modalContent}
    </ReactModal>
  )
}
