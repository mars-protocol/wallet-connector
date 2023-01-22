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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectWalletModal = void 0;
const shuttle_1 = require("@delphi-labs/shuttle");
const react_1 = __importStar(require("react"));
const enums_1 = require("../../enums");
const BaseModal_1 = require("./BaseModal");
const Styles_1 = require("./Styles");
const SelectWalletModal = (_a) => {
    var { wallets, chainId, closeModal, classNames, selectWalletOverride } = _a, props = __rest(_a, ["wallets", "chainId", "closeModal", "classNames", "selectWalletOverride"]);
    const { connect } = (0, shuttle_1.useShuttle)();
    const [isHover, setIsHover] = (0, react_1.useState)("");
    const handleMouseEnter = (walletID) => {
        setIsHover(walletID);
    };
    const handleMouseLeave = () => {
        setIsHover("");
    };
    return (react_1.default.createElement(BaseModal_1.BaseModal, Object.assign({ classNames: classNames, title: selectWalletOverride ? selectWalletOverride : "Select a wallet" }, props),
        react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletList, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletList) ? undefined : Styles_1.selectWalletStyles.walletList }, wallets.map((wallet, index) => {
            const isKeplrInstall = wallet.id === enums_1.WalletID.Keplr && wallet.install && wallet.installURL;
            return (react_1.default.createElement("div", { key: index },
                react_1.default.createElement("div", { key: wallet.id, className: classNames === null || classNames === void 0 ? void 0 : classNames.wallet, onClick: (e) => {
                        e.preventDefault();
                        if (isKeplrInstall) {
                            window.open(wallet.installURL, "_blank");
                            closeModal();
                        }
                        else {
                            connect(wallet.id, chainId);
                            closeModal();
                        }
                    }, onMouseEnter: () => {
                        handleMouseEnter(wallet.id);
                    }, onMouseLeave: handleMouseLeave, style: (classNames === null || classNames === void 0 ? void 0 : classNames.wallet)
                        ? undefined
                        : isHover === wallet.id
                            ? Object.assign(Object.assign({}, Styles_1.selectWalletStyles.wallet), Styles_1.selectWalletStyles.walletHover) : Styles_1.selectWalletStyles.wallet },
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