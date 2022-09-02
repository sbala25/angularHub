import { Component, Input, OnInit } from '@angular/core';
// const noImageNews = require('../../../../assets/images/noImageNews.jpg').default as string;

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem:any ={};
  constructor() { }
 
  noImageNews= './assets/images/noImageNews.jpg';
  timeZone = 'Asia/Kolkata';

  ngOnInit(): void {
    if(this.newsItem.publishedAt){
      let date = new Date(this.newsItem.publishedAt).toString();
      this.newsItem.date = date;
    }
    else{
      this.newsItem.date = '';
    }
    
  }

}
