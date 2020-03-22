import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // Use constructor to enject itemService in to this component
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    //fetch data from firebase
    this.itemService.getItems().subscribe(
      res => {
        console.log(res);
      }
    );

  }

}
