import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnCoreModule, KeyCloakAuthModule } from '@aduana/an-core';
import { MainPage } from './pages/main-page/main-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { MyPageComponent } from './pages/my-page/my-page.component';
import { DemoPageModule } from './pages/demo-page.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    SecondPageComponent,
    MyPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnCoreModule,
    KeyCloakAuthModule.forRoot({
      production: false,
      keycloak: {
        url:'http://desa-login.aduana.gob.bo:8083',
        realm: 'login',
        clientId: 'angular-test',
     }
    }),
    DemoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
