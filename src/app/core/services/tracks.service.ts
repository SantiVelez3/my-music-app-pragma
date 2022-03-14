import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  constructor(private http:HttpClient, private tokenService:TokenService) { }

  private headers = new HttpHeaders({
    'Accept':'application/json',
    'Content-Type':'application/json',
    'Authorization':" Bearer " + this.tokenService.getAccessToken()
  })

  songsUrl:string = "https://api.spotify.com/v1/me/top/tracks?limit=50&offset=5";
  playlistUrl:string = "https://api.spotify.com/v1/playlists/6uEOlkURNPpbmf3FCzZ4ef?si=1c776b485b8b420a";
  favoritesUrl:string = "https://api.spotify.com/v1/me/tracks?limit=50";

  getSongs(){
    return this.http.get<any>(this.songsUrl, {headers: this.headers});
  }

  getFavorites(){
    return this.http.get<any>(this.favoritesUrl, {headers:this.headers});
  }
}
