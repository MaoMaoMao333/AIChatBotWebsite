import {AnalysisComponent} from './analysis/analysis.component';
import {EvaluationComponent} from './evaluation/evaluation.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {  path: '', component: AnalysisComponent },
    { path: 'translate', component: AnalysisComponent },
    { path: 'translate/:url', component: AnalysisComponent },
    { path: 'evaluate', component: EvaluationComponent },
    // { path: '/*other', name: 'Other', redirectTo: ['Analysis'] },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);