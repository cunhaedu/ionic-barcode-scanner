import { Component, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, ModalController, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { BarcodeScannerModalComponent } from './modal/barcode-scanner-modal/barcode-scanner-modal.component';
import { Camera } from '@capacitor/camera';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page {

  value: string | null = '';

  private modalCtrl = inject(ModalController);

  async scan() {
    const permission = await Camera.checkPermissions();

    if(['granted', 'limited'].includes(permission.camera)) {
      await this.openModal();

    } else {
      await Camera.requestPermissions({ permissions: ['camera'] })
        .then(async permission => {
          if(['granted', 'limited'].includes(permission.camera)) {
            await this.openModal();
          }
        });
    }
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: BarcodeScannerModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss<string>();

    if (role === 'confirm' && data) {
      this.value = data;
    }
  }
}
