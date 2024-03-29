import { Network } from "@delphi-labs/shuttle-react";
import { ChainInfoID } from "../enums";
import { ChainInfoOptions } from "../types";
export interface SimplifiedChainInfo extends Network {
    explorer?: string;
    explorerName?: string;
}
export declare const SimpleChainInfoList: Record<ChainInfoID, SimplifiedChainInfo>;
export declare const getChainInfo: (chainId: ChainInfoID, chainInfoOverrides?: ChainInfoOptions) => SimplifiedChainInfo;
//# sourceMappingURL=chainInfo.d.ts.map