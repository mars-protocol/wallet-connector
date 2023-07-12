import { WalletConnection } from "@delphi-labs/shuttle-react";
import { ChainInfoID } from "src/enums";
interface Props {
    setConnected: () => void;
    setConnectedWallet: (recentWallet: WalletConnection) => void;
    chainId: ChainInfoID;
}
declare const AutoConnectHandler: ({ setConnected, setConnectedWallet, chainId, }: Props) => null;
export default AutoConnectHandler;
//# sourceMappingURL=AutoConnectHandler.d.ts.map