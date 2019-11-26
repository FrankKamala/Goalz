import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCont'
})
export class DateContPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
