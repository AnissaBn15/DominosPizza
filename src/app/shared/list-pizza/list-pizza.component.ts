import { LIST_PIZZAS } from 'src/app/pizza/ListPizza';
import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/pizza/Pizza';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})

export class ListPizzaComponent implements OnInit{

  Pizza : Pizza[] =[];

  ngOnInit(): void {
    this.Pizza =LIST_PIZZAS;
  }

  selectPizza(selectedPizza: Pizza): void{
    alert("vous avez selectionné : " +selectedPizza.name);
  }

}
