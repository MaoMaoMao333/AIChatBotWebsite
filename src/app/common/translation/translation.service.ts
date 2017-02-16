import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Translation} from './translation'
import { environment } from '../../../environments/environment';
/**
 * Service which manages translations
 */
@Injectable()
export class TranslationService {

    private _url = "";    

    private translation: Translation;

    constructor(private _http: Http) {

        this._url = environment.translation_url;
    }

    getTranslations() {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    getTranslation(id) {
        return this._http.get(this.getTranslationUrl(id))
            .map(res => res.json());
    }

    postTranslation(text: string, algorithmId: number, algorithmName: string) {

        this.translation = new Translation();
        this.translation.originalText = text;
        this.translation.algorithmId = algorithmId;
        this.translation.algorithmName = algorithmName;

        let body = JSON.stringify(this.translation);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });


        return this._http.post(this._url, body, options)
            .map(res => res.json());
    }

    updateTranslation(translation: Translation) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.put(this.getTranslationUrl(translation.id), JSON.stringify(translation), options)
            .map(res => res.json());
    }

    private getTranslationUrl(id) {
        return this._url + id + "/";
    }
}

