import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/map';

/**
 * Service which manages algorithms
 */
@Injectable()
export class AlgorithmService {

    private _url = "";

    constructor(private _http: Http) {
        this._url = environment.translation_url;
        this._url = "http://127.0.0.1:8000/algorithms/";
    }

    getAlgorithms() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
    
    getAlgorithm(id){
        return this._http.get(this._url + id + "/")
            .map(res => res.json());
    }
}

