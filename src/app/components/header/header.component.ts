import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, private app: AppComponent){}
  navigateToHome() {
    this.router.navigate([''])
    window.scrollTo(0, 0);
    this.app.showHome = true;
    this.app.showLogin = false;
    this.app.showProducts = false;
    this.app.showContact = false;
    this.app.showChangePassword = false;
  }
  navigateToLogin() {
    this.router.navigate(['iniciar-sesion'])
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showLogin = true;
    this.app.showProducts = false;
    this.app.showContact = false;
    this.app.showChangePassword = false;
  }

}
