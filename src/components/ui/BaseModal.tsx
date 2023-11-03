import {
  ComponentType,
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
  classNames,
  closeIcon,
  children,
}) => {
  useEffect(() => {
    ReactModal.setAppElement("body")
  }, [])

  const ModalSafeForReact18 = ReactModal as ComponentType<ReactModal["props"]>

  return (
    <ModalSafeForReact18
      ariaHideApp={false}
      className={classNames?.modalContent ?? "_"}
      contentElement={(props) => (
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
      overlayElement={(props) => (
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
    </ModalSafeForReact18>
  )
}
