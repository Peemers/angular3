import {Component, OnInit} from '@angular/core';
import {Task} from '../../../shared/models/task.model';
import {CommonModule, NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-exo04',
  imports: [CommonModule, NgClass, NgStyle],
  templateUrl: './exo04.html',
  styleUrl: './exo04.css',
})
export class Exo04{
  tasks: Task[] =
    [
      {id: 1, title: "apprendre angular", priority: "Haute"},
      {id: 2, title: "creer un pipe", priority: "Moyenne"},
      {id: 3, title: "boire une choppe", priority: "Basse"},
    ]

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  addTask(){
    const newTask:  Task = {
      id : Date.now(),
      title : 'nouvelle tache',
      priority: "Haute",
    };
    this.tasks.push(newTask);
  }
}


