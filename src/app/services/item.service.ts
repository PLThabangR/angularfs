import { Item } from './../Modal/Item';
import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import 'firebase/firestore';





@Injectable({
  providedIn: 'root'
})
export class ItemService {

// Generic
  itemCollections: AngularFirestoreCollection<Item>;
// This is an observable
  items: Observable<Item[]> ;


  // Eject angular firestre as dependancy
  constructor(public afs: AngularFirestore) {
// this.items = this.afs.collection('items').valueChanges();
// Setting collection to the items colections
this.itemCollections = this.afs.collection('items');
// Getting the id from firebase
this.items = this.itemCollections.snapshotChanges().pipe(map(changes =>{
  return changes.map(a => {
    const data = a.payload.doc.data() as Item;
    data.id = a.payload.doc.id;
    return data;
  });
}));


  }

  // Getting data from firebase noSql
getItems(){
  return this.items;
}
// Add item to the firebase 
addItem(item: Item){
  this.itemCollections.add(item);
}

}


