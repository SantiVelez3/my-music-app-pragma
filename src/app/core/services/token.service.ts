import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }

  setAccessToken(token:string, refresh:string){
    window.localStorage.setItem('accessToken', token);
    window.localStorage.setItem('refreshToken', refresh);
  }

  logOut(){
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }

}
