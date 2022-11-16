import { Keplr } from "@keplr-wallet/types";
declare global {
    interface Window {
        leap: () => Keplr | undefined;
    }
}
export * from "./components";
export * from "./types";
export * from "./utils";
//# sourceMappingURL=index.d.ts.map