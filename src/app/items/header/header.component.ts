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
      <div class="HrWrap">
        <div class="glass">
        </div>
    </div>

<!--    <div class="clipTest"></div>-->
<!--      <h1>Test</h1>-->
<!--      <div class="burgerMenuButtonWrap">-->
<!--        <app-button (click)="toggleNavbar()">-->
<!--          <span *ngIf="!showNavbar()">&#9776;</span>-->
<!--          <span *ngIf="showNavbar()">&#10005;</span>-->
<!--        </app-button>-->
<!--      </div>-->
      <div class="menuOpener">
      <div class="burgerMenuButtonWrap">
        <app-button (click)="toggleNavbar()">
          <span *ngIf="!showNavbar()">&#9776;</span>
          <span *ngIf="showNavbar()">&#10005;</span>
        </app-button>
      </div>
      </div>
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
