System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var ThemeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Service which manages Themes
             */
            ThemeService = (function () {
                function ThemeService() {
                }
                /**
                 * Return all themes' names
                 */
                ThemeService.getThemeNames = function () {
                    var names = new Array();
                    for (var theme in ThemeService.Themes) {
                        names.push(theme);
                    }
                    return names;
                };
                ThemeService.Themes = {
                    Cosmo: "assets/css/themes/bootstrap.min_cosmo.css",
                    Darkly: "assets/css/themes/bootstrap.min_darkly.css",
                    Journal: "assets/css/themes/bootstrap.min_journal.css",
                    Paper: "assets/css/themes/bootstrap.min_paper.css",
                    Readable: "assets/css/themes/bootstrap.min_readable.css",
                    Simplex: "assets/css/themes/bootstrap.min_simplex.css",
                    Slate: "assets/css/themes/bootstrap.min_slate.css",
                    Superhero: "assets/css/themes/bootstrap.min_superhero.css",
                    United: "assets/css/themes/bootstrap.min_united.css",
                    Yeti: "assets/css/themes/bootstrap.min_yeti.css"
                };
                ThemeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ThemeService);
                return ThemeService;
            }());
            exports_1("ThemeService", ThemeService);
        }
    }
});
//# sourceMappingURL=theme.service.js.map