import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static canContainsWhiteSpace(
    control: AbstractControl
  ): ValidationErrors | null {
    const valueOfControl: string = control.value;
    const limitOfInputUserName = -1;
    if (valueOfControl.indexOf(' ') != limitOfInputUserName) {
      return {
        requiredNoWhiteSpace: "Votre entree ne doit pas avoir d'espace",
      };
    }
    return null;
  }
}
