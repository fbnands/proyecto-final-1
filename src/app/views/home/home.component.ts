import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private app: AppComponent){}
  navigateToListOfProducts() {
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showProducts = true;
  }
  navigateToContact() {
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showProducts = false;
    this.app.showContact = true;
  }
  navigateToLogin() {
    window.scrollTo(0, 0);
    this.app.showHome = false;
    this.app.showProducts = false;
    this.app.showLogin = true;
  }
  ngOnInit() {
    this.router.navigate(['/'])
    this.app.showHome = true;
    this.app.showLogin = false;
    this.app.showProducts = false;
  }

}
