import { Injectable } from '@angular/core';

@Injectable()
export class EnumUtils {
  public static getList(e: object): any[] {
    let items = Object.keys(e).map(function (name) {
      return { name, value: e[name] };
    });
    items = items.slice(items.length / 2);
    return items;
  }

  public static getValues(e: object): any[] {
    let values = Object.keys(e).map(function (name) {
      return e[name];
    });
    values = values.slice(values.length / 2);
    return values;
  }

  public static getNames(e: object): any[] {
    let names = Object.keys(e).map(function (name) {
      return name;
    });
    names = names.slice(names.length / 2);
    return names;
  }
}