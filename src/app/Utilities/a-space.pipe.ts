import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aSpace'
})
export class ASpacePipe implements PipeTransform {

  transform(initialvalue: String,aSearch: string): unknown {
    const replace = " ";
    return initialvalue.replace(aSearch,replace)
  }

}
