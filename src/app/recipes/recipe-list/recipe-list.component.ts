import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test 1 recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU'),
    new Recipe('Test 2 recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU'),
    new Recipe('Test 3 recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU'),
    new Recipe('Test 4 recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU  ')
  ];

  constructor() { }

  ngOnInit() {  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
