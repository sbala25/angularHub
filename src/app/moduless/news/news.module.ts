import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsIndexComponent } from './news-index/news-index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsItemComponent } from './news-item/news-item.component';
import {  Title } from '@angular/platform-browser';
import { LoaderComponent } from './loader/loader.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', component: NewsIndexComponent,
    children:[
      { path: '', component: NewsListComponent , data: {categoryKey: ''}},
      { path: 'business', component: NewsListComponent,  data: { categoryKey: 'business'} },
      { path: 'entertainment', component: NewsListComponent, data: {categoryKey: 'entertainment'} },
      { path: 'general', component: NewsListComponent, data: {categoryKey: 'general'} },
      { path: 'health', component: NewsListComponent, data: {categoryKey: 'health'} },
      { path: 'science', component: NewsListComponent, data: {categoryKey: 'science'} },
      { path: 'sports', component: NewsListComponent, data: {categoryKey: 'sports'} },
      { path: 'technology', component: NewsListComponent, data: {categoryKey: 'technology'} },
      { path: '**', redirectTo: '/news' }
    ]
  }
]

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
    MatSnackBarModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    Title
  ]
})
export class NewsModule { }
