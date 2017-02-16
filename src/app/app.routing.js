System.register(['./analysis/analysis.component', './evaluation/evaluation.component', '@angular/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var analysis_component_1, evaluation_component_1, router_1;
    var appRoutes, appRoutingProviders, routing;
    return {
        setters:[
            function (analysis_component_1_1) {
                analysis_component_1 = analysis_component_1_1;
            },
            function (evaluation_component_1_1) {
                evaluation_component_1 = evaluation_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            appRoutes = [
                { path: '', component: analysis_component_1.AnalysisComponent, terminal: true },
                { path: 'translate', component: analysis_component_1.AnalysisComponent },
                { path: 'translate/:url', component: analysis_component_1.AnalysisComponent },
                { path: 'evaluate', component: evaluation_component_1.EvaluationComponent },
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    }
});
//# sourceMappingURL=app.routing.js.map