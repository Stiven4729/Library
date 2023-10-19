import { Injectable, WritableSignal, effect, signal } from '@angular/core';
import { User } from './components/user/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: WritableSignal<User[]> = signal(
    localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')!) : []
  );

  constructor(){
    effect(() =>{
      console.log(`Tenemos ${this.users().length} Users`)
      localStorage.setItem('users', JSON.stringify(this.users()))
    })
   }
   

  getUsers() {
    return this.users;
  }

  updateUserBooksCount(userId: number, bookCount: number) {
    this.users.mutate(users => {
      const userIndex = users.findIndex(user => user.id === userId);
      if (userIndex !== -1) {
        users[userIndex].allBoocks = bookCount;
      }
    });
  }
  
  /*filterUser(id: number): void {
    const filteredUsers = this.users().filter((user) => user.id === id);
    this.users.set(filteredUsers);
  }
  */

  deleteUser(id: number): void {
    this.users.mutate((users) => {
      const index = users.findIndex((user) => user.id === id);
      if (index !== -1) {
        users.splice(index, 1);
      }
    });
  }

  onSubmit(formValue: User) {
    this.users.mutate(users => {
      users.push(formValue);
    })
    console.log(formValue)
  }

}
