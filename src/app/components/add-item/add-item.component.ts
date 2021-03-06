import { Item } from './../../Modal/Item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
item: Item = {
    title : '',
    description: ''
 };
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
  }

  onSubmit() {

    // tslint:disable-next-line: triple-equals
    if (this.item.title != '' &&  this.item.description != '' ) {
    this.itemService.addItem(this.item);
    this.item.title = '';
    this.item.description = '';
    } else {
      console.log(' Write somthing' );
    }

  }

}
