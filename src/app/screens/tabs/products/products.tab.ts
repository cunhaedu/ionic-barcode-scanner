import { Component, inject, OnInit, signal } from '@angular/core';
import { barcodeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonGrid,
  IonRow,
  IonCol,
  AlertController
} from '@ionic/angular/standalone';

import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';
import { ProductsService } from 'src/app/services/api/products.service';
import { BarcodeScannerService } from 'src/app/services/barcode/barcode-scanner.service';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products-tab',
  templateUrl: 'products.tab.html',
  styleUrls: ['products.tab.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid,
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonLabel,
    IonAvatar,
    IonItem,
    IonList,
    IonIcon,
    IonFabButton,
    IonFab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ProductCardComponent,
  ],
  providers: [BarcodeScannerService],
})
export class ProductsTab implements OnInit {
  products = signal<Product[]>([]);

  private barcodeScannerService = inject(BarcodeScannerService);
  private productService = inject(ProductsService);
  private alertCtrl = inject(AlertController);

  constructor() {
    addIcons({ barcodeOutline })
  }

  ngOnInit() {
    this.loadProducts();
  }

  async scanProduct() {
    try {
      const result = await this.barcodeScannerService.startScan();

      const alert = await this.alertCtrl.create({
        message: result,
        buttons: ['OK'],
      });

      await alert.present();
    } catch (error) {
      const alert = await this.alertCtrl.create({
        message: 'Erro ao ler o código de barras',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }

  private loadProducts() {
    this.products.set(this.productService.getProducts())
  }
}
