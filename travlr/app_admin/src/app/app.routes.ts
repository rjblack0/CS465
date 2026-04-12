import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip';
import { TripListingComponent } from './trip-listing/trip-listing';
import { EditTripComponent } from './edit-trip/edit-trip';
import { LoginComponent } from './login/login';

export const routes: Routes = [
  { path: '', component: TripListingComponent },
  { path: 'add-trip', component: AddTripComponent },
  { path: 'login' , component: LoginComponent},
  { path: 'edit-trip', component: EditTripComponent }
];
