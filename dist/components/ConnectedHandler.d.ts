import { WalletConnection } from "@delphi-labs/shuttle-react";
import { ChainInfoID } from "src/enums";
interface Props {
    setConnectedWallet: (recentWallet: WalletConnection | undefined) => void;
    chainId: ChainInfoID;
    connectedWallet?: WalletConnection;
}
declare const ConnectedHandler: ({ setConnectedWallet, chainId, connectedWallet, }: Props) => null;
export default ConnectedHandler;
//# sourceMappingURL=ConnectedHandler.d.ts.map