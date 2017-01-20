import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';


import { AppComponent } from './app.component';
import { View1ComponentComponent } from './view1-component/view1-component.component';
import { View2ComponentComponent } from './view2-component/view2-component.component';
import { LoginComponent } from './login/login.component';
import { FutInterfaceComponent } from './fut-interface/fut-interface.component';
import { TransfermarketComponent } from './transfermarket/transfermarket.component';
import { TradepileComponent } from './tradepile/tradepile.component';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    View1ComponentComponent,
    View2ComponentComponent,
    LoginComponent,
    FutInterfaceComponent,
    TransfermarketComponent,
    TradepileComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
