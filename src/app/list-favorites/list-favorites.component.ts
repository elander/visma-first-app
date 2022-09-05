import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-favorites',
  templateUrl: './list-favorites.component.html',
  styleUrls: ['./list-favorites.component.css']
})
export class ListFavoritesComponent implements OnInit {
  @Input() bookObject = {title: ""};

  constructor() { }

  ngOnInit(): void {
  }

}
