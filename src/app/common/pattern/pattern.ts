import {PatternResult} from './pattern-result';

export class Pattern {
    isActive: boolean;
    expression: string;
    patternResults: PatternResult[] = new Array();
}