import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banners',
  templateUrl: './home-banners.component.html',
  styleUrls: ['./home-banners.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: []
})
export class HomeBannersComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
