import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  public static numberOfPagesValidator(
    numberOfPages: FormControl
  ): ValidationErrors | null {
    if (numberOfPages.value <= 0) {
      return { tooFewPages: true };
    }
    return null;
  }

  public static ratingValidator(
    rating: FormControl
  ): ValidationErrors | null {
    if (rating.value < 0 || rating.value>5) {
      return { invalidRating: true };
    }
    return null;
  }
}
