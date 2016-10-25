import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    
    template: `
    <h1 class="title">Angular Router</h1>
    <a routerLink="home" routerLinkActive="active">Home</a>
    <a [routerLink]="['/about', '123']" routerLinkActive="active">About</a>
    <router-outlet></router-outlet>

    `
     

})
export class AppComponent {

}
