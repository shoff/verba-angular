import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpEvent, HttpHandlerFn, HttpRequest, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { Observable } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        loadingInterceptor
      ])
    )]
};
function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn)
  : Observable<HttpEvent<unknown>> {
  throw new Error('Function not implemented.');
}

