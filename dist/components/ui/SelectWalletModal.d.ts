import { FunctionComponent } from "react";
import { BaseModalProps } from "./BaseModal";
interface Props extends BaseModalProps {
    wallets: Wallet[];
    chainId: string;
    closeModal: () => void;
    selectWalletOverride?: string;
}
export declare const SelectWalletModal: FunctionComponent<Props>;
export {};
//# sourceMappingURL=SelectWalletModal.d.ts.map