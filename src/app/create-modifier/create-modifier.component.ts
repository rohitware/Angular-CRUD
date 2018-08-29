import { Component, OnInit } from '@angular/core';
import { Modifier } from '../models/modifier';
import { ModifierService } from '../services/modifier';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-modifier',
  templateUrl: './create-modifier.component.html',
  styleUrls: ['./create-modifier.component.scss']
})
export class CreateModifierComponent implements OnInit {

  private modifier: Modifier;

  constructor(public modifierService: ModifierService, private router: Router) { }

  ngOnInit() {
    this.modifier = this.modifierService.getter();
    console.log(this.modifier);


  }


  savemodifier() {
    if (this.modifier._id == undefined) {
      this.modifierService.addModifier(this.modifier).subscribe(modifier => {
        console.log(modifier);
        this.router.navigate(['/modifiers']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this.modifierService.editModifier(this.modifier._id).subscribe(modifier => {
        console.log(modifier);
        this.router.navigate(['/modifiers']);
      }, (error) => {
        console.log(error);
      });

    }
  }

}
