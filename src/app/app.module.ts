import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoryPageComponent } from './components/_Pages/category-page/category-page.component';
import { ButtonComponent } from './components/button/button.component';

import { DataViewComponent } from './components/_Category/data-view/data-view.component';
import { ImageViewComponent } from './components/_Category/image-view/image-view.component';



@NgModule({
  declarations: [
    AppComponent,
    // Pages
    CategoryPageComponent,
    // Componenents
    ButtonComponent,
    DataViewComponent,
    ImageViewComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
