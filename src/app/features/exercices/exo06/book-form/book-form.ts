import {Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators, FormArray} from '@angular/forms';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-book-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {

  private _fb = inject(FormBuilder);
  @Output() bookAdded = new EventEmitter<any>();

  bookForm = this._fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    tags: this._fb.array([]),
  });

  get tags(){
    return this.bookForm.get('tags')! as FormArray;
  }

  addTag(){ this.tags.push(this._fb.control('', Validators.required));}

  submit(){
    if (this.bookForm.valid) {
      this.bookAdded.emit(this.bookForm.value);
      this.bookForm.reset();
      this.tags.clear();
    }
  }
}
