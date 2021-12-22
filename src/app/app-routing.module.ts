import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryPageComponent } from './components/_Pages/category-page/category-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/category-view', pathMatch: 'full' },
  { path: 'category-view', component: CategoryPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
