import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { title } from 'process';
import { NgFor } from "@angular/common";
import { TodoItem } from "../todo-item/todo-item";

@Component({
  selector: 'app-todos',
  imports: [NgFor, TodoItem],
  templateUrl: './todos.html',
  styleUrl: './todos.css',
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
}
