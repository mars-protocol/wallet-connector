import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { useWallet, useWalletManager, WalletManagerProvider, } from "../components";
import { ChainInfoID, WalletConnectionStatus, WalletType } from "../types";
const DisplayStatus = () => {
    const { status } = useWalletManager();
    useWallet();
    return React.createElement("p", null, status);
};
describe("display status", () => {
    beforeAll(() => act(() => {
        render(React.createElement(WalletManagerProvider, { defaultChainId: ChainInfoID.Juno1, enabledWalletTypes: [WalletType.Keplr, WalletType.WalletConnectKeplr] },
            React.createElement(DisplayStatus, null)));
    }));
    it("should display the status in the DOM", () => {
        expect(screen.getByText(WalletConnectionStatus.ReadyForConnection)).toBeInTheDocument();
    });
    afterAll(cleanup);
});
//# sourceMappingURL=display_status.test.js.map