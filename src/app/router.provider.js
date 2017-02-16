System.register(['../../analysis/analysis.component', '../../comparison/comparison.component', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var analysis_component_1, comparison_component_1, router_1;
    var appRoutes, APP_ROUTER_PROVIDER;
    return {
        setters:[
            function (analysis_component_1_1) {
                analysis_component_1 = analysis_component_1_1;
            },
            function (comparison_component_1_1) {
                comparison_component_1 = comparison_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            exports_1("appRoutes", appRoutes = [
                { path: '', component: analysis_component_1.AnalysisComponent, terminal: true },
                { path: 'translate', component: analysis_component_1.AnalysisComponent },
                { path: 'translate/:url', component: analysis_component_1.AnalysisComponent },
                { path: 'compare', component: comparison_component_1.ComparisonComponent },
            ]);
            exports_1("APP_ROUTER_PROVIDER", APP_ROUTER_PROVIDER = router_1.provideRouter(appRoutes));
        }
    }
});
//# sourceMappingURL=router.provider.js.map