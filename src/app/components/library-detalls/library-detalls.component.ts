import { Component, WritableSignal, effect, signal } from '@angular/core';
import { Book } from '../library/books';


@Component({
  selector: 'app-library-detalls',
  templateUrl: './library-detalls.component.html',
  styleUrls: ['./library-detalls.component.scss']
})
export class LibraryDetallsComponent {


  books: WritableSignal<Book[]> = signal(
    localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')!) : []

  );

  constructor(){
    effect(() =>{
      console.log(`Tenemos ${this.books().length} books`)
      localStorage.setItem('books', JSON.stringify(this.books()))
    })
   }

   onSubmit(formValue: Book){
    this.books.mutate( books => {
      books.push(formValue);
    })
     console.log(formValue)
   }

   /*deleteItem(isbn: string) {
    const index = this.books.indexOf(isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }*/

}