import { WalletConnection } from "@delphi-labs/shuttle-react";
import { ChainInfoID } from "src/enums";
interface Props {
    setConnected: () => void;
    setConnectedWallet: (recentWallet: WalletConnection) => void;
    chainId: ChainInfoID;
}
declare const WalletConnectHandler: ({ setConnected, setConnectedWallet, chainId, }: Props) => null;
export default WalletConnectHandler;
//# sourceMappingURL=WalletConnectHandler.d.ts.map