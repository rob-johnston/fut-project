/**
 * Created by rob on 20/01/17.
 */
import { Routes } from '@angular/router';

import { TradepileComponent } from '../tradepile/tradepile.component';
import { TransfermarketComponent } from '../transfermarket/transfermarket.component';
import { LoginComponent } from '../login/login.component';
import { AccountComponent } from '../account/account.component';

export const FutInterfaceRouterConfig: Routes = [
  { path: 'tradepile', component: TradepileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  { path: 'transfermarket', component: TransfermarketComponent }
];
