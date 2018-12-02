import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConsoleLogService, Options} from "./console-log.service";

export {ConsoleLogService, Options} from './console-log.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [

  ]
})
export class ConsoleLogServiceModule {
  public static forRoot(options: () => Options): ModuleWithProviders {
    return {
      ngModule: ConsoleLogServiceModule,
      providers: [
        { provide: Options, useFactory: options },
        ConsoleLogService
      ]
    };
  }
}
