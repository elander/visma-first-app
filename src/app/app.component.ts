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

  addBook(newBook: {title: string}) {
    this.favBooks = this.favBooks.concat(newBook);
    console.log('book added in app component', newBook.title);
  }

  onClick() {
    this.isVisible = !this.isVisible;
    console.log(this.isVisible);
  }
}
