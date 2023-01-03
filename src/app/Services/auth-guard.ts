import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material/dialog';
import { ShopDialogComponent } from '../Components/ShopComponent/ShopDialogComponent/shop-dialog/shop-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private JwtHelper: JwtHelperService,
    private dialog: MatDialog
  ) {}

  /* Dialog Function */
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(ShopDialogComponent, {
      width: '250px',
      enterAnimationDuration: enterAnimationDuration,
      exitAnimationDuration: exitAnimationDuration,
    });
  }

  /* The function checks if the user is authenticated by checking the local storage looking for the token.
     If the token is not found or the token is expired, the user is redirected to the sign in page.
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem('jwt');
    if (token && !this.JwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      this.openDialog('0.5s', '0.5s');
      this.router.navigate(['/signin']);
      return false;
    }
  }
}
