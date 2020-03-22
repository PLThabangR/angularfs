import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { Item } from '../Modal/Item';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

//Generic
  itemCollections: AngularFirestoreCollection<Item>;
//This is an observable
  items: Observable<Item[]>

  //Eject angular firestre as dependancy
  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items').valueChanges();
  }

getItems(){
  return this.items;
}


}


