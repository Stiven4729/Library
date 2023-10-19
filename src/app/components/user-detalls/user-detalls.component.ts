import { UserService } from './../../user.service';
import { Component, WritableSignal } from '@angular/core';
import { User } from '../user/users';

@Component({
  selector: 'app-user-detalls',
  templateUrl: './user-detalls.component.html',
  styleUrls: ['./user-detalls.component.scss']
})
export class UserDetallsComponent {
  users: WritableSignal<User[]>;

  constructor(private userService: UserService) {
    this.users = this.userService.getUsers();
  }
  
  //funcion para crear user
  onSubmit(formValue: User): void{
    this.userService.onSubmit(formValue);
    window.alert(`Se ha Creado un nuevo usuario con exito`)
    this.users = this.userService.getUsers();
    console.log(this.users)
  }

}
