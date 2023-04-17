import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivingLicenceVerificationComponent } from './modules/driving-licence-verification/driving-licence-verification.component';
import { AadharVerificationComponent } from './modules/aadhar-verification/aadhar-verification.component';
import { PancardVerificationComponent } from './modules/pancard-verification/pancard-verification.component';
import { GstVerificationComponent } from './modules/gst-verification/gst-verification.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { GetStartedComponent } from './modules/get-started/get-started.component';
import { TopNavbarComponent } from './modules/top-navbar/top-navbar.component';

const routes: Routes = [
  {path: 'dl', component: DrivingLicenceVerificationComponent},
  {path: 'gst', component: GstVerificationComponent},
  {path: 'aadhar', component: AadharVerificationComponent},
  {path: 'pan', component: PancardVerificationComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'get-started', component: GetStartedComponent},
  {path: 'top-navbar', component: TopNavbarComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
