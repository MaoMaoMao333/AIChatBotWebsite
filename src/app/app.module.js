System.register(['@angular/core', '@angular/platform-browser', './app.component', './app.routing', './analysis/analysis.component', './evaluation/evaluation.component', './common/logs/log-web.service', './common/logs/log-file.service', './common/algorithm/algorithm.service', './common/translation/translation.service', './common/theme/theme.service', '@angular/http'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, app_component_1, app_routing_1, analysis_component_1, evaluation_component_1, log_web_service_1, log_file_service_1, algorithm_service_1, translation_service_1, theme_service_1, http_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (analysis_component_1_1) {
                analysis_component_1 = analysis_component_1_1;
            },
            function (evaluation_component_1_1) {
                evaluation_component_1 = evaluation_component_1_1;
            },
            function (log_web_service_1_1) {
                log_web_service_1 = log_web_service_1_1;
            },
            function (log_file_service_1_1) {
                log_file_service_1 = log_file_service_1_1;
            },
            function (algorithm_service_1_1) {
                algorithm_service_1 = algorithm_service_1_1;
            },
            function (translation_service_1_1) {
                translation_service_1 = translation_service_1_1;
            },
            function (theme_service_1_1) {
                theme_service_1 = theme_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routing_1.routing
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            analysis_component_1.AnalysisComponent,
                            evaluation_component_1.EvaluationComponent
                        ],
                        providers: [
                            app_routing_1.appRoutingProviders,
                            log_web_service_1.LogWebService,
                            log_file_service_1.LogFileService,
                            algorithm_service_1.AlgorithmService,
                            translation_service_1.TranslationService,
                            theme_service_1.ThemeService,
                            http_1.HTTP_PROVIDERS
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map