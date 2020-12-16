import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
  static shouldMatchOldPassword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    const DEFAULT_OLD_PASSWORD = '12345';
    const oldpasswordInput = control.value as string;
    const promise: Promise<ValidationErrors | null> = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          if (oldpasswordInput === DEFAULT_OLD_PASSWORD) {
            resolve(null);
          }

          resolve({
            errorOldPwdMatch: "Le mot de passe ne correspond pas a l'ancien",
          });
        }, 7000);
      }
    );

    return promise;
  }

  static shouldMatchNewPassword(
    control: AbstractControl
  ): ValidationErrors | null {
    const newPassword = control.get('newPassword');
    const confirmedPassword = control.get('confirmedPassword');

    if (newPassword?.value !== confirmedPassword?.value) {
      return {
        shouldNotPasswordMatch: true,
        message: 'Mot de passe ne correspond pas',
      };
    }

    return null;
  }
}
