import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './Routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components Imports (Stesso ragionamento dello using per ciccio sciarpio) */
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/HomePageComponent/home-page.component';
import { LogInComponent } from './Components/LogInComponent/log-in.component';

/* Angular Material Imports (Ang mat è una libreria da importare, per fare roba esteticamente più figa)*/
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SignUpComponent } from './Components/SignUpComponent/log-in.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ProfileComponent } from './Components/ProfileComponent/profile.component';
import { ShopComponent } from './Components/ShopComponent/shop.component';

/* Nelle declarations vengono dichiarati i componenti che vengono utilizzati all'interno dell'applicazione. */
/* In questo caso, i componenti HomePageComponent, FollowComponent, ShareComponent viene utilizzato all'interno del componente AppComponent. */
/* Negli imports vengono dichiarati i pacchetti che andremo ad utilizzare */

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SignUpComponent,
    LogInComponent,
    ProfileComponent,
    ShopComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent, SignUpComponent],
})
export class AppModule {}
