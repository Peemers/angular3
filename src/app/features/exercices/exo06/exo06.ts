import {Component, inject, OnInit} from '@angular/core';
import {BookForm} from './book-form/book-form';
import {LibraryService} from '../../../core/services/library-service';
import {Book} from '../../../shared/models/book.models';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-exo06',
  imports: [
    BookForm,
    JsonPipe
  ],
  templateUrl: './exo06.html',
  styleUrl: './exo06.css',
})
export class Exo06 implements OnInit {

  private _LibraryService = inject(LibraryService);

  allBooks: Book[] = [];

  ngOnInit() {
    this.allBooks = this._LibraryService.getBooks();
  }

  onAddBook(newBook: Book) {
    this._LibraryService.addBook(newBook);
    this.allBooks = this._LibraryService.getBooks();
  }

  onDeleteBook(index: number) {
    this._LibraryService.removeBook(index);
    this.allBooks = this._LibraryService.getBooks();
  }
}
