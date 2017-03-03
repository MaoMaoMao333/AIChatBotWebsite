import { AlgorithmService } from '../algorithm/algorithm.service';
import { TranslationService } from '../translation/translation.service';
import { Translation } from '../translation/translation';
import {Component, DoCheck, EventEmitter, Inject, Input, Output, OnInit, OnChanges} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

/**
 * Component which represents the side bar containing an input panel
 */
@Component({
    selector: 'input-side',
    templateUrl: 'input-side.component.html',
    styles: [`
   
        .right {
            float: right;    
        }

        .left {
            float: left;    
        }

        .cb {

            margin-left: 10px;
        }
    `]
})
export class InputSideComponent implements OnInit, DoCheck {

    private textInput: string = ""

    private isLoading: boolean = false;

    private isScored: boolean = false;

    private isReload: boolean = false;

    private score: number

    private selectedAlgorithm: string = "algorithm"
    private selectedAlgorithmId: number;

    @Input() suggestedAnswerTextInput: string = "";

    private suggestedAnswerText: string = "";

    @Output() updateTranslatedTextEvent = new EventEmitter();

    @Output() updateLoadingStatusEvent = new EventEmitter();    

    private algorithms;

    private translationResult: Translation;

    constructor( @Inject(DOCUMENT) private _document, private _algorithmService: AlgorithmService, private _translationService: TranslationService) {
    }

    ngOnInit() {

        this._algorithmService.getAlgorithms()
                .subscribe(algorithms => {
                    this.algorithms = algorithms;
                }
                ,
                error => {
                    console.log("Unable to load algorithms")
                }
            );        
    }

    ngDoCheck() {

        if (this.suggestedAnswerText !== this.suggestedAnswerTextInput) {

            this.suggestedAnswerText = this.suggestedAnswerTextInput;
            this.onUpdateSuggestedAnswer(this.suggestedAnswerText);
        }
    }    


    translateText() {

        if(this.selectedAlgorithm != "algorithm")
        {
            this.isLoading = true;
            this.updateLoadingStatusEvent.emit({ status: this.isLoading });

            this._translationService.postTranslation(this.textInput, this.selectedAlgorithmId, this.selectedAlgorithm, this.isReload)
                    .subscribe(translationResult => {

                        console.log(translationResult)

                        this.translationResult = translationResult;   
                        
                        this.updateTranslatedTextEvent.emit({ text: translationResult.translatedText });

                        this.isLoading = false;

                        this.updateLoadingStatusEvent.emit({ status: this.isLoading });

                        this.isReload = false;
                    }
                    ,
                    error => {
                        console.log(error)
                        console.log("Unable to translate the given text.")
                        
                        this.isLoading = false;

                        this.updateLoadingStatusEvent.emit({ status: this.isLoading });
                    }
                );                   
        }
    }

    onChangeAlgorithm(algorithm) {

        this.selectedAlgorithm = algorithm.algorithmName;
        this.selectedAlgorithmId = algorithm.algorithmId;

    }

    onUpdateScore(score: number) {

        this.score = score
        this.isScored = true;

        this.translationResult.score = score;

        this._translationService.updateTranslation(this.translationResult)
                .subscribe(res => {

                    console.log(res)                    
                }
                ,
                error => {
                    console.log(error)
                    console.log("Unable to score this translation.")
                }
            );  
    }

    onUpdateSuggestedAnswer(answer: string) {

        this.translationResult.suggestedAnswer = answer;

        this._translationService.updateTranslation(this.translationResult)
                .subscribe(res => {

                    console.log(res)                    
                }
                ,
                error => {
                    console.log(error)
                    console.log("Unable to submit suggested answer for this translation.")
                }
            );  
    }    

    closeScoreAlert() {

        this.isScored = false;
    }
}