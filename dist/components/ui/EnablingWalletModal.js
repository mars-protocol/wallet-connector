"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnablingWalletModal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const BaseModal_1 = require("./BaseModal");
const EnablingWalletModal = (_a) => {
    var { isOpen, classNames, renderLoader, enablingStringOverride, enablingMeta, reset } = _a, props = tslib_1.__rest(_a, ["isOpen", "classNames", "renderLoader", "enablingStringOverride", "enablingMeta", "reset"]);
    const [showHelp, setShowHelp] = (0, react_1.useState)(false);
    // Show help if timeout is reached.
    (0, react_1.useEffect)(() => {
        if (!isOpen) {
            setShowHelp(false);
            return;
        }
        const timeout = setTimeout(() => setShowHelp(true), 8000);
        return () => clearTimeout(timeout);
    }, [isOpen, setShowHelp]);
    return (react_1.default.createElement(BaseModal_1.BaseModal, Object.assign({ classNames: classNames, isOpen: isOpen, maxWidth: "24rem", title: enablingStringOverride ? enablingStringOverride : "Enabling Wallet..." }, props),
        renderLoader && react_1.default.createElement("div", { className: "mt-4" }, renderLoader()),
        showHelp && (react_1.default.createElement(react_1.default.Fragment, null, enablingMeta ? (react_1.default.createElement("div", { className: enablingMeta.contentClassName },
            react_1.default.createElement("p", { className: enablingMeta.textClassName }, enablingMeta.text),
            react_1.default.createElement("button", { className: enablingMeta.buttonClassName, onClick: reset }, enablingMeta.buttonText))) : (react_1.default.createElement("p", { className: classNames === null || classNames === void 0 ? void 0 : classNames.textContent },
            "If nothing shows up in your wallet,",
            " ",
            react_1.default.createElement("button", { onClick: reset }, "click here to reset"),
            " and try connecting again. Refresh the page if the problem persists."))))));
};
exports.EnablingWalletModal = EnablingWalletModal;
//# sourceMappingURL=EnablingWalletModal.js.map