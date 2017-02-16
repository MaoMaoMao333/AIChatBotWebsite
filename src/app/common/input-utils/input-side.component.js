System.register(['../algorithm/algorithm.service', '../translation/translation.service', '@angular/core', '@angular/platform-browser'], function(exports_1, context_1) {
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
    var algorithm_service_1, translation_service_1, core_1, platform_browser_1;
    var InputSideComponent;
    return {
        setters:[
            function (algorithm_service_1_1) {
                algorithm_service_1 = algorithm_service_1_1;
            },
            function (translation_service_1_1) {
                translation_service_1 = translation_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            }],
        execute: function() {
            /**
             * Component which represents the side bar containing an input panel
             */
            InputSideComponent = (function () {
                function InputSideComponent(_document, _algorithmService, _translationService) {
                    this._document = _document;
                    this._algorithmService = _algorithmService;
                    this._translationService = _translationService;
                    this.textInput = "";
                    this.isLoading = false;
                    this.isScored = false;
                    this.selectedAlgorithm = "algorithm";
                    this.suggestedAnswerTextInput = "";
                    this.suggestedAnswerText = "";
                    this.updateTranslatedTextEvent = new core_1.EventEmitter();
                    this.updateLoadingStatusEvent = new core_1.EventEmitter();
                }
                InputSideComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._algorithmService.getAlgorithms()
                        .subscribe(function (algorithms) {
                        _this.algorithms = algorithms;
                    }, function (error) {
                        console.log("Unable to load algorithms");
                    });
                };
                InputSideComponent.prototype.ngDoCheck = function () {
                    if (this.suggestedAnswerText !== this.suggestedAnswerTextInput) {
                        this.suggestedAnswerText = this.suggestedAnswerTextInput;
                        this.onUpdateSuggestedAnswer(this.suggestedAnswerText);
                    }
                };
                InputSideComponent.prototype.translateText = function () {
                    var _this = this;
                    if (this.selectedAlgorithm != "algorithm") {
                        this.isLoading = true;
                        this.updateLoadingStatusEvent.emit({ status: this.isLoading });
                        this._translationService.postTranslation(this.textInput, this.selectedAlgorithmId, this.selectedAlgorithm)
                            .subscribe(function (translationResult) {
                            console.log(translationResult);
                            _this.translationResult = translationResult;
                            _this.updateTranslatedTextEvent.emit({ text: translationResult.translatedText });
                            _this.isLoading = false;
                            _this.updateLoadingStatusEvent.emit({ status: _this.isLoading });
                        }, function (error) {
                            console.log(error);
                            console.log("Unable to translate the given text.");
                            _this.isLoading = false;
                            _this.updateLoadingStatusEvent.emit({ status: _this.isLoading });
                        });
                    }
                };
                InputSideComponent.prototype.onChangeAlgorithm = function (algorithm) {
                    this.selectedAlgorithm = algorithm.algorithmName;
                    this.selectedAlgorithmId = algorithm.algorithmId;
                };
                InputSideComponent.prototype.onUpdateScore = function (score) {
                    this.score = score;
                    this.isScored = true;
                    this.translationResult.score = score;
                    this._translationService.updateTranslation(this.translationResult)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (error) {
                        console.log(error);
                        console.log("Unable to score this translation.");
                    });
                };
                InputSideComponent.prototype.onUpdateSuggestedAnswer = function (answer) {
                    this.translationResult.suggestedAnswer = answer;
                    this._translationService.updateTranslation(this.translationResult)
                        .subscribe(function (res) {
                        console.log(res);
                    }, function (error) {
                        console.log(error);
                        console.log("Unable to submit suggested answer for this translation.");
                    });
                };
                InputSideComponent.prototype.closeScoreAlert = function () {
                    this.isScored = false;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InputSideComponent.prototype, "suggestedAnswerTextInput", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputSideComponent.prototype, "updateTranslatedTextEvent", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputSideComponent.prototype, "updateLoadingStatusEvent", void 0);
                InputSideComponent = __decorate([
                    core_1.Component({
                        selector: 'input-side',
                        templateUrl: 'app/common/input-utils/input-side.component.html',
                        styles: ["\n   \n        .right {\n            float: right;    \n        }\n\n        .left {\n            float: left;    \n        }\n\n    "]
                    }),
                    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object, algorithm_service_1.AlgorithmService, translation_service_1.TranslationService])
                ], InputSideComponent);
                return InputSideComponent;
            }());
            exports_1("InputSideComponent", InputSideComponent);
        }
    }
});
//# sourceMappingURL=input-side.component.js.map