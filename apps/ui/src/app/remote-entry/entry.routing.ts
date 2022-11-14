import { Routes } from "@angular/router";

export const UI_ROUTES: Routes =
[
  {
    path: 'icon-button',
    loadComponent: ()=>
     import('../components/icon-button/icon-button.component').then((c)=>c.IconButtonComponent)
      
  }
]