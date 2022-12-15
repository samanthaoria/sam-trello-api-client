"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.appControllerGetHello = function (_options) {
        var result = this.api.appControllerGetHello(_options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map