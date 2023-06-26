import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnCoreModule, KeyCloakAuthModule } from '@aduana/an-core';
import { MainPage } from './pages/main-page/main-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPage,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnCoreModule,
    KeyCloakAuthModule.forRoot({
      production: false,
      keycloak: {
       url: 'http://10.101.1.44:8083',
       realm: 'login',
       clientId: 'angular-app',
     }
   }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
