import { Component, WritableSignal, effect, signal } from '@angular/core';

import { Book} from './books';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})


export class LibraryComponent {

   books: WritableSignal<Book[]> = signal(
    localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')!) : []

  );
}


