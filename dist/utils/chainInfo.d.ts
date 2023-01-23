import { AppCurrency } from "@keplr-wallet/types";
import { ChainInfoID } from "../enums";
export type SimplifiedChainInfo = Omit<ChainInfoOptions, "stakeCurrency" | "feeCurrencies"> & {
    explorer?: string;
    explorerName?: string;
    currencies: Array<AppCurrency & {
        isStakeCurrency?: boolean;
        isFeeCurrency?: boolean;
    }>;
};
export declare const SimpleChainInfoList: Record<ChainInfoID, SimplifiedChainInfo>;
export declare const getChainInfo: (chainId: string, chainInfoOverrides?: ChainInfoOverrides) => SimplifiedChainInfo;
//# sourceMappingURL=chainInfo.d.ts.map