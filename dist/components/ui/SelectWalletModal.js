"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectWalletModal = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const types_1 = require("../../types");
const BaseModal_1 = require("./BaseModal");
const Styles_1 = require("./Styles");
const SelectWalletModal = (_a) => {
    var { wallets, selectWallet, closeModal, classNames, isKeplrExtentionNotInstalled } = _a, props = tslib_1.__rest(_a, ["wallets", "selectWallet", "closeModal", "classNames", "isKeplrExtentionNotInstalled"]);
    return (react_1.default.createElement(BaseModal_1.BaseModal, Object.assign({ classNames: classNames, title: "Select a wallet" }, props),
        react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletList, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletList) ? undefined : Styles_1.selectWalletStyles.walletList }, wallets.map((wallet, index) => {
            const isKeplrInstall = wallet.type === types_1.WalletType.Keplr &&
                isKeplrExtentionNotInstalled &&
                wallet.install &&
                wallet.installURL;
            return (react_1.default.createElement("div", { key: index },
                react_1.default.createElement("div", { key: wallet.type, className: classNames === null || classNames === void 0 ? void 0 : classNames.wallet, onClick: (e) => {
                        e.preventDefault();
                        if (isKeplrInstall) {
                            window.open(wallet.installURL, "_blank");
                            closeModal();
                        }
                        else {
                            selectWallet(wallet);
                        }
                    }, style: (classNames === null || classNames === void 0 ? void 0 : classNames.wallet) ? undefined : Styles_1.selectWalletStyles.walletRow },
                    react_1.default.createElement("img", { alt: `${wallet.name} logo`, className: classNames === null || classNames === void 0 ? void 0 : classNames.walletImage, src: wallet.imageUrl, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletImage)
                            ? undefined
                            : Styles_1.selectWalletStyles.walletIconImg }),
                    react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo)
                            ? undefined
                            : Styles_1.selectWalletStyles.walletInfo },
                        react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletName, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletName)
                                ? undefined
                                : Styles_1.selectWalletStyles.walletName }, isKeplrInstall ? wallet.install : wallet.name),
                        react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription)
                                ? undefined
                                : Styles_1.selectWalletStyles.walletDescription }, isKeplrInstall ? wallet.installURL : wallet.description)))));
        }))));
};
exports.SelectWalletModal = SelectWalletModal;
//# sourceMappingURL=SelectWalletModal.js.map