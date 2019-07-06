import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../classes/product';
import { WishlistService } from '../../../../services/wishlist.service';
import { ProductsService } from '../../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar-one.component.html',
  styleUrls: ['./topbar-one.component.scss']
})
export class TopbarOneComponent implements OnInit {

  constructor(
    public productsService: ProductsService,
    private afAuth: AngularFireAuth
  ) {
    afAuth.authState.subscribe(x => console.log(x));
  }

  ngOnInit() { }

  logout() {
    this.afAuth.auth.signOut();
  }
}
