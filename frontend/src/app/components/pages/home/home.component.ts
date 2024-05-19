import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    private router: Router
  ) {
    this.foods = foodService.getAll()
  }

  navigateToFoodDetails(foodId: string) {
    this.router.navigate([`/food/${foodId}`]);
  }
}
