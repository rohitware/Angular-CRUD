import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CategoriesService} from '../services/categories.service';
import { Category } from '../models/category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  private categories: Category[];

  constructor(private _categoriesService: CategoriesService, private _router: Router) { }

  ngOnInit() {

    this._categoriesService.getCategories()
    .subscribe(resHerbsData => this.categories = resHerbsData);
  }


  doDelete(categories){
    this._categoriesService.deleteCategories(categories._id).subscribe(data=>{
      this.categories.splice(this.categories.indexOf(categories),1);
    })
  }

  doUpdate(categories){
    this._categoriesService.setter(categories);
    this._router.navigate(['/create-categories'])
  }


  newCategory() {
    let category = new Category();
    this._categoriesService.setter(category);
    this._router.navigate(['/create-categories']);

  }

  

}
