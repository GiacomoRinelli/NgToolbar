import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

/* Components Imports */
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/HomePageComponent/home-page.component';
import { ProfileComponent } from './Components/ProfileComponent/profile.component';
import { ShopComponent } from './Components/ShopComponent/shop.component';
import { SignInComponent } from './Components/SignInComponent/sign-in.component';
import { GlobalTypesComponent } from './GlobalTypes/global-types.component';

/* Angular Material Imports */
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SignUpComponent } from './Components/SignUpComponent/sign-up-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    ShopComponent,
    GlobalTypesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDatepickerModule,
    MatProgressBarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent, SignUpComponent],
})
export class AppModule {}
