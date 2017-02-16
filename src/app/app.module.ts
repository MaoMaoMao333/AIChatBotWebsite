import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {ColorPickerService} from './common/color-picker/color-picker.service';
import { AppComponent }       from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import {AnalysisComponent} from './analysis/analysis.component';
import {EvaluationComponent} from './evaluation/evaluation.component';

import {LogWebService} from './common/logs/log-web.service';
import {LogFileService} from './common/logs/log-file.service';
import { AlgorithmService } from './common/algorithm/algorithm.service';
import { TranslationService } from './common/translation/translation.service';
import { ThemeService } from './common/theme/theme.service';
import { HttpModule } from '@angular/http';

import {NavBarComponent} from './common/navigation/navbar.component';
import {InputSideComponent} from './common/input-utils/input-side.component';

import {SpinnerComponent} from './common/spinner/spinner.component';

import {DisplayResultComponent} from './display-result/display-result.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        AnalysisComponent,
        EvaluationComponent,
        NavBarComponent,
        InputSideComponent,
        SpinnerComponent,
        DisplayResultComponent        
    ],
    providers: [
        appRoutingProviders,
        LogWebService,
        LogFileService,
        AlgorithmService,
        TranslationService,
        ThemeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}