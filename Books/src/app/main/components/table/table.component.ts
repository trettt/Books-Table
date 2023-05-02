import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  books: Book[] = [];
  addVisible = false;
  editVisible = false;

  bookToEdit?:Book;

  constructor(private booksService: BooksService,
    private route:ActivatedRoute,
    private router:Router) {
      this.route.queryParams.subscribe();
      this.booksService.booksSubject.subscribe((res)=>{
        this.books=[...res];
      })
    }


  ngOnInit(): void {
   this.books=this.booksService.getBooks();
  }

  editBook(book:Book){
      this.bookToEdit=book;
      this.editVisible=true;
  }

  deleteBook(book:Book){
    this.booksService.deleteBook(book);
  }
}
