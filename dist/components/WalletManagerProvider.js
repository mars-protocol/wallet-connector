import { __awaiter } from "tslib";
import React, { useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { KeplrWalletConnectV1 } from "../connectors";
import { WalletConnectionStatus, WalletType, } from "../types";
import { getChainInfo, getConnectedWalletInfo, KeplrWallet, Wallets, } from "../utils";
import { BaseModal, EnablingWalletModal, SelectWalletModal, WalletConnectModal, } from "./ui";
import { WalletManagerContext } from "./WalletManagerContext";
export const WalletManagerProvider = ({ children, enabledWalletTypes, defaultChainId, chainInfoOverrides, classNames, closeIcon, enablingStringOverride, enablingMeta, renderLoader, walletConnectClientMeta, walletMetaOverride, preselectedWalletType, localStorageKey, onKeplrKeystoreChangeEvent, getSigningCosmWasmClientOptions, getSigningStargateClientOptions, }) => {
    //! STATE
    const enabledWallets = useMemo(() => Wallets.filter(({ type }) => enabledWalletTypes.includes(type)), [enabledWalletTypes]);
    if (walletMetaOverride) {
        Object.entries(walletMetaOverride).forEach(([type, override]) => {
            Object.entries(override).forEach(([key, value]) => {
                enabledWallets.forEach((wallet, index) => {
                    if (wallet.type === type) {
                        enabledWallets[index][key] = value;
                    }
                });
            });
        });
    }
    const [isEmbeddedKeplrMobileWeb, setIsEmbeddedKeplrMobileWeb] = useState(false);
    const [isKeplrExtentionNotInstalled, setIsKeplrExtensionNotInstalled] = useState(false);
    // Modal State
    const [pickerModalOpen, setPickerModalOpen] = useState(false);
    const [walletEnableModalOpen, setWalletEnableModalOpen] = useState(false);
    // If set, opens QR code modal.
    const [walletConnectUri, setWalletConnectUri] = useState();
    // WalletConnect State
    const [walletConnect, setWalletConnect] = useState();
    // Call when closing QR code modal manually.
    const onQrCloseCallback = useRef();
    // Wallet connection State
    const [connectedWallet, setConnectedWallet] = useState();
    const [error, setError] = useState();
    // Once mobile web is checked, we are ready to auto-connect.
    const [status, setStatus] = useState(WalletConnectionStatus.Initializing);
    // In case WalletConnect fails to load, we need to be able to retry.
    // This is done through clicking reset on the WalletConnectModal.
    const [connectingWallet, setConnectingWallet] = useState();
    const connectionAttemptRef = useRef(0);
    // Reset connection when it gets stuck somewhere.
    const [connectToWalletUponReset, setConnectToWalletUponReset] = useState();
    //! CALLBACKS
    // Retrieve chain info for initial wallet connection, throwing error if
    // not found.
    const _getDefaultChainInfo = useCallback(() => __awaiter(void 0, void 0, void 0, function* () { return yield getChainInfo(defaultChainId, chainInfoOverrides); }), [defaultChainId, chainInfoOverrides]);
    // Closes modals and clears connection state.
    const _cleanupAfterConnection = useCallback((walletClient) => {
        // Close modals.
        setPickerModalOpen(false);
        setWalletConnectUri(undefined);
        setWalletEnableModalOpen(false);
        // Allow future enable requests to open the app.
        if (walletClient instanceof KeplrWalletConnectV1) {
            walletClient.dontOpenAppOnEnable = false;
        }
        // No longer connecting a wallet.
        setConnectingWallet(undefined);
    }, []);
    // Disconnect from connected wallet.
    const disconnect = useCallback((dontKillWalletConnect) => __awaiter(void 0, void 0, void 0, function* () {
        // Disconnect wallet.
        setConnectedWallet(undefined);
        setStatus(WalletConnectionStatus.ReadyForConnection);
        // Remove localStorage value.
        if (localStorageKey) {
            localStorage.removeItem(localStorageKey);
        }
        // Disconnect WalletConnect.
        setWalletConnect(undefined);
        if ((walletConnect === null || walletConnect === void 0 ? void 0 : walletConnect.connected) && !dontKillWalletConnect) {
            yield walletConnect.killSession();
        }
    }), [localStorageKey, walletConnect]);
    const _closePickerModal = () => {
        setPickerModalOpen(false);
    };
    // Obtain WalletConnect if necessary, and connect to the wallet.
    const _connectToWallet = useCallback((wallet) => __awaiter(void 0, void 0, void 0, function* () {
        setStatus(WalletConnectionStatus.Connecting);
        setError(undefined);
        setConnectingWallet(wallet);
        setPickerModalOpen(false);
        let walletClient;
        let _walletConnect = walletConnect;
        // The actual meat of enabling and getting the wallet clients.
        const finalizeWalletConnection = (newWcSession) => __awaiter(void 0, void 0, void 0, function* () {
            // Cleared in `cleanupAfterConnection`.
            setWalletEnableModalOpen(true);
            const chainInfo = yield _getDefaultChainInfo();
            walletClient = yield wallet.getClient(chainInfo, _walletConnect);
            if (!walletClient) {
                throw new Error("Failed to retrieve wallet client.");
            }
            // Prevent double app open request.
            if (walletClient instanceof KeplrWalletConnectV1) {
                walletClient.dontOpenAppOnEnable = !!newWcSession;
            }
            // Save connected wallet data.
            setConnectedWallet(yield getConnectedWalletInfo(wallet, walletClient, chainInfo, yield (getSigningCosmWasmClientOptions === null || getSigningCosmWasmClientOptions === void 0 ? void 0 : getSigningCosmWasmClientOptions(chainInfo)), yield (getSigningStargateClientOptions === null || getSigningStargateClientOptions === void 0 ? void 0 : getSigningStargateClientOptions(chainInfo))));
            // Save localStorage value.
            if (localStorageKey) {
                localStorage.setItem(localStorageKey, wallet.type);
            }
            setStatus(WalletConnectionStatus.Connected);
        });
        try {
            // Connect to WalletConnect if necessary.
            if (wallet.type === WalletType.WalletConnectKeplr) {
                // Instantiate new WalletConnect instance if necessary.
                if (!_walletConnect) {
                    _walletConnect = new (yield import("@walletconnect/client")).default({
                        bridge: "https://bridge.walletconnect.org",
                        signingMethods: [
                            "keplr_enable_wallet_connect_v1",
                            "keplr_sign_amino_wallet_connect_v1",
                        ],
                        qrcodeModal: {
                            open: (uri, cb) => {
                                // Open QR modal by setting URI.
                                setWalletConnectUri(uri);
                                onQrCloseCallback.current = cb;
                            },
                            // Occurs on disconnect, which is handled elsewhere.
                            close: () => console.log("qrcodeModal.close"),
                        },
                        // clientMeta,
                    });
                    // clientMeta in constructor is ignored for some reason, so
                    // let's set it directly :)))))))))))))
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    _walletConnect._clientMeta = walletConnectClientMeta;
                    setWalletConnect(_walletConnect);
                }
                if (_walletConnect.connected) {
                    // WalletConnect already connected, nothing to do.
                    yield finalizeWalletConnection();
                }
                else {
                    // Prevent double requests by checking which connection attempt
                    // we're on before and after starting the connection attempt.
                    const currConnectionAttempt = ++connectionAttemptRef.current;
                    // Executes walletConnect's qrcodeModal.open.
                    yield _walletConnect.connect();
                    // If another connection attempt is being made, don't try to
                    // enable if connect finishes. This prevents double requests.
                    if (connectionAttemptRef.current !== currConnectionAttempt) {
                        return;
                    }
                    // Connect with new WalletConnect session.
                    yield finalizeWalletConnection(true);
                }
            }
            else {
                // No WalletConnect needed.
                yield finalizeWalletConnection();
            }
        }
        catch (err) {
            console.error(err);
            setError(err);
            setStatus(WalletConnectionStatus.Errored);
        }
        finally {
            _cleanupAfterConnection(walletClient);
        }
    }), [
        walletConnect,
        _getDefaultChainInfo,
        getSigningCosmWasmClientOptions,
        getSigningStargateClientOptions,
        localStorageKey,
        walletConnectClientMeta,
        _cleanupAfterConnection,
    ]);
    // Begin connection process, either auto-selecting a wallet or opening
    // the selection modal.
    const beginConnection = useCallback(() => {
        if (status === WalletConnectionStatus.Initializing) {
            throw new Error("Cannot connect while initializing.");
        }
        setStatus(WalletConnectionStatus.Connecting);
        setError(undefined);
        const automaticWalletType = preselectedWalletType ||
            // Try to fetch value from localStorage.
            (localStorageKey && localStorage.getItem(localStorageKey)) ||
            undefined;
        const skipModalWallet = 
        // Mobile web mode takes precedence over automatic wallet.
        isEmbeddedKeplrMobileWeb
            ? KeplrWallet
            : // If only one wallet is available, skip the modal and use it.
                enabledWallets.length === 1
                    ? enabledWallets[0]
                    : // Try to find the wallet to automatically connect to if present.
                        automaticWalletType
                            ? enabledWallets.find(({ type }) => type === automaticWalletType)
                            : undefined;
        if (skipModalWallet) {
            _connectToWallet(skipModalWallet);
            return;
        }
        // If no default wallet, open modal to choose one.
        setPickerModalOpen(true);
    }, [
        status,
        preselectedWalletType,
        localStorageKey,
        isEmbeddedKeplrMobileWeb,
        enabledWallets,
        _connectToWallet,
    ]);
    // Initiate reset.
    const _reset = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        yield disconnect().catch(console.error);
        // Set after disconnect, since disconnect sets state to
        // ReadyForConnection.
        setStatus(WalletConnectionStatus.Resetting);
        // Try resetting all wallet state and reconnecting.
        if (connectingWallet) {
            setConnectToWalletUponReset(connectingWallet);
            _cleanupAfterConnection();
        }
        else {
            // If no wallet to reconnect to, just reload.
            window.location.reload();
        }
    }), [_cleanupAfterConnection, connectingWallet, disconnect]);
    //! EFFECTS
    // Detect if in embedded Keplr Mobile browser, and set ready after.
    useEffect(() => {
        if (status !== WalletConnectionStatus.Initializing ||
            // Only run this on a browser.
            typeof window === "undefined") {
            return;
        }
        import("@keplr-wallet/stores")
            .then(({ getKeplrFromWindow }) => getKeplrFromWindow())
            .then((keplr) => {
            if (!keplr) {
                setIsKeplrExtensionNotInstalled(true);
            }
            else {
                keplr &&
                    keplr.mode === "mobile-web" &&
                    setIsEmbeddedKeplrMobileWeb(true);
            }
        })
            .finally(() => setStatus(!isKeplrExtentionNotInstalled
            ? WalletConnectionStatus.AttemptingAutoConnection
            : WalletConnectionStatus.Errored));
    }, [status]);
    // Auto connect on mount handler, after the above mobile web check.
    useEffect(() => {
        if (status !== WalletConnectionStatus.AttemptingAutoConnection ||
            // Only run this on a browser.
            typeof localStorage === "undefined") {
            return;
        }
        setStatus(WalletConnectionStatus.ReadyForConnection);
        if (
        // If inside Keplr mobile web, auto connect.
        isEmbeddedKeplrMobileWeb ||
            // If localStorage value present, auto connect.
            (localStorageKey && !!localStorage.getItem(localStorageKey))) {
            beginConnection();
        }
    }, [status, beginConnection, isEmbeddedKeplrMobileWeb, localStorageKey]);
    // Execute onQrCloseCallback if WalletConnect URI is cleared, since it
    // has now been closed.
    useEffect(() => {
        var _a;
        if (!walletConnectUri && onQrCloseCallback) {
            (_a = onQrCloseCallback.current) === null || _a === void 0 ? void 0 : _a.call(onQrCloseCallback);
            onQrCloseCallback.current = undefined;
        }
    }, [walletConnectUri, onQrCloseCallback]);
    // Attempt reconnecting to a wallet after resetting if we have set a
    // wallet to select after resetting.
    useEffect(() => {
        if (status === WalletConnectionStatus.Resetting &&
            !connectingWallet &&
            connectToWalletUponReset) {
            setConnectToWalletUponReset(undefined);
            // Updates state to Connecting.
            _connectToWallet(connectToWalletUponReset);
        }
    }, [connectingWallet, status, _connectToWallet, connectToWalletUponReset]);
    // WalletConnect disconnect listener.
    useEffect(() => {
        if (!walletConnect) {
            return;
        }
        // Detect disconnected WC session and clear wallet state.
        walletConnect.on("disconnect", () => {
            console.log("WalletConnect disconnected.");
            disconnect(true);
            _cleanupAfterConnection();
        });
    }, [_cleanupAfterConnection, disconnect, walletConnect]);
    // keplr_keystorechange event listener.
    useEffect(() => {
        if (
        // Only run this on a browser.
        typeof window === "undefined") {
            return;
        }
        const listener = (event) => __awaiter(void 0, void 0, void 0, function* () {
            // Reconnect to wallet, since name/address may have changed.
            if (status === WalletConnectionStatus.Connected && connectedWallet) {
                _connectToWallet(connectedWallet.wallet);
            }
            // Execute callback if passed.
            onKeplrKeystoreChangeEvent === null || onKeplrKeystoreChangeEvent === void 0 ? void 0 : onKeplrKeystoreChangeEvent(event);
        });
        // Add event listener.
        window.addEventListener("keplr_keystorechange", listener);
        // Remove event listener on clean up.
        return () => {
            window.removeEventListener("keplr_keystorechange", listener);
        };
    }, [onKeplrKeystoreChangeEvent, connectedWallet, status, _connectToWallet]);
    // Memoize context data.
    const value = useMemo(() => ({
        connect: beginConnection,
        disconnect,
        connectedWallet,
        status,
        connected: status === WalletConnectionStatus.Connected,
        error,
        isEmbeddedKeplrMobileWeb,
        chainInfoOverrides,
        getSigningCosmWasmClientOptions,
        getSigningStargateClientOptions,
    }), [
        beginConnection,
        chainInfoOverrides,
        connectedWallet,
        disconnect,
        error,
        getSigningCosmWasmClientOptions,
        getSigningStargateClientOptions,
        isEmbeddedKeplrMobileWeb,
        status,
    ]);
    return (React.createElement(WalletManagerContext.Provider, { value: value },
        children,
        React.createElement(SelectWalletModal, { classNames: classNames, closeIcon: closeIcon, closeModal: _closePickerModal, isKeplrExtentionNotInstalled: isKeplrExtentionNotInstalled, isOpen: status !== WalletConnectionStatus.Resetting && pickerModalOpen, onClose: () => setPickerModalOpen(false), selectWallet: _connectToWallet, wallets: enabledWallets }),
        React.createElement(WalletConnectModal, { classNames: classNames, closeIcon: closeIcon, isOpen: status !== WalletConnectionStatus.Resetting && !!walletConnectUri, onClose: () => disconnect().finally(_cleanupAfterConnection), reset: _reset, uri: walletConnectUri }),
        React.createElement(EnablingWalletModal, { classNames: classNames, closeIcon: closeIcon, enablingMeta: enablingMeta, enablingStringOverride: enablingStringOverride, isOpen: status !== WalletConnectionStatus.Resetting && walletEnableModalOpen, onClose: () => setWalletEnableModalOpen(false), renderLoader: renderLoader, reset: _reset }),
        React.createElement(BaseModal, { classNames: classNames, isOpen: status === WalletConnectionStatus.Resetting, maxWidth: "24rem", title: "Resetting..." }, renderLoader === null || renderLoader === void 0 ? void 0 : renderLoader())));
};
//# sourceMappingURL=WalletManagerProvider.js.map