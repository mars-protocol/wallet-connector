import { FunctionComponent, ReactNode } from "react";
import { StationWalletTutorial } from "../../types";
import { BaseModalProps } from "./BaseModal";
interface Props extends BaseModalProps {
    stationWalletTutorial?: StationWalletTutorial;
    reset: () => void;
    renderLoader?: () => ReactNode;
}
export declare const StationWalletErrorModal: FunctionComponent<Props>;
export {};
//# sourceMappingURL=StationWalletErrorModal.d.ts.map