import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU'),
    new Recipe('Test recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU'),
    new Recipe('Test recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU'),
    new Recipe('Test recipe', 'This is test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMvpbYxG7m2ABw_TGDsKdHJuksdI815lVdSxmmuzzp282KbjZXcHOElke3K0rzTB8aMk&usqp=CAU  ')
  ];

  constructor() { }

  ngOnInit() {

  }

}
