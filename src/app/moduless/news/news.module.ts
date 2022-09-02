import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsIndexComponent } from './news-index/news-index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { LoaderComponent } from './loader/loader.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    NewsIndexComponent,
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    NewsItemComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    MatSnackBarModule
  ],
  providers: [
    Title
  ],
})
export class NewsModule { }
