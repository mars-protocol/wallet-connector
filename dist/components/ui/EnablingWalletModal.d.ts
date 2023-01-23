import { FunctionComponent, ReactElement, ReactNode } from "react";
import { BaseModalProps } from "./BaseModal";
export interface EnablingWalletModalProps extends BaseModalProps {
    enablingStringOverride?: string | ReactElement;
    renderLoader?: () => ReactNode;
}
export declare const EnablingWalletModal: FunctionComponent<EnablingWalletModalProps>;
//# sourceMappingURL=EnablingWalletModal.d.ts.map