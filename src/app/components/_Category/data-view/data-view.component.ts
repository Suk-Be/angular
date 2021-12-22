import { Component, OnInit, Input} from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss']
})
export class DataViewComponent implements OnInit {
  @Input() isDisplayed : boolean = false;
  @Input() imgSrc : string = '';

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) { }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
function forEach(articleslet: any, arg1: boolean) {
  throw new Error('Function not implemented.');
}

