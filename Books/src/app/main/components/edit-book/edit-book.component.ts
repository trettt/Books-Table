import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service';
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  @Input() editVisible = false;
  @Input() bookToEdit?:Book;

  @Output() editVisibleChange = new EventEmitter<boolean>();

  editBookForm!: FormGroup;

  constructor(private booksService: BooksService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.editBookForm = new FormGroup({
      name: new FormControl(this.bookToEdit?.name, [Validators.required]),
      author: new FormControl(this.bookToEdit?.author, [Validators.required]),
      numberOfPages: new FormControl(this.bookToEdit?.numberOfPages, [Validators.required]),
      isRead: new FormControl(this.bookToEdit?.isRead),
      rating: new FormControl(this.bookToEdit?.rating),
    });
  }

  get name(): FormControl {
    return this.editBookForm.get('name') as FormControl;
  }
  get author(): FormControl {
    return this.editBookForm.get('author') as FormControl;
  }
  get numberOfPages(): FormControl {
    return this.editBookForm.get('numberOfPages') as FormControl;
  }
  get isRead(): FormControl {
    return this.editBookForm.get('isRead') as FormControl;
  }
  get rating(): FormControl {
    return this.editBookForm.get('rating') as FormControl;
  }

  handleOk(): void {
    const editedBook: Book = this.editBookForm.value as Book;
    if (editedBook.isRead===false){
      editedBook.rating='?';
    }

    if (this.bookToEdit) {
      this.booksService.editBook(this.bookToEdit, editedBook);
    }

    this.editVisibleChange.emit(false);
  }

  handleCancel(): void {
    this.editVisibleChange.emit(false);
  }
}
