import { Component, OnInit } from '@angular/core';
import { products } from 'src/environments/environment';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products = products.value;
  filterProducts;
  constructor() {
    products.subscribe((value) => {
      this.products = value;
    });
    if (localStorage.getItem('products')) {
      products.next(JSON.parse(localStorage.getItem('products')));
      this.products = products.value;
    } else {
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  }

  filter(query) {
    let filterProducts = JSON.parse(localStorage.getItem('products'));
    filterProducts = query
      ? filterProducts.filter((value) =>
          value.title.toLowerCase().includes(query.toLowerCase())
        )
      : filterProducts;

    products.next(filterProducts);
  }

  ngOnInit(): void {}
}
