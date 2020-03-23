import { Injectable, ChangeDetectionStrategy } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
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
  items: Observable<Item[]> ;


  //Eject angular firestre as dependancy
  constructor(public afs: AngularFirestore) {
//this.items = this.afs.collection('items').valueChanges();
//Getting the id from firebase
this.items =this.afs.collection('items').snapshotChanges().pipe(map(changes =>{
  return changes.map(a =>{
    const data = a.payload.doc.data() as Item;
    data.id = a.payload.doc.id;
    return data;
  })
}))


  }

getItems(){
  return this.items;
}


}


