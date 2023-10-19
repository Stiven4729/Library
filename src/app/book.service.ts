import { Injectable } from '@angular/core';
import { WritableSignal, effect, signal } from '@angular/core';
import { Book } from './components/library/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: WritableSignal<Book[]> = signal(
    localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')!) : []
  );

  constructor(){
    effect(() =>{
      console.log(`Tenemos ${this.books().length} books`)
      localStorage.setItem('books', JSON.stringify(this.books()))
    })
   }

  //funcion ue retorna la lista de libros
  getBooks(): WritableSignal<Book[]> {
    return this.books;
  }

  //funcion para filtrar libros
  filterBooksByISBN(codeISBN: string): void {
    const filteredBooks = this.books().filter((book) => book.codeISBN === codeISBN);
    this.books.set(filteredBooks);
  }

  //funcion para boorar libros
  deleteBookByISBN(codeISBN: string): void {
    this.books.mutate((books) => {
      const index = books.findIndex((book) => book.codeISBN === codeISBN);
      if (index !== -1) {
        books.splice(index, 1);
      }
    });
  }

  //funcion para crear libros
  onSubmit(formValue: Book){
    this.books.mutate( books => {
      books.push(formValue);
    })
     console.log(formValue)
   }

   editBook(codeISBN: string, updatedBook: Book): void {
    this.books.mutate((books) => {
      const index = books.findIndex((book) => book.codeISBN === codeISBN);
      if (index !== -1) {
        // Actualiza el libro con los nuevos datos
        books[index] = { ...books[index], ...updatedBook };
      }
    });
  }

}
