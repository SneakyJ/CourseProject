import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is test recipe', 'https://bakesbybrownsugar.com/wp-content/uploads/2023/03/Sabayon-Sauce-19C.jpg.webp'),
    new Recipe('Test recipe', 'This is test recipe', 'https://bakesbybrownsugar.com/wp-content/uploads/2023/03/Sabayon-Sauce-19C.jpg.webp'),
    new Recipe('Test recipe', 'This is test recipe', 'https://bakesbybrownsugar.com/wp-content/uploads/2023/03/Sabayon-Sauce-19C.jpg.webp'),
    new Recipe('Test recipe', 'This is test recipe', 'https://bakesbybrownsugar.com/wp-content/uploads/2023/03/Sabayon-Sauce-19C.jpg.webp')
  ];

  constructor() { }

  ngOnInit() {

  }

}
