import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArrayValue'
})
export class ToArrayValuePipe implements PipeTransform {

  transform(value, args: string[]): any {
    if ( Array.isArray(value)) {
      return value;
    } else {
      const keys = [];
      // tslint:disable-next-line:forin
      for (const key in value) {
        keys.push(value[key]);
      }
      return keys;
    }
  }
}



