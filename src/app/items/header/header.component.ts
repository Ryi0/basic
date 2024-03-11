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
      <div class="glass"></div>
      <app-navbar></app-navbar>

    </header>
  `,
  styles: ``
})
export class HeaderComponent {

}
