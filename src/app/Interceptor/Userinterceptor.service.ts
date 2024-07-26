import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptorService implements HttpInterceptor {
  private user: string = "majo.castro";
  private name: string = "user-request";

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clone = req.clone({
      headers: req.headers.append(this.name, this.user)
    });
    return next.handle(clone);
  }
}

  