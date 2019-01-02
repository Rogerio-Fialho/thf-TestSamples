import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ThfComboFilter, ThfComboOption } from '@totvs/thf-ui/components/thf-field';

@Injectable()
export class SampleThfComboHotelsService implements ThfComboFilter {

  private url: string = 'https://thf.totvs.com.br/sample/api/new/hotels';

  constructor(private http: HttpClient) { }

  getFilteredData(param, filterParams?: any): Observable<Array<ThfComboOption>> {

    const params = { name: param.value };

    return this.http
      .get(this.url, { params })
      .pipe(map((response: any) => {
        const arrayFilter = filterParams ? response.items.filter(hotel => hotel.category === 'Luxo') : response.items;
        return this.convertToArrayComboOption(arrayFilter);
      }));
  }

  getObjectByValue(value): Observable<ThfComboOption> {
    return this.http
      .get(`${this.url}/${value}`)
      .pipe(map(item => this.convertToThfComboOption(item)));
  }

  private convertToArrayComboOption(items: Array<any>): Array<ThfComboOption> {

    if (items && items.length > 0) {
      return items.map(item => this.convertToThfComboOption(item));
    }

    return [];
  }

  private convertToThfComboOption(item): ThfComboOption {
    item = item || {};

    return {
      value: item['id'] || undefined,
      label: item['name'] || undefined
    };
  }

}

ooked successfully');

    this.formReset();
  }

  private formReset() {

    this.form.reset({
      adults: 1,
      category: false,
      children: 0,
      rooms: 1
    });
  }
}

