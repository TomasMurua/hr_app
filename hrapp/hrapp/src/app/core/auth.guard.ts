import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storage: Storage, private router: Router) {}

  canActivate(): Promise<boolean> {
    return this.storage.get('isLogged').then((val) => {
      if (val) {
        return true;
      }
      return this.router.createUrlTree(['/login']);
    });
  }
}
