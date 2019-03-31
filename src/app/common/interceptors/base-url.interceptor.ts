import { HttpInterceptor, HttpEvent, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.prod";

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
        const url = environment.production ?
            '{{YOUR_PRODUCTION_URL}}' : window.location.origin;
        req = req.clone({
            url: url + req.url
        });
        return next.handle(req);
    }
}