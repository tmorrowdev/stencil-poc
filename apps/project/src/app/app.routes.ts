import { loadRemoteModule } from "@angular-architects/module-federation";
import { Routes } from "@angular/router";
import { AppComponent } from "./app.component";

        export const routes: Routes = [
            {
              path: '',
              component: AppComponent,
              pathMatch: 'full'
            },
            {
              path: 'booking',
              loadChildren: () => 
                loadRemoteModule({
                  type: 'module',
                  remoteEntry: 'http://localhost:4400/remoteEntry.js',
                  exposedModule: './routes'
                })
                .then(m => m.UI_ROUTES)
        
                //import('mfe1/routes').then(m => m.MFE1_ROUTES)
            },
            {
              path: 'icon-component',
              loadComponent: () => 
                loadRemoteModule({
                  type: 'module',
                  remoteEntry: 'http://localhost:4400/remoteEntry.js',
                  exposedModule: './Component'
                })
                .then(m => m.IconButtonComponent)
            }
        
            // DO NOT insert routes after this one.
            // { path:'**', ...} needs to be the LAST one.
        
        ];