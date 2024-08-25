import { Component } from '@angular/core';
import { IonAvatar, IonToolbar, IonHeader, IonButton, IonButtons, IonIcon, IonItem, IonText, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  standalone: true,
  imports: [
    IonLabel,
    IonText,
    IonItem,
    IonIcon,
    IonButtons,
    IonButton,
    IonHeader,
    IonToolbar,
    IonAvatar
  ]
})
export class HomeHeaderComponent {

  constructor() {
    addIcons({ cartOutline });
  }
}
