import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './core/material/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LibraryComponent } from './components/library/library.component';
import { LibraryDetallsComponent } from './components/library-detalls/library-detalls.component';
import { BookService } from './book.service';
import { UserComponent } from './components/user/user.component';
import { UserDetallsComponent } from './components/user-detalls/user-detalls.component';
import { InTheBoxPageComponent } from './components/in-the-box-page/in-the-box-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    LibraryComponent,
    LibraryDetallsComponent,
    UserComponent,
    UserDetallsComponent,
    InTheBoxPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
