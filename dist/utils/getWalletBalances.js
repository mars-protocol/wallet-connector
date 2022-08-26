"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWalletBalances = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
const utils_1 = require("../utils");
const getWalletBalances = (address, chainId) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (!address || !chainId)
        return undefined;
    const URL = `${utils_1.SimpleChainInfoList[chainId].rest}cosmos/bank/v1beta1/balances/${address}`;
    return yield (0, axios_1.default)({
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
exports.getWalletBalances = getWalletBalances;
//# sourceMappingURL=getWalletBalances.js.map