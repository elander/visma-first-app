import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = true;
  title = 'visma-first-app';
  favBooks = [
    {title: "Refactoring"},
    {title: "Hero with a thousand faces"},
    {title: "Thinkertoys"},
  ];


  onClick() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
