import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule, MatSortModule, MatPaginatorModule } from '@angular/material';
import { RouterModule } from '@angular/router';





import { DataTableModule } from 'angular7-data-table';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { BookingFlowComponent } from './booking-flow/booking-flow.component';
import { HomeCleaningComponent } from './home-cleaning/home-cleaning.component';
import { OfficeCleaningComponent } from './office-cleaning/office-cleaning.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeloginComponent } from './auth/homelogin/homelogin.component';
import { ValidBookComponent } from './valid-book/valid-book.component';
import { InvalidBookComponent } from './invalid-book/invalid-book.component';
import { BookingPanelComponent } from './booking-panel/booking-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderContainerComponent,
    BookingFlowComponent,
    HomeCleaningComponent,
    OfficeCleaningComponent,
    LoginComponent,
    RegistrationComponent,
    HomeloginComponent,
    ValidBookComponent,
    InvalidBookComponent,
    BookingPanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTableModule,
    MatInputModule,

    MatSnackBarModule,
    MatSortModule,
    RouterModule,

    MatPaginatorModule,
    MatRadioModule,
    MatMenuModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    DataTableModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatCardModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OfficeCleaningComponent]
})
export class AppModule { }
