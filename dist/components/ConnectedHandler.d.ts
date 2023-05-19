import { WalletConnection } from "@delphi-labs/shuttle";
import { ChainInfoID } from "src/enums";
interface Props {
    setConnectedWallet: (recentWallet: WalletConnection | undefined) => void;
    chainId: ChainInfoID;
}
declare const ConnectedHandler: ({ setConnectedWallet, chainId }: Props) => null;
export default ConnectedHandler;
//# sourceMappingURL=ConnectedHandler.d.ts.map