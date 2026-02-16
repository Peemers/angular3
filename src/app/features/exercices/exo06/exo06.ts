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
  filteredBooks: Book[] = [];


  ngOnInit() {
    this.refreshList();
  }

  refreshList() {
    this.allBooks = this._LibraryService.getBooks();
    this.filteredBooks = [...this.allBooks];
  }

  onAddBook(newBook: Book) {
    this._LibraryService.addBook(newBook);
    this.refreshList()
  }

  onDeleteBook(index: number) {

    const bookTitle = this.allBooks[index].title;

    if (confirm(`Voulez vous vraiment supprimer le livre ${bookTitle}`)) {
      this._LibraryService.removeBook(index);
      this.refreshList();
    }
  }

  onSearch(event: Event) {
    const search = (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredBooks = this.allBooks.filter(b =>
    b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search)
    );
  }
}
