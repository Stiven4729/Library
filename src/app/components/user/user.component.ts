import { Component, WritableSignal, signal } from '@angular/core';
import { User } from './users';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

  users: WritableSignal<User[]> = signal([]);

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }

  /*filterUser(id: number): void {
    this.userService.filterUser(id);
  }
 */
  deleteUser(id: number): void {
    window.alert(`Se ha borrado el Usuario con condigo ${id}`)
    this.userService.deleteUser(id);
  }

}