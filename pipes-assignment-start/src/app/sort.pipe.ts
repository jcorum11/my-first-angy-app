import { Pipe, PipeTransform } from "@angular/core";

type Server = {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
};

@Pipe({
  name: "sort",
})
export class SortPipe implements PipeTransform {
  transform(
    value: Server[],
    attribute: string,
  ): Server[] {
    console.log(value[attribute])
    // TODO: move if statement into sort method
    if (typeof value[attribute] === 'string') {
      value.sort((a: Server, b: Server) => {
        let x = a[attribute].toLowerCase()
        let y = b[attribute].toLowerCase()
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0
      });
      console.log(value)
      return value
    }
    if (typeof value[attribute] === 'number') {
      value.sort((a: Server, b: Server) => {return a[attribute] - b[attribute]})
      return value
    }
  }
}
