import { FunctionComponent, ReactElement, ReactNode } from "react";
import { IEnableMeta } from "src/types";
import { BaseModalProps } from "./BaseModal";
export interface EnablingWalletModalProps extends BaseModalProps {
    enablingStringOverride?: string | ReactElement;
    enablingMeta?: IEnableMeta;
    renderLoader?: () => ReactNode;
    reset: () => void;
}
export declare const EnablingWalletModal: FunctionComponent<EnablingWalletModalProps>;
//# sourceMappingURL=EnablingWalletModal.d.ts.map