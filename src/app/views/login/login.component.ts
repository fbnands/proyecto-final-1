import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Login } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: Login = {
    email: "",
    password: "",
  }
  
  isError: boolean = false;
  errorMessage: string = "";

  constructor(private authService: AuthService, private router: Router, private app: AppComponent){}
  navigateToChangePassword() {
    this.router.navigate(['/cambiar-contrasena'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showLogin = false;
    this.app.showProducts = false;
    this.app.showContact = false;
    this.app.showChangePassword = true;
  }


  login(){
    this.authService.login(this.credentials).subscribe(
      (data: { code?: number }) =>{
        if(data.code  === 404){
          this.isError = true;
          this.errorMessage = "Credenciales no válidas";
        }else{
          this.isError = false;
          this.router.navigate(['contacto']);
          window.scrollTo(0, 0);
          this.app.showHome = false;
          this.app.showLogin = false;
          this.app.showProducts = false;
          this.app.showContact = true;
          this.app.showChangePassword = false;
        }
      },
      (error) => {
        this.isError = true;
        this.errorMessage = "Correo o contraseña no es correcto";
        console.error(error);
      }
    )
  }

}
