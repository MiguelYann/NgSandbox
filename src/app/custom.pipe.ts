import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: any) {
    if (!value) {
      return null;
    }

    return value.substring(0, 50) + "...";
  }
}
