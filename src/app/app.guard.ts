import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AppService } from './app.service';

@Injectable()
export class AppGuard implements CanActivate {

  constructor(private appService: AppService, private router: Router) { }

  canActivate() {
    if (this.appService.isAuthenticated.value) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
