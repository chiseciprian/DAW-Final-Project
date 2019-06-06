import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/auth/auth.service';
import { Router } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material';




@Component({
  selector: 'app-booking-flow',
  templateUrl: './booking-flow.component.html',
  styleUrls: ['./booking-flow.component.css']
})
export class BookingFlowComponent implements OnInit {

  radio1 = new FormControl('', [Validators.required]);
  radio2 = new FormControl('', [Validators.required]);
  radio3 = new FormControl('', [Validators.required]);
  radio4 = new FormControl('', [Validators.required]);
  radio5 = new FormControl('', [Validators.required]);
  adress = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required]);

  city = '';
  bedroom = '';
  bathroom = '';
  cleanType = '';
  cleanerSelect = '';
  adres = '';
  phon = '';
  mail = '';

  form: FormGroup;

  copyKey;
  copyId;
  copyName;
  copyImageSrc;
  copyLocation;



  location = '';
  user: firebase.User;
  cleaner: Observable<any[]>;
  cleanerRef: AngularFireList<any>;
  book: Observable<any[]>;
  bookRef: AngularFireList<any>;


  constructor(private snackBar: MatSnackBar, private auth: AuthService, fb: FormBuilder,
    private router: Router, db: AngularFireDatabase) {

    this.bookRef = db.list('Book');

    this.book = this.bookRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );

    this.cleanerRef = db.list('Cleaner');

    this.cleaner = this.cleanerRef.snapshotChanges().pipe(
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

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.auth.logout();
  }

  register() {
    this.router.navigate(['/register']);
  }

  addItem(Id: string, Name: string, ImageSrc: string, Location: string) {
    this.cleanerRef.push({ id: Id, name: Name, imageSrc: ImageSrc, location: Location });
  }

  updateItem(key: string, Id: string, Name: string, ImageSrc: string, Location: string) {
    this.cleanerRef.update(key, { id: Id, name: Name, imageSrc: ImageSrc, location: Location });
  }

  deleteItem(key: string) {
    this.cleanerRef.remove(key);
  }

  takeData(key: string, Id: string, Name: string, ImageSrc: string, Location: string) {
    this.copyKey = key;
    this.copyId = Id;
    this.copyName = Name;
    this.copyImageSrc = ImageSrc;
    this.copyLocation = Location;

  }

  press1() {
    this.location = 'Oradea';
  }

  press2() {
    this.location = 'Rome';
  }

  press3() {
    this.location = 'Bucharest';
  }

  adressErrorMessage() {
    return this.adress.hasError('required') ? 'You must enter a value' :
      this.adress.hasError('minlength') ? 'The text should have at least 3 caracters' :
        '';
  }

  apartamentErrorMessage() {
    return this.phone.hasError('required') ? 'You must enter a value' :
      this.phone.hasError('minlength') ? 'The text should have at least 3 caracters' :
        '';
  }

  postalcodeErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('minlength') ? 'The text should have at least 3 caracters' :
        '';
  }


  sendMessage(Radio1: string, Radio2: string, Radio3: string, Radio4: string, Radio5: string, Adress: string, Phone: string,
    Email: string) {
    this.bookRef.push({
      city: Radio1, bedroom: Radio2, bathroom: Radio3,
      cleanType: Radio4, cleanerSelect: Radio5, adres: Adress, phon: Phone, mail: Email
    });
  }

  clickBtn() {
    if (this.emailChecker()) {
      this.sendMessage(this.city, this.bedroom, this.bathroom, this.cleanType, this.cleanerSelect, this.adres, this.phon, this.mail);

    }
    this.Office();

  }

  emailChecker() {
    if (this.adress.invalid || this.phone.invalid || this.email.invalid || this.radio5.invalid ||
      this.radio4.invalid || this.radio3.invalid || this.radio2.invalid || this.radio1.invalid) {
      return false;
    } else {
      return true;
    }
  }

  Office() {
    if (!this.emailChecker()) {
      this.router.navigate(['invalid-book']);
    } else {
      this.router.navigate(['valid-book']);
    }
  }




}
