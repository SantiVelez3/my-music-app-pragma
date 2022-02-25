import { Component } from '@angular/core';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-log-out-button',
  templateUrl: './log-out-button.component.html',
  styleUrls: ['./log-out-button.component.css']
})
export class LogOutButtonComponent {

  constructor(private tokenService:TokenService) { }

  logOut(){
    return this.tokenService.logOut();
  }

}
