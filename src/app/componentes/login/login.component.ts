import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    usuario :"",
    pass: ""
  }

  constructor(private acceso: LoginService) { }

  ngOnInit(): void {
  }
validar(){
  if (this.user.usuario !=""){
    console.log(this.acceso.login(this.user));
  }
}
}
