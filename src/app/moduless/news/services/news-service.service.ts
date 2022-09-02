import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  constructor(private http: HttpClient) { }
  // Top headlines in the IN
  getTopHeadlines(filterKey:any){
    let categoryKey ='';
    let country= 'country=in';
    let pageSize = `&pageSize=${filterKey.pageSize}`;
    let page = `&page=${filterKey.page}`;
    if(filterKey.categoryKey){
      categoryKey = `&category=${filterKey.categoryKey}`
    }
    if(filterKey.country){
      country = `country=${filterKey.country}`
    }
    if(filterKey.pageSize){
      pageSize = `&pageSize=${filterKey.pageSize}`
    }
  let url = `https://newsapi.org/v2/top-headlines?${country}${categoryKey}${pageSize}${page}&apiKey=dcefb5b1d8cf4bb1a216756e4ec99c7f`;
  return this.http.get(url);
  }
}
