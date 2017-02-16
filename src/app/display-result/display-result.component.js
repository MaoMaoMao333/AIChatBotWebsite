System.register(['@angular/core', '../common/pipe/safe.pipe', 'assets/js/alert.js'], function(exports_1, context_1) {
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
    var core_1, safe_pipe_1;
    var DisplayResultComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (safe_pipe_1_1) {
                safe_pipe_1 = safe_pipe_1_1;
            },
            function (_1) {}],
        execute: function() {
            DisplayResultComponent = (function () {
                // private highlightColor = "FFFF00";
                // @Output() updatePatternResultsEvent = new EventEmitter();
                function DisplayResultComponent() {
                    /**
                     * url being used
                     */
                    this.url = "";
                    /**
                     * Url from input
                     */
                    this.urlInput = "";
                    this.translatedTextInput = "";
                    this.loadingStatusInput = false;
                    this.updateSuggestedAnswerTextEvent = new core_1.EventEmitter();
                    /**
                     * Flag to determine if service loading is in progress
                     */
                    this.isLoading = false;
                    /**
                     * Flag to determine if service is loading the first time
                     */
                    this.isFirstTimeLoading = true;
                    /**
                     * Flag to determine whether text from service is processed
                     */
                    this.isProcessed = false;
                    /**
                     * Flag to determine whether text is fully fetched
                     */
                    this.isFetched = false;
                    /**
                     * Flag to indicate if an error has occured
                     */
                    this.isError = false;
                    /**
                     * String to store the translated text
                     */
                    this.translatedText = "";
                    /**
                     * String to store the suggested answer input text
                     */
                    this.suggestedAnswerTextInput = "";
                }
                /**
                 * Method will be triggered when input properties get changed;
                 * OnChanges will be called before ngOnInit when initializing components
                 */
                DisplayResultComponent.prototype.ngOnChanges = function (changes) {
                    this.isLoading = this.loadingStatusInput;
                    // Use isLoading to set isFirstTimeLoading from true to false
                    // In order to avoid showing the suggested answer text field the first time
                    if (this.isLoading) {
                        this.isFirstTimeLoading = false;
                    }
                    // if (this.urlInput != null && this.url != this.urlInput) {
                    //     this.url = this.urlInput;
                    //     if (this.url != "") {
                    //         // this.processText(this.url, this.patterns);
                    //     }
                    // }
                    // if (this.isFetched && !this.isProcessed) {
                    //     this.matchPattern(this.getLogContent(), this.patterns);
                    // }
                };
                /**
                 * Fetching existing patterns and logs from service to restore user's input
                 */
                DisplayResultComponent.prototype.ngOnInit = function () {
                };
                /**
                 * Determine if the provided url is pointed to web or file system location
                 * @return true if it is pointed to web; Otherwise, false
                 */
                DisplayResultComponent.prototype.isWeb = function (url) {
                    if (url != null && url.toLowerCase().indexOf("http") !== -1) {
                        return true;
                    }
                    else {
                        return false;
                    }
                };
                DisplayResultComponent.prototype.updateSuggestedAnswer = function () {
                    this.updateSuggestedAnswerTextEvent.emit({ suggestedAnswerTextInput: this.suggestedAnswerTextInput });
                };
                /**
                 * Highlight the given excerpt with the specified color in html format
                 */
                DisplayResultComponent.prototype.highlightPattern = function (excerpt, color, id) {
                    var divBegin = "<div style=\"display: inline\" id=" + id + ">";
                    var divEnd = "</div>";
                    var spanBegin = "<span style=\"background-color: #" + color + "\">";
                    var spanEnd = "</span>";
                    var highlighted = divBegin + spanBegin + excerpt + spanEnd + divEnd;
                    return highlighted;
                };
                /**
                 * Split a string into chunks of the given size
                 * @param  {String} string is the String to split
                 * @param  {Number} size is the size you of the cuts
                 * @return {Array} an Array with the strings
                 */
                DisplayResultComponent.prototype.splitString = function (string, size) {
                    var re = new RegExp('(.|[\r\n]){1,' + size + '}', 'g');
                    return string.match(re);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DisplayResultComponent.prototype, "urlInput", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], DisplayResultComponent.prototype, "translatedTextInput", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], DisplayResultComponent.prototype, "loadingStatusInput", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DisplayResultComponent.prototype, "updateSuggestedAnswerTextEvent", void 0);
                DisplayResultComponent = __decorate([
                    core_1.Component({
                        selector: 'display-result',
                        templateUrl: 'app/display-result/display-result.component.html',
                        styles: [
                            "\n    .right {\n        \n        float: right;    \n    }\n\n    ul.nav-pills {\n      top: 270px;\n      position: fixed;\n    }\n\n        "
                        ],
                        pipes: [safe_pipe_1.SafePipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DisplayResultComponent);
                return DisplayResultComponent;
            }());
            exports_1("DisplayResultComponent", DisplayResultComponent);
        }
    }
});
//# sourceMappingURL=display-result.component.js.map