import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConsoleLogServiceModule, LogLevel, Options} from './console-log-service';

export function ConsoleLogOptions(): Options {
    return {
        logLevel: [LogLevel.Warning, LogLevel.Error,LogLevel.Info,LogLevel.Debug],
        infoStyle: 'background-color:green; color: white; font-weight:bold;padding:5px',
        debugStyle: 'background-color:blue; color: white; font-weight:bold;padding:5px',
        warningStyle: 'background-color:orange; color: black; font-weight:bold;padding:5px',
        errorStyle: 'background-color:red; color: black; font-weight:bold;padding:5px'
    };
}

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ConsoleLogServiceModule.forRoot(ConsoleLogOptions)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
