import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cart-tab',
  templateUrl: 'cart.tab.html',
  styleUrls: ['cart.tab.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class CartTab {
  constructor() {}
}
