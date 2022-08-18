import { __awaiter } from "tslib";
import { createContext, useContext, useEffect, useState } from "react";
import { WalletConnectionStatus, } from "../types";
import { getChainInfo, getConnectedWalletInfo, getWalletBalances, } from "../utils";
export const WalletManagerContext = createContext(null);
export const useWalletManager = () => {
    const context = useContext(WalletManagerContext);
    if (!context) {
        throw new Error("You forgot to use WalletManagerProvider.");
    }
    return context;
};
export const fetchBalances = (address, chainId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield getWalletBalances(address, chainId);
});
export const useWallet = (chainId) => {
    const { status: managerStatus, error: managerError, connectedWallet: managerConnectedWallet, chainInfoOverrides, getSigningCosmWasmClientOptions, getSigningStargateClientOptions, } = useWalletManager();
    const [chainIdStatus, setChainIdStatus] = useState(WalletConnectionStatus.Initializing);
    const [chainIdError, setChainIdError] = useState();
    const [chainIdConnectedWallet, setChainIdConnectedWallet] = useState();
    useEffect(() => {
        if (managerStatus !== WalletConnectionStatus.Connected ||
            !managerConnectedWallet ||
            !chainId) {
            // If the initial wallet client is not yet connected, this chainId
            // cannot be connected to yet and is thus still initializing.
            setChainIdStatus(WalletConnectionStatus.Initializing);
            setChainIdConnectedWallet(undefined);
            setChainIdError(undefined);
            return;
        }
        const connect = () => __awaiter(void 0, void 0, void 0, function* () {
            setChainIdStatus(WalletConnectionStatus.Connecting);
            setChainIdError(undefined);
            const chainInfo = yield getChainInfo(chainId, chainInfoOverrides);
            setChainIdConnectedWallet(
            // TODO: Cache
            yield getConnectedWalletInfo(managerConnectedWallet.wallet, managerConnectedWallet.walletClient, chainInfo, yield (getSigningCosmWasmClientOptions === null || getSigningCosmWasmClientOptions === void 0 ? void 0 : getSigningCosmWasmClientOptions(chainInfo)), yield (getSigningStargateClientOptions === null || getSigningStargateClientOptions === void 0 ? void 0 : getSigningStargateClientOptions(chainInfo))));
            setChainIdStatus(WalletConnectionStatus.Connected);
        });
        connect().catch((error) => {
            console.error(error);
            setChainIdError(error);
            setChainIdStatus(WalletConnectionStatus.Errored);
        });
    }, [
        managerStatus,
        managerConnectedWallet,
        chainId,
        getSigningCosmWasmClientOptions,
        getSigningStargateClientOptions,
        chainInfoOverrides,
    ]);
    const status = chainId ? chainIdStatus : managerStatus;
    const connected = status === WalletConnectionStatus.Connected;
    const error = chainId ? chainIdError : managerError;
    const connectedWallet = chainId
        ? chainIdConnectedWallet
        : managerConnectedWallet;
    return Object.assign({ status, connected, error }, connectedWallet);
};
//# sourceMappingURL=WalletManagerContext.js.map