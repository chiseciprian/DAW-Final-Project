import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/auth/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.css']
})
export class HeaderContainerComponent implements OnInit {

  user: firebase.User;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });

  }

}
