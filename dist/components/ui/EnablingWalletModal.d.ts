import { FunctionComponent, ReactElement, ReactNode } from "react";
import { BaseModalProps } from "./BaseModal";
export interface EnablingWalletModalProps extends BaseModalProps {
    enablingStringOverride?: string | ReactElement;
    reset: () => void;
    renderLoader?: () => ReactNode;
}
export declare const EnablingWalletModal: FunctionComponent<EnablingWalletModalProps>;
//# sourceMappingURL=EnablingWalletModal.d.ts.map