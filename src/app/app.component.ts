import { Component } from '@angular/core';
import { Home } from './pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home],
  styleUrl: './app.component.css',
  template: `<app-home />`

})
export class AppComponent {

}
