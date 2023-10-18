import { Injectable } from '@angular/core';
import { Book } from './components/library/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: Book[] = [];

  constructor() {
    // Cargar los libros almacenados en el localStorage al inicio
    const storedBoocks = localStorage.getItem('books');
    if (storedBoocks) {
      this.books = JSON.parse(storedBoocks);
    }
  }

  getBoocks(): Book[] {
    return this.books;
  }

  addBoock(book: Book) {
    this.books.push(book);
    this.saveBoocksToLocalStorage();
  }

  private saveBoocksToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
