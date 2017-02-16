import {Component, Inject, OnInit} from '@angular/core';
import {HttpModule} from '@angular/http';
import {NavBarComponent} from './common/navigation/navbar.component';


@Component({
    selector: 'main-app',
    template: `
        <navbar></navbar>    
        <div class="center-main">

        <router-outlet></router-outlet>

      </div>

    `,
    styles: [`
    .center-main {
    margin: auto;
    width: 98%;
}
    `],
    providers: [HttpModule]

})
export class AppComponent {


    constructor() {

    }

}