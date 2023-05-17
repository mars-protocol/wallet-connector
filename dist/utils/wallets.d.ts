import { MobileWalletProvider, WalletProvider } from "@delphi-labs/shuttle";
import { WalletID } from "../enums";
import { IWalletMetaOverride, Wallet } from "../types";
import { SimplifiedChainInfo } from "./chainInfo";
export declare const CosmostationWallet: Wallet;
export declare const CosmostationMobileWallet: Wallet;
export declare const FalconWallet: Wallet;
export declare const KeplrWallet: Wallet;
export declare const KeplrMobileWallet: Wallet;
export declare const LeapWallet: Wallet;
export declare const StationWallet: Wallet;
export declare const StationMobileWallet: Wallet;
export declare const XdefiWallet: Wallet;
export declare const wallets: Wallet[];
export declare const getEnabledWallets: (wallets: Wallet[], enabledWallets: WalletID[keyof WalletID][], walletMetaOverride?: IWalletMetaOverride) => Wallet[];
export declare const getWalletProviders: (wallets: Wallet[], networks?: SimplifiedChainInfo[]) => WalletProvider[] | undefined;
export declare const getMobileProviders: (wallets: Wallet[], networks?: SimplifiedChainInfo[]) => MobileWalletProvider[] | undefined;
//# sourceMappingURL=wallets.d.ts.map