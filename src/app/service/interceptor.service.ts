import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor() { }

  intercept( req: HttpRequest<any>,
             next:HttpHandler):Observable<HttpEvent<any>> {

    console.log("paso por el interceptor");
    return next.handle(req);

//this.DBStore = req.clone({

//})
}

}
