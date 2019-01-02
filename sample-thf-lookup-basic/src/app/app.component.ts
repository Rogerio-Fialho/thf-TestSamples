import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ThfLookupFilter } from '@totvs/thf-ui/components/thf-field';

@Injectable()
export class SampleThfLookupService implements ThfLookupFilter {

  private url = 'https://thf.totvs.com.br/sample/api/comboOption/heroes';

  constructor(private httpClient: HttpClient) { }

  getFilteredData(filter: string, page: number, pageSize: number): Observable<any> {
    return this.httpClient.get(this.url, { params: { page: page.toString(), pageSize: pageSize.toString(), filter } });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(`${this.url}/${value}`);
  }

}

