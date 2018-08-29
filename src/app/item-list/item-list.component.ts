import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  private items: Item[];

  // category = ['Really Smart', 'Super Flexible',
  //   'Super Hot', 'Weather Changer'];


  constructor(private _itemsService: ItemsService, private _router: Router) { }

  ngOnInit() {
    this._itemsService.getItems()
      .subscribe(Data => this.items = Data);

  }


  deleteItem(items) {
    this._itemsService.deleteItem(items._id).subscribe(
      data => {
        this.items.splice(this.items.indexOf(items), 1);

      },
      error => {
        console.log(error);
      }

    )
  }

  updateItem(item) {
    this._itemsService.setter(item);
    this._router.navigate(['/items']);
  }

  newItem() {
    let item = new Item();
    this._itemsService.setter(item);
    this._router.navigate(['/items']);

  }




}
