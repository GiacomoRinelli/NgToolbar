import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './Services/auth-guard';

/* Components Imports */
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/HomePageComponent/home-page.component';
import { ProfileComponent } from './Components/ProfileComponent/profile.component';
import { ShopComponent } from './Components/ShopComponent/shop.component';
import { SignInComponent } from './Components/SignInComponent/sign-in.component';
import { GlobalTypesComponent } from './GlobalTypes/global-types.component';
import { SidenavComponent } from './Components/SidenavComponent/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SignUpComponent } from './Components/SignUpComponent/sign-up-component.component';

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
import { HeaderComponent } from './Components/HeaderComponent/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { SignInDialogComponent } from './Components/SignInComponent/SignInDialogComponent/sign-in-dialog/sign-in-dialog.component';
import { RouterModule } from '@angular/router';
import { ShopDialogComponent } from './Components/ShopComponent/ShopDialogComponent/shop-dialog/shop-dialog.component';

/* Token function for authorization */
export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    ShopComponent,
    GlobalTypesComponent,
    SidenavComponent,
    HeaderComponent,
    SignInDialogComponent,
    ShopDialogComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
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
    MatSidenavModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
      { path: 'signin', component: SignInComponent },
      { path: 'signup', component: SignUpComponent },
    ]),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7233'],
        disallowedRoutes: [],
      },
    }),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
