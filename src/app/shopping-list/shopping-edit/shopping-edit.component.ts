import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingerient } from '../../shared/ingedient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputReference: ElementRef;
  @ViewChild('amountInput') amountInputReference: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingerient>();

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const ingredientName = this.nameInputReference.nativeElement.value;
    const ingredientAmount = this.amountInputReference.nativeElement.value;
    const newIngredient = new Ingerient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
