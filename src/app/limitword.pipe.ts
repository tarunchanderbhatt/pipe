import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "limitword"
})
export class LimitwordPipe implements PipeTransform {
  transform(value: any, limit: string, symbole: string): any {
    let limitChar = limit != null ? parseInt(limit) : 10;
    let symbolString = symbole != null ? symbole : "........";
    console.log(limitChar);
    console.log(symbolString);
    return value.length > limitChar
      ? value.substring(0, limitChar) + symbolString
      : value;
  }
}
