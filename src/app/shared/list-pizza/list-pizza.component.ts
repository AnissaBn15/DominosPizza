import { LIST_PIZZAS } from 'src/app/pizza/ListPizza';
import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/pizza/Pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})

export class ListPizzaComponent implements OnInit{

  Pizza : Pizza[] =[];


  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.Pizza =LIST_PIZZAS;
  }

  selectPizza(selectedPizza: Pizza): void{
    //alert("vous avez selectionné : " +selectedPizza.name);
    const link : any= ['pizzas', selectedPizza.id];
    this.router.navigate(link);
  }

}
