import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {

  isAuthenticated = new BehaviorSubject(false);

  constructor() { }

}
