/**
 * Created by rob on 19/01/17.
 */
import { Routes } from '@angular/router';

import { View1ComponentComponent } from './view1-component/view1-component.component';
import { View2ComponentComponent } from './view2-component/view2-component.component';
import { TradepileComponent } from './tradepile/tradepile.component';
import { TransfermarketComponent } from './transfermarket/transfermarket.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';


export const rootRouterConfig: Routes = [
  { path: 'view1', component: View1ComponentComponent },
  { path: 'view2', component: View2ComponentComponent },
  { path: 'login', component: LoginComponent,
  children:[
    { path: 'tradepile', component: TradepileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'account', component: AccountComponent },
    { path: 'transfermarket', component: TransfermarketComponent }
  ]},
];





