import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/classes/product';
import { ProductsService } from '../../shared/services/products.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-five',
  templateUrl: './home-five.component.html',
  styleUrls: ['./home-five.component.scss']
})
export class HomeFiveComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => {
      product.filter((item: Product) => {
        if (item.category == 'watch')
          this.products.push(item)
      })
    });
  }

}
