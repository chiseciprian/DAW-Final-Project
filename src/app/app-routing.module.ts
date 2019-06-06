import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BookingFlowComponent } from './booking-flow/booking-flow.component';
import { HomeCleaningComponent } from './home-cleaning/home-cleaning.component';
import { OfficeCleaningComponent } from './office-cleaning/office-cleaning.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeloginComponent } from './auth/homelogin/homelogin.component';
import { InvalidBookComponent } from './invalid-book/invalid-book.component';
import { ValidBookComponent } from './valid-book/valid-book.component';
import { BookingPanelComponent } from './booking-panel/booking-panel.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booking-flow', component: BookingFlowComponent },
  { path: 'home-cleaning', component: HomeCleaningComponent },
  { path: 'office-cleaning', component: OfficeCleaningComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeloginComponent },
  { path: 'invalid-book', component: InvalidBookComponent },
  { path: 'valid-book', component: ValidBookComponent },
  { path: 'booking-panel', component: BookingPanelComponent },
  { path: 'lg', redirectTo: '/booking-flow', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
