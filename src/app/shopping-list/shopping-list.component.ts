import { Component } from '@angular/core';
import { Ingerient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingerient[] = [
    new Ingerient('Apples', 5),
    new Ingerient('Tomatos', 4),
  ];

  constructor() { }

  ngOnInit() { }

  onIngredientAdded(ingedient: Ingerient) {
    this.ingredients.push(ingedient);
  }
}
