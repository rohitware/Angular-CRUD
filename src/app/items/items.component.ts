import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ItemsService } from '../services/items.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  private item: Item;


  category = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  constructor(public itemService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.item = this.itemService.getter();
    console.log(this.item);

  }
  

  saveItem() {
    if (this.item._id == undefined) {
      this.itemService.addItem(this.item).subscribe((item) => {
        console.log(item);
        this.router.navigate(['/item-list']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.itemService.editItem(this.item._id).subscribe((item) => {
        console.log(item);
        this.router.navigate(['/item-list']);

      }, (error) => {
        console.log(error);
      });
    }
  }



}