# console-log-service


Simple logging facade for Angular 7 supporting build-time environment specific options and, most importantly, AOT.
Use it as-is, or as a base to build out your own logging needs.

## Installation

To install this library, run:

```bash
$ npm install console-log-service --save
```

You can configure the logger via the module's `forRoot` function by passing a function that produces an `Options` object.
Reasoning for this is so that you can have environment specific options, IE those that rely on something like Webpack defines
or some other mechanism that injects globals into your code at build time, and still be ok with Angular's AOT compiler.

The code is heavily inspired by other loggers for Angular, but this one is packaged properly according to the Angular
guidelines and works with AOT.

Import and configure it:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module and model classes.
import { ConsoleLogServiceModule, Options, LogLevel } from consoleLogService;

export function ConsoleLogOptions(): Options {
  if (ENV === 'production') {
    return { logLevel: [LogLevel.Warning,LogLevel.Error],
             infoStyle: 'background-color:green; color: white; font-weight:bold;padding:5px',
             debugStyle: 'background-color:blue; color: white; font-weight:bold;padding:5px',
             warningStyle: 'background-color:orange; color: black; font-weight:bold;padding:5px',
             errorStyle: 'background-color:red; color: black; font-weight:bold;padding:5px'
    };
  }
  if (ENV === 'development') {
    return { logLevel: [LogLevel.Info,LogLevel.Debug,LogLevel.Warning,LogLevel.Error] };
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ConsoleLogServiceModule.forRoot(ConsoleLogOptions),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Use it:

```typescript
import { Injectable } from '@angular/core';
import { ConsoleLogService } from 'console-log-service.';

@Injectable()
export class MyService {

  constructor(
    private log: ConsoleLogService
  ) { }

  private someMethod() {
    this.log.info('Here is a info statement');
    this.log.debug('Here is a debug statement');
    this.log.warn('Here is a warn statement');
    this.log.error('Here is a error statement');
  }
}
```

## License

Do whatever you want, it's like 15 lines of code.

# Result
![alt text][logo]

[logo]:https://github.com/stephanebalasse/console-log-service/blob/master/src/assets/img/result.png "Example"
