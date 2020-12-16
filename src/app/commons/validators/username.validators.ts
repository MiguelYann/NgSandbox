import { AbstractControl, ValidationErrors } from '@angular/forms';
export class UsernameValidators {
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise<ValidationErrors | null>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Miguel') {
          resolve({ shouldUnique: true });
          console.log("Error")
        } else {
          resolve(null);
          console.log("Good")

        }
      }, 3000);
    });
  }
}
