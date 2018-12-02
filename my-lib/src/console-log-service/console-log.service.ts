import {Injectable} from '@angular/core';

import {LogLevel} from './log-level.enum'


export class Options {
  logLevel: LogLevel[];
  infoStyle?: string; // Style of the info tile
  debugStyle?: string; // Style of the debug tile
  warningStyle?: string; // Style of the warning tile
  errorStyle?: string; // Style of the error tile
}

const DEFAULT_OPTIONS: Options = {
  logLevel: [LogLevel.Info],
  infoStyle: 'background-color:green; color: white; font-weight:bold;padding:5px',
  debugStyle: 'background-color:blue; color: white; font-weight:bold;padding:5px',
  warningStyle: 'background-color:orange; color: black; font-weight:bold;padding:5px',
  errorStyle: 'background-color:red; color: black; font-weight:bold;padding:5px'
};

/**
 * Service de log
 * Displays the console.log in the browser following the environment
 * With formatting by type
 *
 * @example
 *  this.log.info('info');
 *  this.log.debug(this.metas);
 *  this.log.warning('warn');
 *  this.log.error('error');
 */
@Injectable()
export class ConsoleLogService {

  private _logLevel: LogLevel[] = [];
  private _styleInfo: string;
  private _styleDebug: string;
  private _styleWarning: string;
  private _styleError: string;

  constructor(options: Options) {
    let {logLevel, infoStyle, debugStyle, warningStyle, errorStyle} = Object.assign({}, DEFAULT_OPTIONS, options);
    this._logLevel = logLevel;
    this._styleInfo = infoStyle;
    this._styleDebug = debugStyle;
    this._styleWarning = warningStyle;
    this._styleError = errorStyle;
  }

  /**
   * make a console.log with the message in parameter
   * for environments that can display Info
   *
   *  message
   * file : name of the file where the log console is running
   * row : row number on which the consolelog runs
   */
  public info(message?: any, file?: string, row?: number): void {
    if (this._logLevel.includes(LogLevel.Info)) {
      let numberRow: string = (row) ? row + '' : '';
      let nameFile: string = (file) ? file + ':' + numberRow : '';
      console.log('%cInfo ' + nameFile, this._styleInfo, nameFile, message);
    }
  }

  /**
   * make a console.log with the message in parameter
   * for environments that can display debugs
   *
   * message
   * file : name of the file where the log console is running
   * row : row number on which the consolelog runs
   */
  debug(message?: any, file?: string, row?: number): void {
    if (this._logLevel.includes(LogLevel.Debug)) {
      let numberRow: string = (row) ? row + '' : '';
      let nameFile: string = (file) ? file + ':' + numberRow : '';
      console.log('%cDebug ' + nameFile, this._styleDebug, message);
    }
  }

  /**
   * make a console.log with the message in parameter
   * for environments that can display warning
   *
   *  message
   * file : name of the file where the log console is running
   * row : row number on which the consolelog runs
   */
  warn(message?: any, file?: string, row?: number): void {
    if (this._logLevel.includes(LogLevel.Warning)) {
      let numberRow: string = (row) ? row + '' : '';
      let nameFile: string = (file) ? file + ':' + numberRow : '';
      console.log('%cWarning ' + nameFile, this._styleWarning, message);
    }
  }

  /**
   * make a console.log with the message in parameter
   * for environments that can display error
   *
   * message
   * file : name of the file where the log console is running
   * row : row number on which the consolelog runs
   */
  error(message?: any, file?: string, row?: number): void {
    if (this._logLevel.includes(LogLevel.Error)) {
      let numberRow: string = (row) ? row + '' : '';
      let nameFile: string = (file) ? file + ':' + numberRow : '';
      console.log('%cError ' + nameFile, this._styleError, message);
    }
  }
}

