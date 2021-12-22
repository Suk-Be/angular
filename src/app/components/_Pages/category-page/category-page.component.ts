import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  shown: boolean = true;
  notShown: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  togglePageContent() {
    this.shown = !this.shown;
    this.notShown = !this.notShown;
  }
}
