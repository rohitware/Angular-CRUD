import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { Router } from '@angular/router';
import { CategoriesService } from '../services/categories.service';


@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent implements OnInit {

  private category: Category;

  constructor(public categoriesService: CategoriesService, private router: Router) { }

  ngOnInit() {

    this.category = this.categoriesService.getter();
    console.log(this.category);

  }

  savecategories() {
    if (this.category._id == undefined){
    this.categoriesService.addCategory(this.category).subscribe(category => {
      (this.category);
      this.router.navigate(['/categories']);

    });
  }else{
    this.categoriesService.doUpdate(this.category._id).subscribe(category => {
      console.log(category);
      (this.category);
      this.router.navigate(['/categories']);      
    });
  }
  }
}
