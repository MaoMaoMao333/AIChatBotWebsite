import {Injectable} from '@angular/core';
import {Log} from './log';
import {LogFindable} from './log-findable';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



/**
 * Class that gets log from file system
 */
@Injectable()
export class LogFileService implements LogFindable {


    /**
     * {@inheritDoc}
     */
    getLog(url: string) {
        return new Observable<string>();
    }
}

