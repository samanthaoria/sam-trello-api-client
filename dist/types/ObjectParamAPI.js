"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.appControllerGetHello = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.appControllerGetHello(options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map