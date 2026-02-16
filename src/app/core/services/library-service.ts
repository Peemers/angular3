import { Injectable } from '@angular/core';
import {Book} from '../../shared/models/book.models';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {

  private _books: Book[] = [];

  getBooks(): Book[]{
    return [...this._books];
  }

  addBook(book: Book){
    this._books.push(book);
  }

  removeBook(index: number){
    this._books.splice(index, 1);
  }

}
