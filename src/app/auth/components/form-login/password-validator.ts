import { FormControl, ValidationErrors } from '@angular/forms';

export function PasswordValidator(control:FormControl): ValidationErrors | null {
  const password = control.value;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#?]/.test(password);
  if (password.length < 8 || !hasSpecialChar || !hasNumber || !hasLowercase || !hasUppercase) {
    return {
      passwordmatcherror: true,
    };
  }
  if (password.length > 7 && hasSpecialChar && hasNumber && hasLowercase && hasUppercase) {
    return null;
  }

  return null;
}
