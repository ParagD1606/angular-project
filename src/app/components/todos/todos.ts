import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { NgFor } from "@angular/common";
import { TodoItem } from "../todo-item/todo-item";

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItem],
  templateUrl: './todos.html',
  styles: [],
})
export class Todos implements OnInit{
  todos:Todo[] = [];
  constructor(){
    this.todos = [
      {
        sno: 1,
        title: "Title1",
        desc: "Discription",
        active: true,
      },
      {
        sno: 2,
        title: "Title2",
        desc: "Discription",
        active: true,
      },
      {
        sno: 3,
        title: "Title3",
        desc: "Discription",
        active: true,
      }
    ]
  }
  ngOnInit(): void {
    
  }
  deleteTodo(todo: Todo){
    console.log(todo)
  }
}
