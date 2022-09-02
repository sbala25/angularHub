import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './main/home/home.component';
import { PageNotFoundComponent } from './main/page-not-found/page-not-found.component';
import { NewsIndexComponent } from './moduless/news/news-index/news-index.component';
import { NewsListComponent } from './moduless/news/news-list/news-list.component';
import { WeatherIndexComponent } from './moduless/weather/weather-index/weather-index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'news',
    loadChildren: () =>
      import('./moduless/news/news.module').then((m) => m.NewsModule),
  },
  { path: 'weather', component: WeatherIndexComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
