import { Component, Input } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  @Input() isVisible: boolean = false;

  constructor(private booksService: BooksService) {}

  handleOk(): void {

    console.log(this.booksService);




    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
