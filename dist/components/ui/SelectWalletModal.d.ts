import { WalletConnection } from "@delphi-labs/shuttle";
import { FunctionComponent } from "react";
import { ChainInfoID, WalletConnectionStatus } from "../../enums";
import { Wallet } from "../../types";
import { BaseModalProps } from "./BaseModal";
interface Props extends BaseModalProps {
    wallets: Wallet[];
    chainId: ChainInfoID;
    closeModal: () => void;
    noWalletsOverride?: string;
    setStatus: (status: WalletConnectionStatus) => void;
    selectWalletOverride?: string;
    scanQRCodeOverride?: string;
    status: WalletConnectionStatus;
    setConnectedWallet: (recentWallet: WalletConnection | undefined) => void;
}
export declare const SelectWalletModal: FunctionComponent<Props>;
export {};
//# sourceMappingURL=SelectWalletModal.d.ts.map