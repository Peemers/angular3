import {Component, EventEmitter, Input, Output, output} from '@angular/core';
import {Task} from '../../../../shared/models/task.model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-taskitem',
  imports: [
    NgClass
  ],
  templateUrl: './taskitem.html',
  styleUrl: './taskitem.css',
})
export class Taskitem {

  @Input({required: true}) task! : Task;
  @Output() askDelete = new EventEmitter<number>();

  onDelete(){
    this.askDelete.emit(this.task.id);
  }
}
