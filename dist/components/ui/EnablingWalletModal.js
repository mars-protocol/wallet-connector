import { __rest } from "tslib";
import React, { useEffect, useState, } from "react";
import { BaseModal } from "./BaseModal";
export const EnablingWalletModal = (_a) => {
    var { isOpen, classNames, renderLoader, enablingStringOverride, enablingMeta, reset } = _a, props = __rest(_a, ["isOpen", "classNames", "renderLoader", "enablingStringOverride", "enablingMeta", "reset"]);
    const [showHelp, setShowHelp] = useState(false);
    // Show help if timeout is reached.
    useEffect(() => {
        if (!isOpen) {
            setShowHelp(false);
            return;
        }
        const timeout = setTimeout(() => setShowHelp(true), 8000);
        return () => clearTimeout(timeout);
    }, [isOpen, setShowHelp]);
    return (React.createElement(BaseModal, Object.assign({ classNames: classNames, isOpen: isOpen, maxWidth: "24rem", title: enablingStringOverride ? enablingStringOverride : "Enabling Wallet..." }, props),
        renderLoader && React.createElement("div", { className: "mt-4" }, renderLoader()),
        showHelp && (React.createElement(React.Fragment, null, enablingMeta ? (React.createElement("div", { className: enablingMeta.contentClassName },
            React.createElement("p", { className: enablingMeta.textClassName }, enablingMeta.text),
            React.createElement("button", { className: enablingMeta.buttonClassName, onClick: reset }, enablingMeta.buttonText))) : (React.createElement("p", { className: classNames === null || classNames === void 0 ? void 0 : classNames.textContent },
            "If nothing shows up in your wallet,",
            " ",
            React.createElement("button", { onClick: reset }, "click here to reset"),
            " and try connecting again. Refresh the page if the problem persists."))))));
};
//# sourceMappingURL=EnablingWalletModal.js.map