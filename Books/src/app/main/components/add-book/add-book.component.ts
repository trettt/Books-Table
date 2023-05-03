import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../../helpers/custom-validators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  @Input() addVisible = false;
  @Output() addVisibleChange = new EventEmitter<boolean>();

  addBookForm!: FormGroup;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.addBookForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      author: new FormControl(null, [Validators.required]),
      numberOfPages: new FormControl(null, [Validators.required, CustomValidators.numberOfPagesValidator]),
      isRead: new FormControl(null),
      rating: new FormControl(null, [CustomValidators.ratingValidator, Validators.required])
    });
  }

  get name(): FormControl {
    return this.addBookForm.get('name') as FormControl;
  }
  get author(): FormControl {
    return this.addBookForm.get('author') as FormControl;
  }
  get numberOfPages(): FormControl {
    return this.addBookForm.get('numberOfPages') as FormControl;
  }
  get isRead(): FormControl {
    return this.addBookForm.get('isRead') as FormControl;
  }
  get rating(): FormControl {
    return this.addBookForm.get('rating') as FormControl;
  }

  handleOk(): void {
    const newBook: Book = this.addBookForm.value as Book;
    if (newBook.isRead===false){
      newBook.rating='?';
    }
    this.booksService.addBook(newBook);

    this.addBookForm.reset();

    this.addVisibleChange.emit(false);
  }

  handleCancel(): void {
    this.addBookForm.reset();
    this.addVisibleChange.emit(false);
  }
}
