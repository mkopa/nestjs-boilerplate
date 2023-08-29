import { WinstonModule } from 'nest-winston';
import winston, { createLogger } from 'winston';

const logFormat = (env = process.env) =>
  winston.format.printf(({ level, message, meta }) => {
    const stack = meta && meta.stack ? meta.stack : undefined;

    return JSON.stringify({
      '@timestamp': new Date().toISOString(),
      '@version': 1,
      application: env.APP_NAME,
      environment: env.NODE_ENV,
      host: env.HOST,
      message,
      meta,
      stack,
      severity: level,
      type: 'stdin',
    });
  });

const instance = createLogger({
  level: process.env.LOGGING_LEVEL || 'debug',
  format: winston.format.combine(winston.format.splat(), logFormat()),
  transports: [new winston.transports.Console()],
});

export const logger = WinstonModule.createLogger({
  instance,
});
