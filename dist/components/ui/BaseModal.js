import React, { useEffect, } from "react";
import ReactModal from "react-modal";
import { CloseIcon as DefaultCloseIcon } from "./CloseIcon";
import { baseModalStyles } from "./Styles";
export const BaseModal = ({ isOpen, onClose, title, maxWidth = "36rem", classNames, closeIcon, children, }) => {
    var _a, _b;
    // ReactModal accessibility.
    useEffect(() => {
        ReactModal.setAppElement("body");
    }, []);
    return (React.createElement(ReactModal, { ariaHideApp: false, className: (_a = classNames === null || classNames === void 0 ? void 0 : classNames.modalContent) !== null && _a !== void 0 ? _a : "_", contentElement: (props, children) => (React.createElement("div", Object.assign({ style: {
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
            } }, props), children)), isOpen: isOpen, onRequestClose: (e) => {
            e.preventDefault();
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, overlayClassName: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay) !== null && _b !== void 0 ? _b : "_", overlayElement: (props, children) => (React.createElement("div", Object.assign({ style: baseModalStyles.modalOverlay }, props), children)) },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalHeader, style: (classNames === null || classNames === void 0 ? void 0 : classNames.modalHeader) ? {} : baseModalStyles.modalHeader }, title),
            onClose && (React.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalCloseButton, onClick: onClose, style: (classNames === null || classNames === void 0 ? void 0 : classNames.modalCloseButton)
                    ? {}
                    : baseModalStyles.modalCloseButton }, closeIcon !== null && closeIcon !== void 0 ? closeIcon : React.createElement(DefaultCloseIcon, { height: 26, width: 26 }))),
            children)));
};
//# sourceMappingURL=BaseModal.js.map