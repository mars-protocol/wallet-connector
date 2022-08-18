import { __awaiter } from "tslib";
import { WalletType } from "../types";
// TODO: Move imageUrl, and maybe name/description, to user configuration somehow, or incorporate in planned configurable UI overhaul.
export const KeplrWallet = {
    type: WalletType.Keplr,
    name: "Keplr Wallet",
    install: "Install Keplr Wallet",
    installURL: "https://keplr.app",
    description: "Keplr Chrome Extension",
    imageUrl: "/keplr-wallet-extension.png",
    getClient: () => __awaiter(void 0, void 0, void 0, function* () { return (yield import("@keplr-wallet/stores")).getKeplrFromWindow(); }),
    getOfflineSignerFunction: (client) => 
    // This function expects to be bound to the `client` instance.
    client.getOfflineSignerAuto.bind(client),
};
export const WalletConnectKeplrWallet = {
    type: WalletType.WalletConnectKeplr,
    name: "WalletConnect",
    description: "Keplr Mobile",
    imageUrl: "/walletconnect-keplr.png",
    getClient: (chainInfo, walletConnect) => __awaiter(void 0, void 0, void 0, function* () {
        if (walletConnect === null || walletConnect === void 0 ? void 0 : walletConnect.connected) {
            return new (yield import("../connectors")).KeplrWalletConnectV1(walletConnect, [chainInfo]);
        }
        throw new Error("Mobile wallet not connected.");
    }),
    // WalletConnect only supports Amino signing.
    getOfflineSignerFunction: (client) => 
    // This function expects to be bound to the `client` instance.
    client.getOfflineSignerOnlyAmino.bind(client),
};
export const Wallets = [KeplrWallet, WalletConnectKeplrWallet];
//# sourceMappingURL=wallets.js.map