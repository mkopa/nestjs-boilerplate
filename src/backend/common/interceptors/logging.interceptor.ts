import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { catchError, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(private readonly logger: Logger) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const { originalUrl, method, params, query, body, headers } = request;

    this.logger.log(
      JSON.stringify({
        originalUrl,
        method,
        headers,
        params,
        query,
        body,
      }),
    );

    return next.handle().pipe(
      tap((data) =>
        this.logger.log(
          JSON.stringify({
            statusCode,
            method,
            originalUrl,
            params,
            query,
            body,
            headers,
            data,
          }),
        ),
      ),
      catchError((err) => {
        const { message: error, status, stack } = err;
        const errorMessage = {
          type: 'error',
          method,
          originalUrl,
          params,
          query,
          body,
          headers,
          data: { error, status, stack },
        };
        this.logger.log(JSON.stringify(errorMessage));

        return throwError(() => err);
      }),
    );
  }
}
