import { FunctionComponent } from "react";
import { WalletConnectionStatus } from "../../enums";
import { BaseModalProps } from "./BaseModal";
interface Props extends BaseModalProps {
    wallets: Wallet[];
    chainId: string;
    closeModal: () => void;
    setStatus: (status: WalletConnectionStatus) => void;
    selectWalletOverride?: string;
}
export declare const SelectWalletModal: FunctionComponent<Props>;
export {};
//# sourceMappingURL=SelectWalletModal.d.ts.map