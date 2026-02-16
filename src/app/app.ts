import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './features/layout/navbar/navbar';
import {BookForm} from './features/exercices/exo06/book-form/book-form';
import {CommonModule, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BookForm, JsonPipe, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular3');
}
