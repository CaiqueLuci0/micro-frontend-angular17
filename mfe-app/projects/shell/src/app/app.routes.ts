import { Routes } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {loadRemoteModule} from "@angular-architects/native-federation";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'notes',
    loadComponent: () =>
      loadRemoteModule('notes', './Component').then(m => m.AppComponent),
  }
];
