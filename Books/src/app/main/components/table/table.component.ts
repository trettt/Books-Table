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
  isVisible = false;

  constructor(private booksService: BooksService,
    private route:ActivatedRoute,
    private router:Router) {
      this.route.queryParams.subscribe((res)=>{
        console.log(res);
      });
      this.booksService.booksSubject.subscribe((res)=>{
        this.books=[...res];
        console.log("in subscribe");
      })
    }


  ngOnInit(): void {
   this.books=this.booksService.getBooks();
   console.log(this.books);
  }

  editBook(book:Book){
      console.log(book);
  }

  deleteBook(book:Book){
    this.booksService.deleteBook(book);
  }
}
