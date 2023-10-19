import { Component } from '@angular/core';
import { Book } from '../library/books';
import { WritableSignal} from '@angular/core';
import { BookService } from 'src/app/book.service';

@Component({
  selector: 'app-library-detalls',
  templateUrl: './library-detalls.component.html',
  styleUrls: ['./library-detalls.component.scss']
})
export class LibraryDetallsComponent {
  books: WritableSignal<Book[]>;

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }
  
  //funcion para crear libros
  onSubmit(formValue: Book): void{
    this.bookService.onSubmit(formValue);
    window.alert(`Se ha Creado un nuevo libro con exito`)

  }

  filterBooksByISBN(codeISBN: string): void {
    this.bookService.filterBooksByISBN(codeISBN);
  }

  deleteBookByISBN(codeISBN: string): void {
    window.alert(`Se ha borrado el libro con condigo ${codeISBN}`)
    this.bookService.deleteBookByISBN(codeISBN);
  }
}