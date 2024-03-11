import {Component, Input, Output, EventEmitter, computed} from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {routes} from "../../app.routes";
@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <div
      (click)="handleClick($event)"
      [ngClass]="buttonClass"
      [routerLink]="btnRoute()"
      routerLinkActive="activeRoute"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    `,
  ],
})
export class ButtonComponent {
  @Input() type: 'button' | 'routingButton' = 'button';
  @Input() buttonClass: string = 'btn';
  @Output() onClick = new EventEmitter<Event>();
  //@Input() class:'navButton' | 'btn' = "btn";
  @Input() route:string|undefined;
  isRouter = computed(() => this.type==="routingButton");
  btnRoute = computed(() => {
    if (!this.isRouter()){
      return;
    }
    if (this.route===undefined){
      throw new Error(`The type of the button is :  ${this.type} yet you have no routes set up. Set up a route please`)
    }
    return this.route.toLowerCase();

  })
  handleClick(event:Event){
    this.onClick.emit(event);
    if (this.isRouter()&&this.route){
    }
  }

}
