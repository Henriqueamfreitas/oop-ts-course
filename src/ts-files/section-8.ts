interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[LOG] ${message}`);
  }
}

function runJob(logger: Logger): void {
  logger.log("Job started");
  logger.log("Job finished");
}

const logger = new ConsoleLogger();
runJob(logger);
'Job started'
'Job finished'