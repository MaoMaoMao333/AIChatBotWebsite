import {Injectable} from '@angular/core';

/**
 * Service which manages Themes
 */
@Injectable()
export class ThemeService {

    static Themes = 
    {
        Cosmo:"assets/css/themes/bootstrap.min_cosmo.css", 
        Darkly: "assets/css/themes/bootstrap.min_darkly.css",
        Journal: "assets/css/themes/bootstrap.min_journal.css",
        Paper: "assets/css/themes/bootstrap.min_paper.css",
        Readable: "assets/css/themes/bootstrap.min_readable.css",
        Simplex: "assets/css/themes/bootstrap.min_simplex.css",
        Slate: "assets/css/themes/bootstrap.min_slate.css",
        Superhero: "assets/css/themes/bootstrap.min_superhero.css",
        United: "assets/css/themes/bootstrap.min_united.css",
        Yeti: "assets/css/themes/bootstrap.min_yeti.css"
    };
    
    constructor() {

    }

    /**
     * Return all themes' names
     */
    static getThemeNames(): string[]{

        let names = new Array();

        for(let theme in ThemeService.Themes)
        {
            names.push(theme);
        }
        return names;
    }
}

