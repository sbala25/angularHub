import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  constructor(private http: HttpClient) { }
  // Top headlines in the IN
  getTopHeadlines(filterKey:any){
    let newsApikey = environment.newsApikey;
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
  let url = `https://newsapi.org/v2/top-headlines?${country}${categoryKey}${pageSize}${page}&apiKey=${newsApikey}`;
  return this.http.get(url)
  }
}
