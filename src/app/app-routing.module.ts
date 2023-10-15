import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LibraryDetallsComponent } from './components/library-detalls/library-detalls.component';

import { UserDetallsComponent } from './components/user-detalls/user-detalls.component';
import { InTheBoxPageComponent } from './components/in-the-box-page/in-the-box-page.component';
const routes: Routes = [
  {
    path: '', 
    component: HomePageComponent
  },
  {
    path: 'library-detalls', 
    component: LibraryDetallsComponent
  },
  {
    path: 'users-detalls', 
    component: UserDetallsComponent
  },
  {
    path: 'inTheBox-page', 
    component: InTheBoxPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
