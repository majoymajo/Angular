import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'majo'
})
export class MajoPipe implements PipeTransform {

  transform(value: string  , ...args: unknown[]): unknown {
    return value.replace(" ","");
  }

}
