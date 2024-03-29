import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FunStuffComponent} from "./fun-stuff/fun-stuff.component";
import {AboutComponent} from "./about/about.component";
import {ProjectsComponent} from "./projects/projects.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'funstuff', component:FunStuffComponent},
  {path:'about', component:AboutComponent},
  {path:'projects', component:ProjectsComponent},
  { path: '**', component: PageNotFoundComponent },
];
