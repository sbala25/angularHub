import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-index',
  templateUrl: './news-index.component.html',
  styleUrls: ['./news-index.component.scss']
})
export class NewsIndexComponent implements OnInit {

  constructor(private title:Title) { }
 
  ngOnInit(): void {
    this.title.setTitle('SB-News');
  }

}
