import { Component, inject, OnInit, signal } from '@angular/core';
import { IonList, IonGrid, IonRow, IonCol, NavController } from "@ionic/angular/standalone";
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from 'src/app/services/api/products.service';
import { ProductCategory } from 'src/app/model/product.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonList, ProductCardComponent],
})
export class CategoryListComponent  implements OnInit {
  categories = signal<ProductCategory[]>([]);

  private navCtrl = inject(NavController);
  private productService = inject(ProductsService);

  ngOnInit() {
    this.categories.set(this.productService.getCategories())
  }

  handleNavigateToCategory(category: ProductCategory) {
    this.navCtrl.navigateForward(
      '/category-detail',
      {
        queryParams: { category }
      }
    );
  }
}
