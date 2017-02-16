System.register(['@angular/core', './log-file.service', './log-web.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, log_file_service_1, log_web_service_1;
    var LogRetriever;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (log_file_service_1_1) {
                log_file_service_1 = log_file_service_1_1;
            },
            function (log_web_service_1_1) {
                log_web_service_1 = log_web_service_1_1;
            }],
        execute: function() {
            LogRetriever = (function () {
                function LogRetriever(_logWebService, _logFileService) {
                    this._logWebService = _logWebService;
                    this._logFileService = _logFileService;
                }
                /**
                 * Get log from the specified url
                 */
                LogRetriever.prototype.getLog = function (url) {
                    if (this.isWeb(url)) {
                        return this._logWebService.getLog(url);
                    }
                    else {
                        return this._logFileService.getLog(url);
                    }
                };
                /**
                 * Determine if the provided url is linked to web or file system
                 */
                LogRetriever.prototype.isWeb = function (url) {
                    if (url.toLowerCase().indexOf("http") !== -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                LogRetriever = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(log_web_service_1.LogWebService)),
                    __param(1, core_1.Inject(log_file_service_1.LogFileService)), 
                    __metadata('design:paramtypes', [Object, Object])
                ], LogRetriever);
                return LogRetriever;
            }());
            exports_1("LogRetriever", LogRetriever);
        }
    }
});
//# sourceMappingURL=log-retriever.js.map