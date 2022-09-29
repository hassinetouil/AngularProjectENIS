import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstapp';
  name = 'hassine'
  agenda = [{
    date: "17/12", message:"bloc1",},{
      date: "18/12", message:"bloc2",},]
}
