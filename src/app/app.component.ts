import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {

   constructor(translate: TranslateService, private auth: AuthService, private router: Router) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'fr']);

      auth.user$.subscribe(user => {
         if (user) {
            let returnUrl = localStorage.getItem('returnUrl');
            router.navigateByUrl(returnUrl);
         }
      });
   }

}
