import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class UserValidators {
  static checkArrobase(abstract: AbstractControl): ValidationErrors | null {
    let userEmail = abstract.value as string;

    if (userEmail.indexOf('@') === -1) {
      return {
        errorsMessage: 'Text must have @',
      };
    }
    return null;
  }
}
