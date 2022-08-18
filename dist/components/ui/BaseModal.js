import React, { useEffect, } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";
import { CloseIcon as DefaultCloseIcon } from "./CloseIcon";
export const BaseModal = ({ isOpen, onClose, title, maxWidth = "36rem", classNames, closeIcon, children, }) => {
    var _a, _b;
    // ReactModal accessibility.
    useEffect(() => {
        ReactModal.setAppElement("body");
    }, []);
    return (React.createElement(ReactModal, { ariaHideApp: false, className: (_a = classNames === null || classNames === void 0 ? void 0 : classNames.modalContent) !== null && _a !== void 0 ? _a : "_", contentElement: (props, children) => (React.createElement(ModalContent, Object.assign({ maxWidth: maxWidth }, props), children)), isOpen: isOpen, onRequestClose: (e) => {
            e.preventDefault();
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, overlayClassName: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay) !== null && _b !== void 0 ? _b : "_", overlayElement: (props, children) => (React.createElement(ModalOverlay, Object.assign({}, props), children)) },
        React.createElement(React.Fragment, null,
            React.createElement(ModalHeader, { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalHeader }, title),
            onClose && (React.createElement(ModalCloseButton, { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalCloseButton, onClick: onClose }, closeIcon !== null && closeIcon !== void 0 ? closeIcon : React.createElement(DefaultCloseIcon, { height: 26, width: 26 }))),
            children)));
};
const ModalContent = styled.div `
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  outline: none;
  cursor: auto;

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;
const ModalOverlay = styled.div `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: cetner;
  cursor: pointer;
`;
const ModalHeader = styled.div `
  color: rgb(31, 41, 55);
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.75rem;
  margin-bottom: 1rem;
`;
export const ModalSubheader = styled.div `
  color: rgb(31, 41, 55);
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.25rem;
`;
const ModalCloseButton = styled.div `
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  cursor: pointer;
`;
//# sourceMappingURL=BaseModal.js.map