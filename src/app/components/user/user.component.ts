import { Component } from '@angular/core';
import { users } from './users';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent {
  users = [...users];

}
