import {Component, inject, OnInit} from '@angular/core';
import {Taskitem} from './taskitem/taskitem';
import {Task} from '../../../shared/models/task.model';
import {TaskService} from '../../../core/services/taskService';


@Component({
  selector: 'app-exo05',
  imports: [Taskitem],
  templateUrl: './exo05.html',
  styleUrl: './exo05.css',
})
export class Exo05 implements OnInit {

  private _taskService = inject(TaskService);

  tasks: Task[] = [];

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.tasks = this._taskService.getTasks();
  }

  deleteTask(id: number) {
    this._taskService.deleteTask(id);
    this.refresh();
  }
}
