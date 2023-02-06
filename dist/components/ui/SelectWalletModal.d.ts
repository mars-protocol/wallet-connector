import { FunctionComponent } from "react";
import { WalletConnectionStatus } from "../../enums";
import { Wallet } from "../../types";
import { BaseModalProps } from "./BaseModal";
interface Props extends BaseModalProps {
    wallets: Wallet[];
    chainId: string;
    closeModal: () => void;
    noWalletsOverride?: string;
    setStatus: (status: WalletConnectionStatus) => void;
    selectWalletOverride?: string;
    scanQRCodeOverride?: string;
    status: WalletConnectionStatus;
}
export declare const SelectWalletModal: FunctionComponent<Props>;
export {};
//# sourceMappingURL=SelectWalletModal.d.ts.map