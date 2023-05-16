/// <reference types="react" />
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "@delphi-labs/shuttle";
import { ChainInfoID } from "../enums";
import { BalancesResponse, IWalletManagerContext } from "../types";
declare const fetchBalances: (address: string, chainId: ChainInfoID) => Promise<BalancesResponse | undefined>;
declare const WalletManagerContext: import("react").Context<IWalletManagerContext | null>;
declare const useWalletManager: () => IWalletManagerContext;
declare const useWallet: () => {
    providers: import("@delphi-labs/shuttle").WalletProvider[];
    mobileProviders: import("@delphi-labs/shuttle").MobileWalletProvider[];
    mobileConnect: (options: {
        mobileProviderId: string;
        chainId: string;
        callback?: ((walletConnection: import("@delphi-labs/shuttle").WalletConnection) => void) | undefined;
    }) => Promise<import("@delphi-labs/shuttle").MobileConnectResponse>;
    connect: (options: {
        providerId: string;
        chainId: string;
    }) => Promise<import("@delphi-labs/shuttle").WalletConnection>;
    wallets: import("@delphi-labs/shuttle").WalletConnection[];
    getWallets: (filters?: {
        providerId?: string | undefined;
        chainId?: string | undefined;
    } | undefined) => import("@delphi-labs/shuttle").WalletConnection[];
    recentWallet: import("@delphi-labs/shuttle").WalletConnection | null;
    disconnect: (filters?: {
        providerId?: string | undefined;
        chainId?: string | undefined;
    } | undefined) => void;
    disconnectWallet: (wallet: import("@delphi-labs/shuttle").WalletConnection) => void;
    simulate: (options: {
        messages: import("@delphi-labs/shuttle").TransactionMsg<any>[];
        wallet?: import("@delphi-labs/shuttle").WalletConnection | null | undefined;
    }) => Promise<import("@delphi-labs/shuttle").SimulateResult>;
    broadcast: (options: {
        messages: import("@delphi-labs/shuttle").TransactionMsg<any>[];
        wallet?: import("@delphi-labs/shuttle").WalletConnection | null | undefined;
        feeAmount?: string | null | undefined;
        gasLimit?: string | null | undefined;
        memo?: string | null | undefined;
        mobile?: boolean | undefined;
        overrides?: {
            rpc?: string | undefined;
            rest?: string | undefined;
        } | undefined;
    }) => Promise<import("@delphi-labs/shuttle").BroadcastResult>;
    sign: (options: {
        messages: import("@delphi-labs/shuttle").TransactionMsg<any>[];
        feeAmount?: string | null | undefined;
        gasLimit?: string | null | undefined;
        memo?: string | null | undefined;
        wallet?: import("@delphi-labs/shuttle").WalletConnection | null | undefined;
        mobile?: boolean | undefined;
    }) => Promise<import("@delphi-labs/shuttle").SigningResult>;
};
declare const getClient: (rpc: string) => Promise<CosmWasmClient>;
export { fetchBalances, getClient, MsgExecuteContract, useWallet, useWalletManager, WalletManagerContext, };
//# sourceMappingURL=WalletManagerContext.d.ts.map