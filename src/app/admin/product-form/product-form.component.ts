import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { categories, products } from 'src/environments/environment';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productsCategories;
  product = {
    id: '',
    title: '',
    category: '',
    price: '',
    imageUrl: '',
  };
  product_id;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productsCategories = categories.sort();
    this.product_id = this.route.snapshot.paramMap.get('id');
    if (this.product_id) {
      products.value.map((product) => {
        if (product.id == this.product_id) {
          this.product = product;
        }
      });
    }
  }

  save(product) {
    if (this.product_id) this.productService.update(this.product_id, product);
    else this.productService.create(product);

    this.router.navigate(['/admin/products']);
  }

  delete() {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.delete(this.product_id);
    this.router.navigate(['/admin/products']);
  }
  ngOnInit(): void {}
}
