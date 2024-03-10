import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent
  ],
  template: `
    <header>
      <app-navbar></app-navbar>
      <hr>
    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
