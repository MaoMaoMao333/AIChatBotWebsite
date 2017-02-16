import {Observable} from 'rxjs/Observable';
/**
 * Interface that defines the operations when searching logs
 */
export interface LogFindable {

    /**
     * Get log from the specified url
     */
    getLog(url: string): Observable<string>;

}