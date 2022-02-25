import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RefreshTokenModel } from '../models/refresh-token.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private headers = new HttpHeaders({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*'
  });
  
  constructor(private http:HttpClient, private tokenService:TokenService) { }

  refreshToken = this.tokenService.getRefreshToken();

  expressUrl = environment.expressServiceUrl;

  refreshSession(){
    return this.http.get<RefreshTokenModel>(this.expressUrl + "/refresh_token?refresh_token?" + this.refreshToken, {headers: this.headers});
  }

  validateToken(){
    /*if(!this.refreshToken){
      this.tokenService.logOut();
      return false;
    }
    let error = true;
    
    return new Promise<void>((resolve, reject) =>{
      this.refreshSession().subscribe(data =>{
        this.tokenService.setRefreshToken(data);
      });
    })*/
    
  }

}
