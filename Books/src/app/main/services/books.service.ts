import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [
    {
      name: 'Gandeste-te la un numar',
      author: 'Verdon John',
      numberOfPages: 520,
      rating: 4.5,
      isRead: true,
    },
    {
      name: 'Noi contra voastra',
      author: 'Fredrik Backman',
      numberOfPages: 540,
      isRead: false,
    },
    {
      name: 'O zi din sapte',
      author: 'Oliver Lauren',
      numberOfPages: 382,
      rating: 4,
      isRead: true,
    },
    {
      name: 'Ugly love',
      author: 'Hoover Colleen',
      numberOfPages: 352,
      rating: 4,
      isRead: true,
    },
    {
      name: 'M-am hotarat sa devin prost',
      author: 'Page Martin',
      numberOfPages: 159,
      rating: 0.5,
      isRead: true,
    },
    {
      name: 'Amandoi mor la sfarsit',
      author: 'Silvera Adam',
      numberOfPages: 336,
      rating: 5,
      isRead: true,
    },
    {
      name: 'Britt-Marie a fost aici',
      author: 'Fredrik Backman',
      numberOfPages: 454,
      rating: 5,
      isRead: true,
    },
    {
      name: 'An Astronaut s Guide to Life on Earth ',
      author: 'Hadfield Chris',
      numberOfPages: 311,
      rating: 4.5,
      isRead: true,
    },
    {
      name: 'Scandalul',
      author: 'Fredrik Backman',
      numberOfPages: 515,
      rating: 5,
      isRead: true,
    },
  ];

  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }
}
