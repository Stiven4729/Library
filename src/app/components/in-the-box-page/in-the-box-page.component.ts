import { Component, WritableSignal, effect, signal } from '@angular/core';
import { Book } from '../library/books';

@Component({
  selector: 'app-in-the-box-page',
  templateUrl: './in-the-box-page.component.html',
  styleUrls: ['./in-the-box-page.component.scss']
})
export class InTheBoxPageComponent {

  selectedBooks: Book[] = [];


  books: WritableSignal<Book[]> = signal(
    localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')!) : []
  );

  selectedBookTitle: string = '';
  selectedBook: Book | undefined;

  constructor() {
    effect(() => {
      console.log(`Tenemos ${this.books().length} almacenados`);
      localStorage.setItem('books', JSON.stringify(this.books()));
  
      // Recuperar libros seleccionados del localStorage
      const selectedBooksString = localStorage.getItem('selectedBooks');
      if (selectedBooksString) {
        this.selectedBooks = JSON.parse(selectedBooksString);
      }
    });
  }
  

  onSubmit(formValue: Book) {
    if (this.selectedBook) {
      // Si hay un libro seleccionado, agrégalo a selectedBooks
      this.selectedBooks.push(this.selectedBook);
    }
    // Limpia la selección para que no se agregue al arreglo principal   
    // Guarda selectedBooks en localStorage
    localStorage.setItem('selectedBooks', JSON.stringify(this.selectedBooks));
  }
  

  onRemove(index: number) {
    this.books.mutate((books) => {
      books.splice(index, 1);
    });
  }

  onBookSelect() {
  const selectedTitle = this.selectedBookTitle;

  if (selectedTitle) {
    const selectedBook = this.books().find((book) => book.title === selectedTitle);
    if (selectedBook) {
      this.selectedBooks.push(selectedBook);

      // Almacenar selectedBooks en localStorage
      localStorage.setItem('selectedBooks', JSON.stringify(this.selectedBooks));
    }
  }
}

}
