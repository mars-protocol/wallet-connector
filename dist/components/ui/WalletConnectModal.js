import { __rest } from "tslib";
import { isAndroid as checkIsAndroid, isMobile as checkIsMobile, } from "@walletconnect/browser-utils";
import QRCode from "qrcode.react";
import React, { useEffect, useMemo, useState } from "react";
import { BaseModal } from "./BaseModal";
const IOS_KEPLR_MOBILE_URL = "itms-apps://itunes.apple.com/app/1567851089";
export const WalletConnectModal = (_a) => {
    var { isOpen, uri, classNames, reset } = _a, props = __rest(_a, ["isOpen", "uri", "classNames", "reset"]);
    const isMobile = useMemo(() => checkIsMobile(), []);
    const isAndroid = useMemo(() => checkIsAndroid(), []);
    // Defined if isMobile is true.
    const navigateToAppURL = useMemo(() => isMobile
        ? isAndroid
            ? `intent://wcV1?${uri}#Intent;package=com.chainapsis.keplr;scheme=keplrwallet;end;`
            : `keplrwallet://wcV1?${uri}`
        : undefined, [isMobile, isAndroid, uri]);
    // Open app if mobile URL is available.
    useEffect(() => {
        if (!isOpen || !navigateToAppURL)
            return;
        // Slight delay so they can read the modal.
        const timeout = setTimeout(() => {
            window.location.href = navigateToAppURL;
        }, 2000);
        return () => clearTimeout(timeout);
    }, [navigateToAppURL, isOpen]);
    const [qrShowing, setQrShowing] = useState(!isMobile);
    // Show mobile help if timeout is reached.
    const [showMobileHelp, setShowMobileHelp] = useState(false);
    useEffect(() => {
        if (!isMobile || !isOpen) {
            setShowMobileHelp(false);
            return;
        }
        const timeout = setTimeout(() => setShowMobileHelp(true), 5000);
        return () => clearTimeout(timeout);
    }, [isOpen, isMobile, setShowMobileHelp]);
    return (React.createElement(BaseModal, Object.assign({ classNames: classNames, isOpen: isOpen, maxWidth: "24rem", title: isMobile ? "Connect to Mobile Wallet" : "Scan QR Code" }, props),
        !!navigateToAppURL && (React.createElement(React.Fragment, null,
            React.createElement("p", { className: classNames === null || classNames === void 0 ? void 0 : classNames.textContent, style: { marginBottom: "1rem" } },
                React.createElement("a", { href: navigateToAppURL, style: { textDecoration: "underline" } }, "Open your mobile wallet"),
                " ",
                "and accept the connection request."),
            React.createElement("p", { className: classNames === null || classNames === void 0 ? void 0 : classNames.textContent, style: { marginBottom: showMobileHelp ? "1rem" : "1.5rem" } },
                "If you don't have Keplr Mobile installed,",
                " ",
                React.createElement("a", { href: isAndroid ? navigateToAppURL : IOS_KEPLR_MOBILE_URL, style: { textDecoration: "underline" } }, "click here to install it"),
                ". You can also scan the QR code at the bottom from another device with Keplr Mobile installed."),
            showMobileHelp && (React.createElement("p", { className: classNames === null || classNames === void 0 ? void 0 : classNames.textContent, style: { marginBottom: "1.5rem" } },
                "If nothing shows up in your mobile wallet, or nothing happened once you accepted,",
                " ",
                React.createElement("button", { onClick: reset, style: { textDecoration: "underline", display: "inline" } }, "click here to reset"),
                " ",
                "and try connecting again. Refresh the page if the problem persists.")),
            React.createElement("button", { onClick: () => setQrShowing((s) => !s), style: { textAlign: "left" } },
                React.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalSubheader, style: (classNames === null || classNames === void 0 ? void 0 : classNames.modalSubheader)
                        ? {}
                        : {
                            marginBottom: qrShowing ? "1rem" : 0,
                            textDecoration: "underline",
                            color: "rgb(31, 41, 55)",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            lineHeight: "1.25rem",
                        } },
                    qrShowing ? "Hide" : "Show",
                    " QR Code")))),
        !!uri && qrShowing && (React.createElement(QRCode, { size: 500, style: { width: "100%", height: "100%" }, value: uri }))));
};
//# sourceMappingURL=WalletConnectModal.js.map