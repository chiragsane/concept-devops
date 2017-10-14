import { Component } from '@angular/core';

@Component({
  selector: 'cdo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;
  toggleDarkTheme = () => {
    this.darkTheme = !this.darkTheme;
  }
}
