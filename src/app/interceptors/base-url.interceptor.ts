import { HttpInterceptor, HttpEvent, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const url = '/assets/mock/data.json';
    req = req.clone({
      url: url //+ req.url
    });
    return next.handle(req);
  }
}