import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { WalletID } from "../enums";
export type WalletManagerProviderProps = PropsWithChildren<{
    enabledWallets: WalletID[keyof WalletID][];
    defaultChainId: string;
    chainInfoOverrides?: ChainInfoOverrides;
    classNames?: ModalClassNames;
    closeIcon?: ReactNode;
    enablingMeta?: IEnableMeta;
    selectWalletOverride?: string;
    walletMetaOverride?: IWalletMetaOverride;
    renderLoader?: () => ReactNode;
    persistent?: boolean;
}>;
export declare const WalletManagerProvider: FunctionComponent<WalletManagerProviderProps>;
//# sourceMappingURL=WalletManagerProvider.d.ts.map