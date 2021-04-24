import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'soccerapp';
  Home =false;
  Myfollowed = false;
  Stats = false;
  
  disable(): void {
    this.Home = false;
    this.Myfollowed = false;
    this.Stats=false;
  }
}
