import { Injectable, Signal, signal } from '@angular/core';
import { of } from 'rxjs';
import { categoryList, productsList } from 'src/app/@data/products';
import { Product, ProductCategory } from 'src/app/model/product.model';
import { paginateArray } from 'src/app/utils/paginate.util';

interface PaginatedProduct {
  products: Product[];
  hasMore: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getCategories(): ProductCategory[] {
    return categoryList;
  }

  getProducts() {
    return productsList;
  }

  getProductsByCategoryId(categoryId: string) {
    return productsList.filter(product => product.categoryId === categoryId);
  }
}
