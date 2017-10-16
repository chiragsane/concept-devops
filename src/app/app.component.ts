import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppService } from './app.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'cdo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  darkTheme = false;
  showToolbar = new BehaviorSubject(false);
  constructor(private appService: AppService, private overlayContainer: OverlayContainer) { }

  ngOnInit() {
    this.showToolbar = this.appService.isAuthenticated;
  }
  toggleDarkTheme = () => {
    this.darkTheme = !this.darkTheme;
    this.darkTheme ?
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme')
      : this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme')
  }
}
