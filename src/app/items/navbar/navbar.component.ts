import { Component } from '@angular/core';
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ButtonComponent
  ],
  template: `

    <div class="liner" >
    <nav>
        <div class="navContainer">
            <div class="tile"> <app-button  type="routingButton" route="home" buttonClass="navButton" (onClick)="handleClick($event)">Home</app-button></div>
            <div class="tile"> <app-button  type="routingButton" route="about" buttonClass="navButton" (onClick)="handleClick($event)">About me</app-button></div>
            <div class="tile"> <app-button  type="routingButton" route="projects" buttonClass="navButton" (onClick)="handleClick($event)">Projects</app-button></div>
            <div class="tile"> <app-button  type="routingButton" route="funstuff" buttonClass="navButton" (onClick)="handleClick($event)">Fun stuff</app-button> </div>
        </div>
    </nav>

    </div>


  `,
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  handleClick(event: Event) {
  }
}
