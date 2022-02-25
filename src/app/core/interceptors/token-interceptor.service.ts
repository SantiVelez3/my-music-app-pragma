import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { RefreshTokenModel } from '../models/refresh-token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private tokenService:TokenService, private authService:AuthService) { }
  refresh_token!:RefreshTokenModel;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    return next.handle(req).pipe(catchError((error:HttpErrorResponse): Observable<any> => {
      console.log(error);
      
      if(error.status === 401){
        this.authService.validateToken();
      }
      return next.handle(req);
    }));
  }
}
