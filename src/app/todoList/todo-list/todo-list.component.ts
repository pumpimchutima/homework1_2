import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  task: Task = new Task;

  isSelected = false;
  selectedIndex:number | undefined;
  
  taskShow: Task = new Task;
 


  constructor() {
   
  }

  ngOnInit(): void {

    this.tasks.push(
      {
        id: 1,
        name: 'task1',
        description: 'description1',
      },
      {
        id: 2,
        name: 'task2',
        description: 'description2',
      }
    );
    
  }

  add(){
    this.task.id = 0;
    this.tasks.push(this.task);
    this.task = new Task;
    this.isSelected = false;
    this.selectedIndex=undefined;
  }

  remove(id:number){
    this.tasks.splice(id,1);
    this.isSelected = false;
    this.selectedIndex=undefined;
  }

  select(index:number){
    this.taskShow = this.tasks[index];
    this.selectedIndex=index;
    this.isSelected=true;
    
 
  }
}
