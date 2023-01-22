"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchBalances = void 0;
const utils_1 = require("../utils");
const fetchBalances = async (address, chainId) => {
    return await (0, utils_1.getWalletBalances)(address, chainId);
};
exports.fetchBalances = fetchBalances;
//# sourceMappingURL=WalletManagerContext.js.map