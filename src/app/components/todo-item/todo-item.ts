import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem implements OnInit{
  @Input() todo!: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {}
  onDelete(todo: Todo){
    this.todoDelete.emit(todo);
  }
}
