import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= {
    nombre: "",
    pass: ""
  }
  constructor(private acceso: LoginService) { }

  ngOnInit(): void {
  }


validar(){
  if (this.user.nombre!= ""){
    //this.acceso.Login (this.user).subscribe((res:any)=>{
    //  console.Log(res);
    //});
    console.log(this.acceso.login(this.user));
  }
}
}
