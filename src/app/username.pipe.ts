import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'username'
})
export class UsernamePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    return  "Mr / Ms  "  + value + "......";
  }

}
