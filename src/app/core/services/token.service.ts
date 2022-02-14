import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RefreshTokenModel } from '../models/refresh-token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  setToken(token:string, refresh:string){
    window.localStorage.setItem('accessToken', token);
    window.localStorage.setItem('refreshToken', refresh);
  }

  logOut(){
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }

  getAccessToken(){
    return window.localStorage.getItem('accessToken');
  }

  getRefreshToken(){
    return window.localStorage.getItem('refreshToken');
  }

  setRefreshToken(refresh:RefreshTokenModel){
    window.localStorage.setItem('refreshToken', refresh.refresh_token);
  }

}
