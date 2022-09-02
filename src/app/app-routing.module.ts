import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { NewsIndexComponent } from './moduless/news/news-index/news-index.component';
import { NewsListComponent } from './moduless/news/news-list/news-list.component';
import { WeatherIndexComponent } from './moduless/weather/weather-index/weather-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsIndexComponent, children: [
    { path: '', component: NewsListComponent , data: {categoryKey: ''}},
    { path: 'business', component: NewsListComponent,  data: { categoryKey: 'business'} },
    { path: 'entertainment', component: NewsListComponent, data: {categoryKey: 'entertainment'} },
    { path: 'general', component: NewsListComponent, data: {categoryKey: 'general'} },
    { path: 'health', component: NewsListComponent, data: {categoryKey: 'health'} },
    { path: 'science', component: NewsListComponent, data: {categoryKey: 'science'} },
    { path: 'sports', component: NewsListComponent, data: {categoryKey: 'sports'} },
    { path: 'technology', component: NewsListComponent, data: {categoryKey: 'technology'} },
    { path: '**', redirectTo: '/news' }
  ]},
  { path: 'weather', component: WeatherIndexComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
