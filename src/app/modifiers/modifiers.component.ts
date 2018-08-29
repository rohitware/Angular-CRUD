import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModifierService } from '../services/modifier';
import {Modifier} from '../models/modifier';

@Component({
  selector: 'app-modifiers',
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.scss']
})
export class ModifiersComponent implements OnInit {

  private modifiers: Modifier[];

  constructor(private _modifierService: ModifierService, private _router: Router) { }

  ngOnInit() {

    this._modifierService.getModifier()
      .subscribe(resHerbsData => this.modifiers = resHerbsData);
  }

  doDelete(modifier) {
    this._modifierService.deleteModifier(modifier._id).subscribe(data => {
      this.modifiers.splice(this.modifiers.indexOf(modifier), 1);
    })
  }

  editModifier(modifier){
    this._modifierService.setter(modifier);
    this._router.navigate(['/create-modifier'])

  }

  newModifier(){
    let modifier = new Modifier();
    this._modifierService.setter(modifier);
    this._router.navigate(['/create-modifier'])

  }

}
