import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
  handleError(e: any) {
    alert('Unepexted error');
    console.log(e);
  }
}
