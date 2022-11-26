/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';

@Component({
  selector: 'test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'test-angular';
 
  public options=['pick me', 'or me', 'not-me']
  constructor(){}
  public  showOptions =()=>{
    return this.options;
  }
}
