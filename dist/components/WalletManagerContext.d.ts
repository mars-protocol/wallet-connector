/// <reference types="react" />
export declare const fetchBalances: (address: string, chainId: string) => Promise<BalancesResponse | undefined>;
export declare const WalletManagerContext: import("react").Context<IWalletManagerContext | null>;
export declare const useWalletManager: () => IWalletManagerContext;
export declare const useWallet: () => {
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
//# sourceMappingURL=WalletManagerContext.d.ts.map