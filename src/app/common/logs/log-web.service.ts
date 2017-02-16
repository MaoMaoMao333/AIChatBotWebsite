import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Log} from './log';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



/**
 * Class that gets log from web
 */
@Injectable()
export class LogWebService {

    private log: Log;

    constructor(private _http: Http) {

    }

    /**
     * @param url which specifies the location of the log desired
     * @return the log which is desired
     */
    getLogBy(url: string): Observable<string> {
        return this._http.get(url).map(res => res.text());
    }

    getLog(): Log{

        return this.log;
    }

    setLog(log: Log)
    {
        this.log = log;
    }
}

