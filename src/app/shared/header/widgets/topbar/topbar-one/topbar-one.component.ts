import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../classes/product';
import { WishlistService } from '../../../../services/wishlist.service';
import { ProductsService } from '../../../../../shared/services/products.service';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar-one.component.html',
  styleUrls: ['./topbar-one.component.scss']
})
export class TopbarOneComponent implements OnInit {

  user$: Observable<firebase.User>;

  constructor(
    public productsService: ProductsService,
    private afAuth: AngularFireAuth
  ) {
    this.user$ = afAuth.authState;
  }

  ngOnInit() { }

  logout() {
    this.afAuth.auth.signOut();
  }
}
