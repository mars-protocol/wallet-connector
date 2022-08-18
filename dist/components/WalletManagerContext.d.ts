/// <reference types="react" />
import { ChainInfo } from "@keplr-wallet/types";
import { BalancesResponse, IWalletManagerContext, UseWalletResponse } from "../types";
export declare const WalletManagerContext: import("react").Context<IWalletManagerContext | null>;
export declare const useWalletManager: () => IWalletManagerContext;
export declare const fetchBalances: (address: string, chainId?: string) => Promise<BalancesResponse | undefined>;
export declare const useWallet: (chainId?: ChainInfo["chainId"]) => UseWalletResponse;
//# sourceMappingURL=WalletManagerContext.d.ts.map