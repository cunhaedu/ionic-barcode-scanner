import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    StatusBar.setBackgroundColor({ color: '#FFFFFF' }).catch(() => {
      console.info('Status bar Color: Could not set')
    });
    StatusBar.setStyle({ style: Style.Light }).catch(() => {
      console.info('Status bar Style: Could not set')
    });
  }
}
