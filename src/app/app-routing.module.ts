import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivingLicenceVerificationComponent } from './modules/driving-licence-verification/driving-licence-verification.component';
import { AadharVerificationComponent } from './modules/aadhar-verification/aadhar-verification.component';
import { PancardVerificationComponent } from './modules/pancard-verification/pancard-verification.component';
import { GstVerificationComponent } from './modules/gst-verification/gst-verification.component';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [
  {path: 'driving-li', component: DrivingLicenceVerificationComponent},
  {path: 'gst', component: GstVerificationComponent},
  {path: 'aadhar', component: AadharVerificationComponent},
  {path: 'pan', component: PancardVerificationComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
