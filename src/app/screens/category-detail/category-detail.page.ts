import { Component, computed, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ProductCategory } from 'src/app/model/product.model';
import { ProductsService } from 'src/app/services/api/products.service';
import { addIcons } from 'ionicons';
import { chevronBackOutline } from 'ionicons/icons';
import { ProductCardComponent } from 'src/app/components/product-card/product-card.component';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonList,
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ProductCardComponent,
  ]
})
export class CategoryDetailPage {
  category = input.required<ProductCategory>();

  products = computed(
    () => this.productService.getProductsByCategoryId(this.category()._id)
  );

  private productService = inject(ProductsService);

  constructor() {
    addIcons({ chevronBackOutline })
  }
}
