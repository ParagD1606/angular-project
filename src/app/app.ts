import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from "./components/todos/todos";

@Component({
  selector: 'app-root',
  imports: [Todos],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  title = 'todo -list'
  constructor(){
    // setTimeout(() => {
    //   this.title = 'hello'
    // }, 2000);
  }
}
