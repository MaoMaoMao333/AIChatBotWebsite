System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/map', './translation'], function(exports_1, context_1) {
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
    var core_1, http_1, translation_1;
    var TranslationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (translation_1_1) {
                translation_1 = translation_1_1;
            }],
        execute: function() {
            /**
             * Service which manages translations
             */
            TranslationService = (function () {
                function TranslationService(_http) {
                    this._http = _http;
                    this._url = "http://127.0.0.1:8000/translations/";
                }
                TranslationService.prototype.getTranslations = function () {
                    return this._http.get(this._url)
                        .map(function (res) { return res.json(); });
                };
                TranslationService.prototype.getTranslation = function (id) {
                    return this._http.get(this.getTranslationUrl(id))
                        .map(function (res) { return res.json(); });
                };
                TranslationService.prototype.postTranslation = function (text, algorithmId, algorithmName) {
                    this.translation = new translation_1.Translation();
                    this.translation.originalText = text;
                    this.translation.algorithmId = algorithmId;
                    this.translation.algorithmName = algorithmName;
                    var body = JSON.stringify(this.translation);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.post(this._url, body, options)
                        .map(function (res) { return res.json(); });
                };
                TranslationService.prototype.updateTranslation = function (translation) {
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this._http.put(this.getTranslationUrl(translation.id), JSON.stringify(translation), options)
                        .map(function (res) { return res.json(); });
                };
                TranslationService.prototype.getTranslationUrl = function (id) {
                    return this._url + id + "/";
                };
                TranslationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TranslationService);
                return TranslationService;
            }());
            exports_1("TranslationService", TranslationService);
        }
    }
});
//# sourceMappingURL=translation.service.js.map