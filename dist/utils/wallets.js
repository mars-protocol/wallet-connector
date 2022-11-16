"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallets = exports.WalletConnectKeplrWallet = exports.KeplrWallet = exports.LeapWallet = void 0;
const tslib_1 = require("tslib");
const types_1 = require("../types");
exports.LeapWallet = {
    type: types_1.WalletType.Leap,
    name: "Leap Wallet",
    install: "Install Leap Wallet",
    installURL: "https://www.leapwallet.io/",
    description: "Leap Chrome Extension",
    imageUrl: "/leap-cosmos-logo.png",
    getClient: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return (0, exports.getLeapFromWindow)(); }),
    getOfflineSignerFunction: (client) => client.getOfflineSignerAuto.bind(client), // // This function expects to be bound to the `client` instance.
};
exports.KeplrWallet = {
    type: types_1.WalletType.Keplr,
    name: "Keplr Wallet",
    install: "Install Keplr Wallet",
    installURL: "https://keplr.app",
    description: "Keplr Chrome Extension",
    imageUrl: "/keplr-wallet-extension.png",
    getClient: () => tslib_1.__awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => tslib_1.__importStar(require("@keplr-wallet/stores")))).getKeplrFromWindow(); }),
    getOfflineSignerFunction: (client) => 
    // This function expects to be bound to the `client` instance.
    client.getOfflineSignerAuto.bind(client),
};
exports.WalletConnectKeplrWallet = {
    type: types_1.WalletType.WalletConnectKeplr,
    name: "WalletConnect",
    description: "Keplr Mobile",
    imageUrl: "/walletconnect-keplr.png",
    getClient: (chainInfo, walletConnect) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (walletConnect === null || walletConnect === void 0 ? void 0 : walletConnect.connected) {
            return new (yield Promise.resolve().then(() => tslib_1.__importStar(require("../connectors")))).KeplrWalletConnectV1(walletConnect, [chainInfo]);
        }
        throw new Error("Mobile wallet not connected.");
    }),
    // WalletConnect only supports Amino signing.
    getOfflineSignerFunction: (client) => 
    // This function expects to be bound to the `client` instance.
    client.getOfflineSignerOnlyAmino.bind(client),
};
exports.Wallets = [
    exports.KeplrWallet,
    exports.LeapWallet,
    exports.WalletConnectKeplrWallet,
];
//# sourceMappingURL=wallets.js.map