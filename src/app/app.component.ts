import { Component } from '@angular/core';
import { ConsoleLogService } from '../../my-lib/src/console-log-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Console log Service';

  constructor(private log:ConsoleLogService ) {
    this.log.info('Here is a info statement');
    this.log.debug('Here is a info statement');
    this.log.warn('Here is a info statement');
    this.log.error('Here is a info statement');
  }
}
