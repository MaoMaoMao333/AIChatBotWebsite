import {Component, EventEmitter, Input, Output, OnInit, OnChanges} from '@angular/core';
import {SafePipe} from '../common/pipe/safe.pipe';

import 'assets/js/alert.js';

@Component({
    selector: 'display-result',
    templateUrl: 'display-result.component.html',
    styles: [
        `
    .right {
        
        float: right;    
    }

    ul.nav-pills {
      top: 270px;
      position: fixed;
    }

        `
    ]
})
export class DisplayResultComponent implements OnInit, OnChanges {
    /**
     * url being used
     */
    url: string = "";
    /**
     * Url from input
     */
    @Input() urlInput: string = "";

    @Input() translatedTextInput: string = "";

    @Input() loadingStatusInput: boolean = false;    

    @Output() updateSuggestedAnswerTextEvent = new EventEmitter();    
    /**
     * Flag to determine if service loading is in progress
     */
    private isLoading: boolean = false;
    /**
     * Flag to determine if service is loading the first time
     */
    private isFirstTimeLoading: boolean = true;    
    /**
     * Flag to determine whether text from service is processed 
     */
    private isProcessed: boolean = false;
    /**
     * Flag to determine whether text is fully fetched
     */
    private isFetched: boolean = false;
    /**
     * Flag to indicate if an error has occured
     */
    private isError: boolean = false;
    /**
     * String to store the translated text
     */
    private translatedText: string = "";
    /**
     * String to store the suggested answer input text
     */
    private suggestedAnswerTextInput: string = "";

    // private highlightColor = "FFFF00";

    // @Output() updatePatternResultsEvent = new EventEmitter();

    constructor() {
        
    }


    /**
     * Method will be triggered when input properties get changed;
     * OnChanges will be called before ngOnInit when initializing components
     */
    ngOnChanges(changes) {

        this.isLoading = this.loadingStatusInput;
        
        // Use isLoading to set isFirstTimeLoading from true to false
        // In order to avoid showing the suggested answer text field the first time
        if(this.isLoading) {
            this.isFirstTimeLoading = false;
            this.suggestedAnswerTextInput = "";
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
    }


    /**
     * Fetching existing patterns and logs from service to restore user's input
     */
    ngOnInit() {
    }


    /**
     * Determine if the provided url is pointed to web or file system location
     * @return true if it is pointed to web; Otherwise, false
     */
    isWeb(url: string): boolean {

        if (url != null && url.toLowerCase().indexOf("http") !== -1) {
            return true;
        }
        else {
            return false;
        }
    }

    updateSuggestedAnswer() {

        this.updateSuggestedAnswerTextEvent.emit({ suggestedAnswerTextInput: this.suggestedAnswerTextInput });
    }

    /**
     * Highlight the given excerpt with the specified color in html format
     */
    highlightPattern(excerpt: string, color: string, id?: number): string {
        let divBegin = "<div style=\"display: inline\" id=" + id + ">";
        let divEnd = "</div>";

        let spanBegin = "<span style=\"background-color: #" + color + "\">";
        let spanEnd = "</span>";


        let highlighted = divBegin + spanBegin + excerpt + spanEnd + divEnd;

        return highlighted;
    }


    /**
     * Split a string into chunks of the given size
     * @param  {String} string is the String to split
     * @param  {Number} size is the size you of the cuts
     * @return {Array} an Array with the strings
     */
    splitString(string, size) {
        var re = new RegExp('(.|[\r\n]){1,' + size + '}', 'g');
        return string.match(re);
    }

}