import { IonContent, AlertController, IonFab, IonFabButton, IonIcon, IonLabel, IonText } from '@ionic/angular/standalone';
import { Component, inject } from '@angular/core';

import { BarcodeScannerService } from 'src/app/services/barcode/barcode-scanner.service';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { HomeHeaderComponent } from './ui/home-header/home-header.component';
import { addIcons } from 'ionicons';
import { barcodeOutline } from 'ionicons/icons';
import { CategoryListComponent } from 'src/app/components/category-list/category-list.component';
import { HomeBannersComponent } from './ui/home-banners/home-banners.component';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home.tab.html',
  styleUrls: ['home.tab.scss'],
  standalone: true,
  imports: [IonText, IonLabel,
    IonIcon,
    IonFabButton,
    IonFab,
    IonContent,
    HomeHeaderComponent,
    SearchbarComponent,
    CategoryListComponent,
    HomeBannersComponent,
  ],
  providers: [BarcodeScannerService]
})
export class HomeTab {
  private barcodeScannerService = inject(BarcodeScannerService);
  private alertCtrl = inject(AlertController);

  constructor() {
    addIcons({ barcodeOutline })
  }

  async scanProduct() {
    try {
      const result = await this.barcodeScannerService.startScan();

      if(result) {
        const alert = await this.alertCtrl.create({
          message: result,
          buttons: ['OK'],
        });

        await alert.present();
      }
    } catch (error) {
      const alert = await this.alertCtrl.create({
        message: JSON.stringify(error),
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
