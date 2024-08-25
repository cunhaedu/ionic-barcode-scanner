import { Component, OnInit } from '@angular/core';
import { IonSearchbar, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  standalone: true,
  imports: [IonItem, IonSearchbar]
})
export class SearchbarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
