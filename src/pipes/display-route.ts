import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayRoute'
})
export class DisplayRoutePipe implements PipeTransform {
  transform(v: string) {
    // Convert path to string
    // i.e. /action-sheets/basic becomes Action Sheets: Basic
    v = v.replace("/", "").replace("/", ": ").replace("-", " ");
    v = this.capitalize(v);

    return v;
  }

  capitalize(value) {
    return value.toLowerCase().replace(/\b\w/g, function (m) {
      return m.toUpperCase();
    });
  }
}
