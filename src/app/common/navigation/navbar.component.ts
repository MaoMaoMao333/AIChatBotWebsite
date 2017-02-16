import {Component, Inject, OnInit} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ThemeService } from '../theme/theme.service';


@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavBarComponent implements OnInit {

    /**
     * Url from user's' input
     */
    url = "";
    private themeNames = new Array();

    constructor(@Inject(DOCUMENT) private _document, private _themeService: ThemeService) {
    }

    ngOnInit(){
        this.themeNames = ThemeService.getThemeNames();
    }

    onChangeTheme(theme: string)
    {
        console.log(theme);
         this._document.getElementById('themeId').setAttribute('href', ThemeService.Themes[theme]);
    }
}