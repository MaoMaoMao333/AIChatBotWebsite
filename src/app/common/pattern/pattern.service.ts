import {Injectable} from '@angular/core';
import {Pattern} from './pattern';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


/**
 * Service which persists existing patterns
 */
@Injectable()
export class PatternService {

    private patterns: Pattern[];
    private isInit: boolean = false;

    constructor() {

    }

    getPatterns(): Pattern[] {

        return this.patterns
    }

    setPatterns(patterns: Pattern[]) {
        this.isInit = true;
        this.patterns = patterns;
    }

    isInitialized(): boolean {
        return this.isInit
    }


}

