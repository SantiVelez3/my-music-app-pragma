import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService:AuthService, private tokenService:TokenService, private router:Router, private aRoute:ActivatedRoute) { }
  access_token!:string;
  refresh_token!:string;
  ngOnInit(): void {
    this.aRoute.queryParams.subscribe(params =>{
      this.access_token = params['access_token'];
      this.refresh_token = params['refresh_token'];

      
      this.validateSession();
    })
  }

  validateSession(){
    if(!this.access_token || !this.refresh_token){      
      return false;
    }else{
      this.tokenService.setToken(this.access_token, this.refresh_token);
      this.router.navigate(['home']);
      return true;
    }
  }

}
