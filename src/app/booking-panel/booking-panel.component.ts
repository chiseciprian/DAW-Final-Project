import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../app/auth/auth.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-booking-panel',
  templateUrl: './booking-panel.component.html',
  styleUrls: ['./booking-panel.component.css']
})
export class BookingPanelComponent implements OnInit {

  user: firebase.User;
  book: Observable<any[]>;
  bookRef: AngularFireList<any>;


  constructor(private auth: AuthService, db: AngularFireDatabase) {

    this.bookRef = db.list('Book');

    this.book = this.bookRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

  }

  ngOnInit() {

    this.auth.getUserState()
      .subscribe(user => {
        this.user = user;
      });

  }

  deleteItem(key: string) {
    this.bookRef.remove(key);
  }

}
