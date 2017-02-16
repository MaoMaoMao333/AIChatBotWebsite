System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var LogWebService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            /**
             * Class that gets log from web
             */
            LogWebService = (function () {
                function LogWebService(_http) {
                    this._http = _http;
                }
                /**
                 * @param url which specifies the location of the log desired
                 * @return the log which is desired
                 */
                LogWebService.prototype.getLogBy = function (url) {
                    return this._http.get(url).map(function (res) { return res.text(); });
                };
                LogWebService.prototype.getLog = function () {
                    return this.log;
                };
                LogWebService.prototype.setLog = function (log) {
                    this.log = log;
                };
                LogWebService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], LogWebService);
                return LogWebService;
            }());
            exports_1("LogWebService", LogWebService);
        }
    }
});
//# sourceMappingURL=log-web.service.js.map