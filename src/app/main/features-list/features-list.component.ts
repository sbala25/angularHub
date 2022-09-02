import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-list',
  templateUrl: './features-list.component.html',
  styleUrls: ['./features-list.component.scss']
})
export class FeaturesListComponent implements OnInit {

  constructor() { }
  fealures = [
    {
      Id : 1,
      name : 'News',
      backgroundImage: 'https://picsum.photos/200/300',
      routeName: 'news'
    },
    {
      Id : 2,
      name : 'Weather',
      backgroundImage: null,
      routeName: 'weather'
    },
    {
      Id : 3,
      name : 'Comming Soon....',
      backgroundImage: null,
      routeName: ''
    },
    {
      Id : 4,
      name : 'Comming Soon....',
      backgroundImage: null,
      routeName: ''
    },
    {
      Id : 5,
      name : 'Comming Soon....',
      backgroundImage: null,
      routeName: ''
    },
    {
      Id : 6,
      name : 'Comming Soon....',
      backgroundImage: null,
      routeName: ''
    }
  ]

  ngOnInit(): void {
  }

}
