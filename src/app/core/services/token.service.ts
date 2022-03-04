import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  setToken(token:string, refresh:string){
    window.sessionStorage.setItem('accessToken', token);
    window.sessionStorage.setItem('refreshToken', refresh);
  }

  logOut(){
    window.sessionStorage.clear();
    this.router.navigate(['/auth']);
  }

  getAccessToken(){
    return window.sessionStorage.getItem('accessToken');
  }

  getRefreshToken(){
    return window.sessionStorage.getItem('refreshToken');
  }

  setRefreshToken(refresh:string){
    window.sessionStorage.setItem('refreshToken', refresh);
  }

  isLogged(){
    return this.getAccessToken() != null;
  }

}
