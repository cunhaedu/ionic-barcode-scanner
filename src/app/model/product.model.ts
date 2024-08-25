export interface Product {
  _id: string;
  title: string;
  description: string;
  categoryId: string;
  price: number;
  image: string;
  suggestion: string[];
}

export interface ProductCategory {
  _id: string;
  title: string;
  image: string;
}
