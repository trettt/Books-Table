import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [
    {
      name: 'Gandeste-te la un numar',
      author: 'Verdon John',
      numberOfPages: 520,
      rating: '4.5',
      isRead: true,
    },
    {
      name: 'Noi contra voastra',
      author: 'Fredrik Backman',
      numberOfPages: 540,
      rating: '?',
      isRead: false,
    },
    {
      name: 'O zi din sapte',
      author: 'Oliver Lauren',
      numberOfPages: 382,
      rating: '4',
      isRead: true,
    },
    {
      name: 'Ugly love',
      author: 'Hoover Colleen',
      numberOfPages: 352,
      rating: '4',
      isRead: true,
    },
    {
      name: 'M-am hotarat sa devin prost',
      author: 'Page Martin',
      numberOfPages: 159,
      rating: '0.5',
      isRead: true,
    },
    {
      name: 'Amandoi mor la sfarsit',
      author: 'Silvera Adam',
      numberOfPages: 336,
      rating: '5',
      isRead: true,
    },
    {
      name: 'Britt-Marie a fost aici',
      author: 'Fredrik Backman',
      numberOfPages: 454,
      rating: '5',
      isRead: true,
    },
    {
      name: 'An Astronaut s Guide to Life on Earth ',
      author: 'Hadfield Chris',
      numberOfPages: 311,
      rating: '4.5',
      isRead: true,
    },
    {
      name: 'Scandalul',
      author: 'Fredrik Backman',
      numberOfPages: 515,
      rating: '5',
      isRead: true,
    },
    {
      name: 'Flori pentru Algernon',
      author: 'Keyes Daniel',
      numberOfPages: 282,
      rating: '4.5',
      isRead: true,
    },
    {
      name: 'Extraordinarul voiaj al unui fakir care a ramas blocat intr-un dulap IKEA',
      author: 'Puertolas Romain',
      numberOfPages: 250,
      rating: '4',
      isRead: true,
    },
    {
      name: 'Oameni anxiosi',
      author: 'Fredrik Backman',
      numberOfPages: 464,
      rating: '5',
      isRead: true,
    },
    {
      name: 'The Silent Patient',
      author: 'Michaelides Alex',
      numberOfPages: 352,
      rating: '5',
      isRead: true,
    },
    {
      name: 'Toate acele locuri minunate',
      author: 'Niven Jennifer',
      numberOfPages: 216,
      rating: '?',
      isRead: false,
    },
    {
      name: 'Acolo unde canta racii',
      author: 'Delia Owens',
      numberOfPages: 384,
      rating: '?',
      isRead: false,
    },
    {
      name: 'Podul catre Terabithia',
      author: 'Paterson Katherine',
      numberOfPages: 144,
      rating: '?',
      isRead: false,
    },
    {
      name: 'Tokyo Ghoul #12',
      author: 'Isida Sui',
      numberOfPages: 200,
      rating: '5',
      isRead: true,
    },
  ];
  booksSubject = new Subject<Book[]>();

  constructor() {}

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book) {
    if (book.rating === null) {
      book.rating = '?';
    }

    this.books.push(book);
    this.booksSubject.next(this.books);
  }

  deleteBook(book: Book) {
    const index = this.books.findIndex((b) => b === book);
    this.books.splice(index, 1);

    this.booksSubject.next(this.books);
  }

  editBook(book: Book, editedBook: Book) {
    const index = this.books.findIndex((b) => b === book);
    this.books.splice(index, 1, editedBook);

    this.booksSubject.next(this.books);
  }
}
