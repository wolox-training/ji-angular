import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const localStorageService = this.injector.get(LocalStorageService);
    const token: any = localStorageService.getValue('user');
    if (token && token.access_token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token.access_token}`
        }
      });
      return next.handle(request);
    }
  }
}
