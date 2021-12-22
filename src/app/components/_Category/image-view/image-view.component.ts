import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../../../../services/category.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {
  @Input() isDisplayed : boolean = true;

  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute) { }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }
}
