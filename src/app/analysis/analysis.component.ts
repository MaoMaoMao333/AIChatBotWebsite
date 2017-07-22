import {ActivatedRoute} from '@angular/router';
import {Component, Inject, OnInit} from '@angular/core';
import {InputSideComponent} from '../common/input-utils/input-side.component';

import {SpinnerComponent} from '../common/spinner/spinner.component';

import {DisplayResultComponent} from '../display-result/display-result.component';

@Component({
    selector: 'analysis',
    template: `
        <div class="row">
            <div class="col-md-12">
                <input-side [suggestedAnswerTextInput]="suggestedAnswer" (updateTranslatedTextEvent)="updateTranslatedText($event)" (updateLoadingStatusEvent)="updateLoadingStatus($event)"></input-side>
            </div>
        </div>
        <div class="row">    
            <div class="col-md-12">
                <display-result [urlInput]="url" [translatedTextInput]="translatedTextInput" [loadingStatusInput]="loadingStatusInput" (updateSuggestedAnswerTextEvent)="updateSuggestedAnswer($event)"></display-result>
            </div>
        </div>
    `
})
export class AnalysisComponent implements OnInit {
    private url: string = "";
    private translatedTextInput: string = "";
    private loadingStatusInput: boolean;
    private suggestedAnswer: string = "";

    constructor(private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this._activatedRoute.params.subscribe(params => this.url = params['url']);
    }

    /**
     * From InputSideComponent to DisplayResultComponent
     */
    updateTranslatedText($event) {
        this.translatedTextInput = $event.text
    }

    /**
     * From InputSideComponent to DisplayResultComponent
     */
    updateLoadingStatus($event) {
        this.loadingStatusInput = $event.status
    }    

    /**
     * From DisplayResultComponent to InputSideComponent
     */
    updateSuggestedAnswer($event) {
        this.suggestedAnswer = $event.suggestedAnswerTextInput
    }      
}