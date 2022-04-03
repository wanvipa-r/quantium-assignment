import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../services/login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { 

    }

  ngOnInit(): void {
  }
  login(user:string,pass:string): void {
    if(this.loginService.authen(user,pass))
    {
      this.router.navigate(['portal']);
    }
    else{

    }
  }
}
