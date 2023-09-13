import { WalletExtensionProvider, WalletMobileProvider } from "@delphi-labs/shuttle-react";
import { WalletID } from "../enums";
import { IWalletMetaOverride, Wallet } from "../types";
import { SimplifiedChainInfo } from "./chainInfo";
export declare const CosmostationWallet: Wallet;
export declare const CosmostationMobileWallet: Wallet;
export declare const KeplrWallet: Wallet;
export declare const KeplrMobileWallet: Wallet;
export declare const LeapWallet: Wallet;
export declare const LeapMobileWallet: Wallet;
export declare const MetaMaskLeap: Wallet;
export declare const StationWallet: Wallet;
export declare const VectisWallet: Wallet;
export declare const XdefiWallet: Wallet;
export declare const wallets: Wallet[];
export declare const getEnabledWallets: (wallets: Wallet[], enabledWallets: WalletID[keyof WalletID][], walletMetaOverride?: IWalletMetaOverride) => Wallet[];
export declare const getWalletProviders: (wallets: Wallet[], networks?: SimplifiedChainInfo[]) => WalletExtensionProvider[] | undefined;
export declare const getMobileProviders: (wallets: Wallet[], networks?: SimplifiedChainInfo[]) => WalletMobileProvider[] | undefined;
//# sourceMappingURL=wallets.d.ts.map