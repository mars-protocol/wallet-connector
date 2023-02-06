import { FunctionComponent, ReactElement, ReactNode } from "react";
import { BaseModalProps } from "./BaseModal";
interface Props extends BaseModalProps {
    enablingStringOverride?: string | ReactElement;
    reset: () => void;
    renderLoader?: () => ReactNode;
}
export declare const EnablingWalletModal: FunctionComponent<Props>;
export {};
//# sourceMappingURL=EnablingWalletModal.d.ts.map