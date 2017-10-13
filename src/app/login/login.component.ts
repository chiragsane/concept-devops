import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'cdo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  onClick = () => {
    this.appService.isAuthenticated = true;
    this.router.navigate(['/home']);
  }

}
