import { Component } from '@angular/core';
import {   RouterLink,
  RouterLinkActive,
  RouterOutlet, } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./items/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolioperso';
}
