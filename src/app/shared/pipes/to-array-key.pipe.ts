import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toArrayKey'
})
export class ToArrayPipe implements PipeTransform {

  transform(value, args: string[]): any {
    const keys = [];
    // tslint:disable-next-line:forin
    for (const key in value) {
      keys.push(key);
    }
    return keys;
  }

}
