import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  private headers = new HttpHeaders({
    'Authorization':"Bearer " + this.tokenService.getAccessToken()
  })

  getFavorites(){
    
  }
}
