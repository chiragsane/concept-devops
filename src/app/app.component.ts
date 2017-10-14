import { Component } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'cdo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;
  constructor(private overlayContainer: OverlayContainer) { }

  toggleDarkTheme = () => {
    this.darkTheme = !this.darkTheme;
    this.darkTheme ?
      this.overlayContainer.getContainerElement().classList.add('unicorn-dark-theme')
      : this.overlayContainer.getContainerElement().classList.remove('unicorn-dark-theme')
  }
}
