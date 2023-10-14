import { Component } from '@angular/core';
import { boocks } from './boocks';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})


export class LibraryComponent {
  boocks = [...boocks];


}
