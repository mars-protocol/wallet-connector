"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModal = void 0;
const react_1 = __importStar(require("react"));
const react_modal_1 = __importDefault(require("react-modal"));
const CloseIcon_1 = require("./CloseIcon");
const Styles_1 = require("./Styles");
const BaseModal = ({ isOpen, onClose, title, classNames, closeIcon, children, }) => {
    var _a, _b;
    (0, react_1.useEffect)(() => {
        react_modal_1.default.setAppElement("body");
    }, []);
    return (react_1.default.createElement(react_modal_1.default, { ariaHideApp: false, className: (_a = classNames === null || classNames === void 0 ? void 0 : classNames.modalContent) !== null && _a !== void 0 ? _a : "_", contentElement: (props, children) => (react_1.default.createElement("div", Object.assign({ style: Styles_1.baseModalStyles.modalContent }, props), children)), isOpen: isOpen, onRequestClose: (e) => {
            e.preventDefault();
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, overlayClassName: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay) !== null && _b !== void 0 ? _b : "_", overlayElement: (props, children) => (react_1.default.createElement("div", Object.assign({ style: Styles_1.baseModalStyles.modalOverlay }, props), children)), style: {
            overlay: (classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay)
                ? undefined
                : Styles_1.baseModalStyles.modalOverlay,
            content: (classNames === null || classNames === void 0 ? void 0 : classNames.modalContent)
                ? undefined
                : Styles_1.baseModalStyles.modalContent,
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