import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse"
})
export class ReversePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    let mystring = "";
    for (let i = value.length - 1; i >= 0; i--) {
      mystring += value.charAt(i);
    }

    return mystring;
  }
}
