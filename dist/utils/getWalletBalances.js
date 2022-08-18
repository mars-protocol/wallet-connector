import { __awaiter } from "tslib";
import axios from "axios";
import { SimpleChainInfoList } from "../utils";
export const getWalletBalances = (address, chainId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!address || !chainId)
        return undefined;
    const URL = `${SimpleChainInfoList[chainId].rest}cosmos/bank/v1beta1/balances/${address}`;
    return yield axios({
        url: URL,
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
        return response.data;
    })
        .catch((err) => console.log(err));
});
//# sourceMappingURL=getWalletBalances.js.map