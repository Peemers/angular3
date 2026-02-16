import {Component, EventEmitter, Input, input, output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  imports: [],
  templateUrl: './enfant.html',
  styleUrl: './enfant.css',
})
export class Enfant {
  @Input() message!: string;
}
