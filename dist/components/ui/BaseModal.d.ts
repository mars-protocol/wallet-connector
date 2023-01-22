import { FunctionComponent, PropsWithChildren, ReactElement, ReactNode } from "react";
export type BaseModalProps = PropsWithChildren<{
    isOpen: boolean;
    onClose?: () => void;
    title?: ReactElement | string;
    maxWidth?: string;
    classNames?: ModalClassNames;
    closeIcon?: ReactNode;
}>;
export declare const BaseModal: FunctionComponent<BaseModalProps>;
//# sourceMappingURL=BaseModal.d.ts.map