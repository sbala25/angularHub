import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { NewsServiceService } from '../services/news-service.service';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit, OnDestroy {
  constructor(
    private newsApi: NewsServiceService,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {}

 

  news:any = [];
  newsSub: any;
  loader = false;
  loadMore = true;
  getRouteData: any;
  categoryKey: String | undefined;
  selector: string = '.main-panel';
  pageSize = 9;
  page = 1;
  maxPage = 1;
  totalResults = 0;
  
  

  ngOnInit(): void {
    this.loader = true;
    this.getRouteData = this.route.data.subscribe((params) => {
      this.categoryKey = params['categoryKey'];
      this.getNews();
    });
  }
  ngOnDestroy(): void {
    this.getRouteData.unsubscribe();
    this.newsSub.unsubscribe();
  }

  getNews = () => {
    let filterKey = {
      categoryKey: this.categoryKey, 
      page: this.page,
      pageSize: this.pageSize
    }
    this.newsSub = this.newsApi.getTopHeadlines(filterKey).subscribe(
      result =>{
        let res:any = result
        this.news = [...this.news, ...JSON.parse(JSON.stringify(res.articles))];
        this.totalResults = res.totalResults;
        this.maxPage = Math.ceil(this.totalResults/this.pageSize);
        this.page++;
      },
      error => {
        console.log(error);
        this._snackBar.open(error.error.message, '',{
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'bg-danger',
          duration: 5000
        });
        this.loader = false;
        this.loadMore = false;
      },
      () => {
        this.loader = false;
      }
    )
  };

 
 @HostListener("window:scroll", ["$event"])
  onWindowScroll() { 
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight-100;
     if(pos >= max && !this.loader && this.page <= this.maxPage && this.loadMore )   {
      this.loader = true;
      this.getNews();
     }
  }
}
