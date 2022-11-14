import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { NgxFontAwesomeModule } from 'ngx-font-awesome';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'test-icon-button',
  standalone: true,
  imports: [CommonModule, RouterModule,MatButtonModule, NgxFontAwesomeModule],
  template: `<button matButton class="mat-button mat-button-text" (onclick)="popover()"><ngx-fa name="info" [animation]="true" size="lg"></ngx-fa></button>`,
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconButtonComponent {
  visible = false;
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-native
  click!: EventEmitter<boolean>;

popover(){
  this.visible= !this.visible;
  this.click.emit(true);
  console.log('this icon was clicked');
}
}

