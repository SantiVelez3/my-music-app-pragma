import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  expressUrl = environment.expressServiceUrl;

  redirectLogin(){
    this.http.get(this.expressUrl + "/login");
  }

  refreshSession(){
    this.http.get(this.expressUrl + "/refresh_token");
  }

}
