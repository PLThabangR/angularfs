import { ItemService } from './services/item.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Firebase imports
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';


import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';


import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   AngularFireModule.initializeApp(environment.firebase,'angularfs'),
    AngularFirestoreModule,
    FormsModule

  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
