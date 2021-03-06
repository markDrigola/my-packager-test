import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';

import {SecondModule} from '../../second/public_api';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SecondModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
