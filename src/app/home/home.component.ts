import { Component } from '@angular/core';
import {ButtonComponent} from "../items/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  template: `
    <h1>
      home works!
    </h1>
    <app-button (onClick)="handleClick($event)" buttonClass="btn-success">
      I'm a butt
    </app-button>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  handleClick(event: Event) {
    console.log('Button clicked!', event);
    // Handle button click logic here
  }
}
