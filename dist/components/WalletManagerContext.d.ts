/// <reference types="react" />
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract } from "@delphi-labs/shuttle";
import { BalancesResponse, IWalletManagerContext } from "../types";
declare const fetchBalances: (address: string, chainId: string) => Promise<BalancesResponse | undefined>;
declare const WalletManagerContext: import("react").Context<IWalletManagerContext | null>;
declare const useWalletManager: () => IWalletManagerContext;
declare const useWallet: () => {
    providers: import("@delphi-labs/shuttle").WalletProvider[];
    connect: (providerId: string, chainId: string) => Promise<void>;
    wallets: import("@delphi-labs/shuttle").WalletConnection[];
    getWallets: (providerId?: string | undefined, chainId?: string | undefined) => import("@delphi-labs/shuttle").WalletConnection[];
    recentWallet: import("@delphi-labs/shuttle").WalletConnection | null;
    disconnect: (providerId?: string | undefined, chainId?: string | undefined) => void;
    disconnectWallet: (wallet: import("@delphi-labs/shuttle").WalletConnection) => void;
    simulate: (options: {
        messages: import("@delphi-labs/shuttle").TransactionMsg<any>[];
        wallet?: import("@delphi-labs/shuttle").WalletConnection | null | undefined;
    }) => Promise<import("@delphi-labs/shuttle").SimulateResult>;
    broadcast: (options: {
        messages: import("@delphi-labs/shuttle").TransactionMsg<any>[];
        feeAmount?: string | null | undefined;
        gasLimit?: string | null | undefined;
        memo?: string | null | undefined;
        wallet?: import("@delphi-labs/shuttle").WalletConnection | null | undefined;
    }) => Promise<import("@delphi-labs/shuttle").BroadcastResult>;
    sign: (options: {
        messages: import("@delphi-labs/shuttle").TransactionMsg<any>[];
        feeAmount?: string | null | undefined;
        gasLimit?: string | null | undefined;
        memo?: string | null | undefined;
        wallet?: import("@delphi-labs/shuttle").WalletConnection | null | undefined;
    }) => Promise<import("@delphi-labs/shuttle").SigningResult>;
};
declare const getClient: (rpc: string) => Promise<CosmWasmClient>;
export { fetchBalances, getClient, MsgExecuteContract, useWallet, useWalletManager, WalletManagerContext, };
//# sourceMappingURL=WalletManagerContext.d.ts.map