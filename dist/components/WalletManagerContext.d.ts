/// <reference types="react" />
import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { MsgExecuteContract, useShuttle } from "@delphi-labs/shuttle-react";
import { ChainInfoID } from "../enums";
import { BalancesResponse, IWalletManagerContext } from "../types";
declare const fetchBalances: (address: string, chainId: ChainInfoID) => Promise<BalancesResponse | undefined>;
declare const WalletManagerContext: import("react").Context<IWalletManagerContext | null>;
declare const useWalletManager: () => IWalletManagerContext;
declare const useWallet: typeof useShuttle;
declare const getClient: (rpc: string) => Promise<CosmWasmClient>;
export { fetchBalances, getClient, MsgExecuteContract, useWallet, useWalletManager, WalletManagerContext, };
//# sourceMappingURL=WalletManagerContext.d.ts.map