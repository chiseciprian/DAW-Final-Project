import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  user: firebase.User;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });
  }

}
