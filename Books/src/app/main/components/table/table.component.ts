import { Component, OnInit } from '@angular/core';
import { Book } from '../../interfaces/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  books: Book[] = [];
  isVisible = false;

  constructor(private booksService: BooksService) {}

  showModal():void{
    this.isVisible = true;
  }

  ngOnInit(): void {
    this.books = this.booksService.getBooks().subscribe();
  }
}
