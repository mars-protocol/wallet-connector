import { __awaiter } from "tslib";
import { WalletType } from "../types";
import { getWalletBalances } from "../utils";
export const getConnectedWalletInfo = (wallet, client, chainInfo, signingCosmWasmClientOptions, signingStargateClientOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.enable(chainInfo.chainId);
    }
    catch (e) {
        // Don't handle the missing chain as an error, but a warning
        console.warn(e);
        // Only Keplr browser extension supports suggesting chain.
        // Not WalletConnect nor embedded Keplr Mobile web.
        if (wallet.type === WalletType.Keplr && client.mode !== "mobile-web") {
            const info = Object.assign(Object.assign({}, chainInfo), { stakeCurrency: Object.assign(Object.assign({}, chainInfo.stakeCurrency), { coinImageUrl: chainInfo.stakeCurrency.coinImageUrl
                        ? window.origin + chainInfo.stakeCurrency.coinImageUrl
                        : undefined }), currencies: chainInfo.currencies.map((currency) => (Object.assign(Object.assign({}, currency), { coinImageUrl: currency.coinImageUrl
                        ? window.origin + currency.coinImageUrl
                        : undefined }))), feeCurrencies: chainInfo.feeCurrencies.map((currency) => (Object.assign(Object.assign({}, currency), { coinImageUrl: currency.coinImageUrl
                        ? window.origin + currency.coinImageUrl
                        : undefined }))) });
            yield client.experimentalSuggestChain(info);
            try {
                // Chain is now added, retry to enable it
                yield client.enable(chainInfo.chainId);
            }
            catch (e) {
                console.warn(e);
            }
        }
    }
    // Parallelize for efficiency.
    const [{ name, bech32Address: address }, offlineSigner] = yield Promise.all([
        // Get name.
        client.getKey(chainInfo.chainId),
        // Get offline signer.
        wallet.getOfflineSignerFunction(client)(chainInfo.chainId),
    ]);
    if (address === undefined) {
        throw new Error("Failed to retrieve wallet address.");
    }
    const [signingCosmWasmClient, signingStargateClient] = yield Promise.all([
        // Get CosmWasm client.
        yield (yield import("@cosmjs/cosmwasm-stargate")).SigningCosmWasmClient.connectWithSigner(chainInfo.rpc, offlineSigner, signingCosmWasmClientOptions),
        // Get Stargate client.
        yield (yield import("@cosmjs/stargate")).SigningStargateClient.connectWithSigner(chainInfo.rpc, offlineSigner, signingStargateClientOptions),
    ]);
    const walletBalances = yield getWalletBalances(address, chainInfo.chainId);
    return {
        wallet,
        walletClient: client,
        chainInfo,
        offlineSigner,
        name,
        address,
        walletBalances,
        signingCosmWasmClient,
        signingStargateClient,
    };
});
//# sourceMappingURL=getConnectedWalletInfo.js.map