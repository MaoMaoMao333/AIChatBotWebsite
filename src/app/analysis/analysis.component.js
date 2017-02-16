System.register(['@angular/router', '@angular/core', '../common/input-utils/input-side.component', '../common/spinner/spinner.component', '../display-result/display-result.component'], function(exports_1, context_1) {
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
    var router_1, core_1, input_side_component_1, spinner_component_1, display_result_component_1;
    var AnalysisComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_side_component_1_1) {
                input_side_component_1 = input_side_component_1_1;
            },
            function (spinner_component_1_1) {
                spinner_component_1 = spinner_component_1_1;
            },
            function (display_result_component_1_1) {
                display_result_component_1 = display_result_component_1_1;
            }],
        execute: function() {
            AnalysisComponent = (function () {
                function AnalysisComponent(_activatedRoute) {
                    this._activatedRoute = _activatedRoute;
                    this.url = "";
                    this.translatedTextInput = "";
                    this.suggestedAnswer = "";
                }
                AnalysisComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._activatedRoute.params.subscribe(function (params) { return _this.url = params['url']; });
                };
                /**
                 * From InputSideComponent to DisplayResultComponent
                 */
                AnalysisComponent.prototype.updateTranslatedText = function ($event) {
                    this.translatedTextInput = $event.text;
                };
                /**
                 * From InputSideComponent to DisplayResultComponent
                 */
                AnalysisComponent.prototype.updateLoadingStatus = function ($event) {
                    this.loadingStatusInput = $event.status;
                };
                /**
                 * From DisplayResultComponent to InputSideComponent
                 */
                AnalysisComponent.prototype.updateSuggestedAnswer = function ($event) {
                    this.suggestedAnswer = $event.suggestedAnswerTextInput;
                };
                AnalysisComponent = __decorate([
                    core_1.Component({
                        selector: 'analysis',
                        template: "\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <input-side [suggestedAnswerTextInput]=\"suggestedAnswer\" (updateTranslatedTextEvent)=\"updateTranslatedText($event)\" (updateLoadingStatusEvent)=\"updateLoadingStatus($event)\"></input-side>\n            </div>\n            <div class=\"col-md-9\">\n                <display-result [urlInput]=\"url\" [translatedTextInput]=\"translatedTextInput\" [loadingStatusInput]=\"loadingStatusInput\" (updateSuggestedAnswerTextEvent)=\"updateSuggestedAnswer($event)\"></display-result>\n            </div>\n        </div>\n    ",
                        directives: [input_side_component_1.InputSideComponent, display_result_component_1.DisplayResultComponent, spinner_component_1.SpinnerComponent],
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute])
                ], AnalysisComponent);
                return AnalysisComponent;
            }());
            exports_1("AnalysisComponent", AnalysisComponent);
        }
    }
});
//# sourceMappingURL=analysis.component.js.map