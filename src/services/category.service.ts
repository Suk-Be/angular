import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/components/_Category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  static getCategories() {
    throw new Error('Method not implemented.');
  }
  private categoriesUrl = 'https://flapotest.blob.core.windows.net/test/ProductData.json';  // URL to web api
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoriesUrl);
  }

}
