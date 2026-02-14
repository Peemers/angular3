import { Injectable } from '@angular/core';
import {Task} from '../../shared/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks: Task[] = [
    {id: 1, title: "test1", priority: "Moyenne"},
    {id: 2, title: "test2", priority: "Haute"}
  ];

  getTasks(): Task[]{
    return this._tasks;
  }

  deleteTask(id: number){
    this._tasks = this._tasks.filter(task => task.id !== id);
  }
}
