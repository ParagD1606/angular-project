import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
})
export class Todos implements OnInit{
  todos:Todo[];
  constructor(){}
  ngOnInit(): void {
    
  }
}
