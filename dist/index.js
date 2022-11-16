"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
if (typeof window !== "undefined" &&
    typeof browser !== "undefined" &&
    typeof browser.storage === "undefined") {
    browser.storage = { local: { get: undefined, set: undefined } };
}
tslib_1.__exportStar(require("./components"), exports);
tslib_1.__exportStar(require("./types"), exports);
tslib_1.__exportStar(require("./utils"), exports);
//# sourceMappingURL=index.js.map