import { __rest } from "tslib";
import React from "react";
import { WalletType } from "../../types";
import { BaseModal } from "./BaseModal";
import { selectWalletStyles } from "./Styles";
export const SelectWalletModal = (_a) => {
    var { wallets, selectWallet, closeModal, classNames, isKeplrExtentionNotInstalled } = _a, props = __rest(_a, ["wallets", "selectWallet", "closeModal", "classNames", "isKeplrExtentionNotInstalled"]);
    return (React.createElement(BaseModal, Object.assign({ classNames: classNames, title: "Select a wallet" }, props),
        React.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletList, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletList) ? {} : selectWalletStyles.walletList }, wallets.map((wallet, index) => {
            const isKeplrInstall = wallet.type === WalletType.Keplr &&
                isKeplrExtentionNotInstalled &&
                wallet.install &&
                wallet.installURL;
            return (React.createElement("div", { key: index },
                React.createElement("div", { key: wallet.type, className: classNames === null || classNames === void 0 ? void 0 : classNames.wallet, onClick: (e) => {
                        e.preventDefault();
                        if (isKeplrInstall) {
                            window.open(wallet.installURL, "_blank");
                            closeModal();
                        }
                        else {
                            selectWallet(wallet);
                        }
                    }, style: (classNames === null || classNames === void 0 ? void 0 : classNames.wallet) ? {} : selectWalletStyles.walletRow },
                    React.createElement("img", { alt: `${wallet.name} logo`, className: classNames === null || classNames === void 0 ? void 0 : classNames.walletImage, src: wallet.imageUrl, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletImage)
                            ? {}
                            : selectWalletStyles.walletIconImg }),
                    React.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo) ? {} : selectWalletStyles.walletInfo },
                        React.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletName, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletName) ? {} : selectWalletStyles.walletName }, isKeplrInstall ? wallet.install : wallet.name),
                        React.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription)
                                ? {}
                                : selectWalletStyles.walletDescription }, isKeplrInstall ? wallet.installURL : wallet.description)))));
        }))));
};
//# sourceMappingURL=SelectWalletModal.js.map