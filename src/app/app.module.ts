import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import {Database } from '@angular/fire/database'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { LoginPage } from './login/login.page';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import * as firebase from 'firebase/app';
//import { AngularFireDatabaseModule } from '@angular/fire/database';

import { Facebook } from '@ionic-native/facebook/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
   ],
  providers: [Facebook,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
