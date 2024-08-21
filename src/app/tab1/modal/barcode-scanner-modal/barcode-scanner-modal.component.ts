import { ModalController, IonContent, IonIcon } from '@ionic/angular/standalone';
import { Component, inject, OnInit } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BarcodeFormat, Result } from '@zxing/library';
import { closeCircle } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-barcode-scanner-modal',
  templateUrl: './barcode-scanner-modal.component.html',
  styleUrls: ['./barcode-scanner-modal.component.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonContent,
    ZXingScannerModule
  ]
})
export class BarcodeScannerModalComponent  implements OnInit {

  formats = [BarcodeFormat.QR_CODE, BarcodeFormat.CODE_39];

  isRead = false;
  enableTorch = false;

  private modalCtrl = inject(ModalController);

  constructor() {
    addIcons({ closeCircle });
  }

  ngOnInit() {
    setTimeout(() => {
      this.isRead = true;
    }, 500);
  }

  toggleTorch() {
    this.enableTorch = !this.enableTorch;
  }

  handleScan(event: Result): void {
    console.log(event);

    if(event && event.getText()) {
      this.confirm(event.getText());
    }
  }

  handleSuccess(event: string) {
    console.log('success -> ', event);

    this.confirm(event);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm(value: string) {
    return this.modalCtrl.dismiss(value, 'confirm');
  }
}
