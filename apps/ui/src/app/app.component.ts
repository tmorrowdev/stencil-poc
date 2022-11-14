import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'test-root',
  standalone:true,
  template: `<button matButton class="mat-button mat-button-primary" (click)="load()"></button>
  <ng-container #placeholder></ng-container>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatButtonModule, RouterModule]
})
export class AppComponent {
  @ViewChild('placeholder', { read: ViewContainerRef }) placeholder!: ViewContainerRef;

  async load(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4400/remoteEntry.js',
      exposedModule: './Component'
    });
    
     this.placeholder.createComponent(m.IconButtonComponent);
    // const compInstance = ref.instance;
}
}