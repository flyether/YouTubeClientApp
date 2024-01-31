import {
  FormControl,
  ValidationErrors,
} from '@angular/forms';

export function DateValidator(control: FormControl): ValidationErrors | null {
  if (control.value) {
    const dateParts = control.value.split('.');
    const day = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const year = parseInt(dateParts[2], 10);

    const date = new Date(year, month, day);
    const dateNow = new Date();

    if (dateNow < date) {
      return {
        dateError: true,
      };
    }
    if (dateNow > date) {
      return null;
    }
    if (date.toString() === 'Invalid Date') {
      return {
        dateFormatError: true,
      };
    }
    if (date.toString() !== 'Invalid Date') {
      return null;
    }
  }

  return null;
}
