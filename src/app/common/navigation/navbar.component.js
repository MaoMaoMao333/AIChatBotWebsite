System.register(['@angular/core', '@angular/platform-browser', '../theme/theme.service'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, theme_service_1;
    var NavBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (theme_service_1_1) {
                theme_service_1 = theme_service_1_1;
            }],
        execute: function() {
            NavBarComponent = (function () {
                function NavBarComponent(_document, _themeService) {
                    this._document = _document;
                    this._themeService = _themeService;
                    /**
                     * Url from user's' input
                     */
                    this.url = "";
                    this.themeNames = new Array();
                }
                NavBarComponent.prototype.ngOnInit = function () {
                    this.themeNames = theme_service_1.ThemeService.getThemeNames();
                };
                NavBarComponent.prototype.onChangeTheme = function (theme) {
                    console.log(theme);
                    this._document.getElementById('themeId').setAttribute('href', theme_service_1.ThemeService.Themes[theme]);
                };
                NavBarComponent = __decorate([
                    core_1.Component({
                        selector: 'navbar',
                        templateUrl: 'app/common/navigation/navbar.component.html'
                    }),
                    __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
                    __metadata('design:paramtypes', [Object, theme_service_1.ThemeService])
                ], NavBarComponent);
                return NavBarComponent;
            }());
            exports_1("NavBarComponent", NavBarComponent);
        }
    }
});
//# sourceMappingURL=navbar.component.js.map