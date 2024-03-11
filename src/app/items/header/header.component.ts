import {Component, signal} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {NgIf} from "@angular/common";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NavbarComponent,
    NgIf,
    ButtonComponent
  ],
  template: `

    <header>
      <app-navbar *ngIf="showNavbar()"></app-navbar>
      <button (click)="toggleNavbar()">
        <span *ngIf="!showNavbar()">&#9776;</span>
        <span *ngIf="showNavbar()">&#10005;</span>
      </button>

    </header>

  `,
  styles: ``
})
export class HeaderComponent {
  showNavbar= signal(false);

  toggleNavbar() {
    this.showNavbar.update(value => !value) ;
  }
}
