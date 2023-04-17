import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AadharVerificationComponent } from './modules/aadhar-verification/aadhar-verification.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { GetStartedComponent } from './modules/get-started/get-started.component';
import { HttpClientModule } from '@angular/common/http';
import { PancardVerificationComponent } from './modules/pancard-verification/pancard-verification.component';
import { GstVerificationComponent } from './modules/gst-verification/gst-verification.component';
import { DrivingLicenceVerificationComponent } from './modules/driving-licence-verification/driving-licence-verification.component';
import { TopNavbarComponent } from './modules/top-navbar/top-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AadharVerificationComponent,
    ProfileComponent,
    GetStartedComponent,
    PancardVerificationComponent,
    GstVerificationComponent,
    DrivingLicenceVerificationComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
