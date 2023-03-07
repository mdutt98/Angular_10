import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Get the token from the session
        const token = sessionStorage.getItem('token');

       //const token='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb3VyYXZAZ21haWwuY29tcyIsImV4cCI6MTY3NDYwOTI1OCwiaWF0IjoxNjc0NTIyODU4fQ.Dbo0sqd3WC8duxmIvXBKt8yTGDJVue9rxjWNIPZ6Mu4'
        // If there is a token, add it to the request headers
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(req);
    }
}