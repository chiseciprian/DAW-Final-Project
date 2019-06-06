import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginService } from './auth/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'we-clean';

  user: firebase.User;

  constructor(
    private afAuth: AngularFireAuth,
    private loginService: LoginService) { }


  ngOnInit() {
    this.afAuth.authState
      .subscribe(user => {
        console.log(user);
        this.user = user;
      })

  }
}
