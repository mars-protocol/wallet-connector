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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletManagerProvider = void 0;
const shuttle_1 = require("@delphi-labs/shuttle");
const react_1 = __importStar(require("react"));
const utils_1 = require("../utils");
const ui_1 = require("./ui");
const WalletManagerContext_1 = require("./WalletManagerContext");
const WalletManagerProvider = ({ children, chainInfoOverrides, classNames, closeIcon, defaultChainId, enabledWallets, persistent = false, selectWalletOverride, walletMetaOverride, }) => {
    //! STATE
    const { connect, disconnect, recentWallet } = (0, shuttle_1.useShuttle)();
    const enabledWalletsFiltered = (0, react_1.useMemo)(() => utils_1.Wallets.filter(({ id }) => enabledWallets.includes(id)), [enabledWallets]);
    if (walletMetaOverride) {
        Object.entries(walletMetaOverride).forEach(([id, override]) => {
            Object.entries(override).forEach(([key, value]) => {
                enabledWallets.forEach((walletID, index) => {
                    if (walletID === id) {
                        enabledWallets[index][key] = value;
                    }
                });
            });
        });
    }
    const selectWallet = (wallet) => {
        connect(wallet, defaultChainId);
        setPickerModalOpen(false);
    };
    const _closePickerModal = () => {
        setPickerModalOpen(false);
    };
    const [pickerModalOpen, setPickerModalOpen] = (0, react_1.useState)(false);
    const value = (0, react_1.useMemo)(() => ({
        connect: connect,
        disconnect,
        recentWallet,
        connected: !!recentWallet,
        chainInfoOverrides,
    }), [connect, disconnect, recentWallet, chainInfoOverrides]);
    return (react_1.default.createElement(shuttle_1.ShuttleProvider, { persistent: persistent, providers: [
        // ...
        ] },
        react_1.default.createElement(WalletManagerContext_1.WalletManagerContext.Provider, { value: value },
            children,
            react_1.default.createElement(ui_1.SelectWalletModal, { classNames: classNames, closeIcon: closeIcon, closeModal: _closePickerModal, isOpen: pickerModalOpen, onClose: () => setPickerModalOpen(false), selectWallet: selectWallet, selectWalletOverride: selectWalletOverride, wallets: enabledWalletsFiltered }))));
};
exports.WalletManagerProvider = WalletManagerProvider;
