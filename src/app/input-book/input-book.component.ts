import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-book',
  templateUrl: './input-book.component.html',
  styleUrls: ['./input-book.component.css']
})
export class InputBookComponent implements OnInit {
  bookTitle ="";

  @Output() newBookEvent = new EventEmitter<{title: string}>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddBook(){
    // console.log('from child component: ', this.bookTitle);
    this.newBookEvent.emit({title: this.bookTitle});
    // this.bookTitle = "";
  }
}
