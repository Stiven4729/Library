import { Injectable } from '@angular/core';
import { Boock } from './components/library/boocks';

@Injectable({
  providedIn: 'root',
})
export class BoockService {
  private boocks: Boock[] = [];

  constructor() {
    // Cargar los libros almacenados en el localStorage al inicio
    const storedBoocks = localStorage.getItem('boocks');
    if (storedBoocks) {
      this.boocks = JSON.parse(storedBoocks);
    }
  }

  getBoocks(): Boock[] {
    return this.boocks;
  }

  addBoock(boock: Boock) {
    this.boocks.push(boock);
    this.saveBoocksToLocalStorage();
  }

  private saveBoocksToLocalStorage() {
    localStorage.setItem('boocks', JSON.stringify(this.boocks));
  }
}
