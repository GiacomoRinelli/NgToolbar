import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Importo i componenti che voglio utilizzare all'interno del mio sistema di routing */
import { HomePageComponent } from '../Components/HomePageComponent/home-page.component';
import { ProfileComponent } from '../Components/ProfileComponent/profile.component';
import { ShopComponent } from '../Components/ShopComponent/shop.component';
import { SignInComponent } from '../Components/SignInComponent/sign-in.component';
import { SignUpComponent } from '../Components/SignUpComponent/sign-up-component.component';

/* path: tutto ciò che viene dopo lo slash nello url. Una volta che mi trovo su quella specifica url
   viene renderizzato esattamente il contenuto del componente corrispondente.
   Se mi trovo su /home , avrò le informazioni riguardanti il componente HomePageComponent */

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
];

/* Roba abbastanza standard da impostare */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
