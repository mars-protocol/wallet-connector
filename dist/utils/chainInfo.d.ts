import { BIP44, Network } from "@delphi-labs/shuttle-react";
import { ChainInfoID } from "../enums";
import { ChainInfoOptions } from "../types";
export interface SimplifiedChainInfo extends Network {
    explorer?: string;
    explorerName?: string;
    alternativeBIP44s?: BIP44[];
}
export declare const SimpleChainInfoList: Record<ChainInfoID, SimplifiedChainInfo>;
export declare const getChainInfo: (chainId: ChainInfoID, chainInfoOverrides?: ChainInfoOptions) => SimplifiedChainInfo;
//# sourceMappingURL=chainInfo.d.ts.map