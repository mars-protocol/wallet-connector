"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const react_modal_1 = tslib_1.__importDefault(require("react-modal"));
const CloseIcon_1 = require("./CloseIcon");
const Styles_1 = require("./Styles");
const BaseModal = ({ isOpen, onClose, title, maxWidth = "36rem", classNames, closeIcon, children, }) => {
    var _a, _b;
    // ReactModal accessibility.
    (0, react_1.useEffect)(() => {
        react_modal_1.default.setAppElement("body");
    }, []);
    const modalContentStyles = {
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
    };
    return (react_1.default.createElement(react_modal_1.default, { ariaHideApp: false, className: (_a = classNames === null || classNames === void 0 ? void 0 : classNames.modalContent) !== null && _a !== void 0 ? _a : "_", contentElement: (props, children) => (react_1.default.createElement("div", Object.assign({ style: modalContentStyles }, props), children)), isOpen: isOpen, onRequestClose: (e) => {
            e.preventDefault();
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, overlayClassName: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay) !== null && _b !== void 0 ? _b : "_", overlayElement: (props, children) => (react_1.default.createElement("div", Object.assign({ style: Styles_1.baseModalStyles.modalOverlay }, props), children)), style: {
            overlay: (classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay)
                ? undefined
                : Styles_1.baseModalStyles.modalOverlay,
            content: (classNames === null || classNames === void 0 ? void 0 : classNames.modalContent) ? undefined : modalContentStyles,
        } },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalHeader, style: (classNames === null || classNames === void 0 ? void 0 : classNames.modalHeader) ? undefined : Styles_1.baseModalStyles.modalHeader }, title),
            onClose && (react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalCloseButton, onClick: onClose, style: (classNames === null || classNames === void 0 ? void 0 : classNames.modalCloseButton)
                    ? undefined
                    : Styles_1.baseModalStyles.modalCloseButton }, closeIcon !== null && closeIcon !== void 0 ? closeIcon : react_1.default.createElement(CloseIcon_1.CloseIcon, { height: 26, width: 26 }))),
            children)));
};
exports.BaseModal = BaseModal;
//# sourceMappingURL=BaseModal.js.map