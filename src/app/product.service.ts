import { Injectable } from '@angular/core';
import { products } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  create(product) {
    let newProducts = products.value;
    product.id = newProducts.length + 1;
    newProducts.push(product);
    products.next(newProducts);
    localStorage.setItem('products', JSON.stringify(products.value));
  }
  update(product_id, product) {
    let newProducts = products.value.map((value, index) => {
      if (value.id == product_id) {
        products.value[index] = product;
      }
    });
    //products.next(newProducts);
    localStorage.setItem('products', JSON.stringify(products.value));
  }

  delete(product_id) {
    let newProducts = products.value.filter((value) => {
      if (value.id != product_id) return value;
    });
    products.next(newProducts);
    localStorage.setItem('products', JSON.stringify(products.value));
  }
}
