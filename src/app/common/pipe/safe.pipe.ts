import {DomSanitizer} from '@angular/platform-browser';
import {Pipe, PipeTransform} from '@angular/core';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {

    constructor(private _domSanitizationService: DomSanitizer) { }

    transform(style) {
        return this._domSanitizationService.bypassSecurityTrustHtml(style);
    }

}