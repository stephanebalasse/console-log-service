import { ConsoleLogServiceModule } from './console-log-service.module';

describe('ConsoleLogServiceModule', () => {
  let consoleLogServiceModule: ConsoleLogServiceModule;

  beforeEach(() => {
    consoleLogServiceModule = new ConsoleLogServiceModule();
  });

  it('should create an instance', () => {
    expect(consoleLogServiceModule).toBeTruthy();
  });
});
