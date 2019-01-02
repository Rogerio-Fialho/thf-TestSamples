import { Component } from '@angular/core';

import { SampleThfLookupService } from '../sample-thf-lookup.service';

@Component({
  selector: 'sample-thf-lookup-basic',
  templateUrl: './sample-thf-lookup-basic.component.html',
  providers: [ SampleThfLookupService ]
})
export class SampleThfLookupBasicComponent {

  constructor(public filterService: SampleThfLookupService) { }

}

lient: HttpClient) { }

  getFilteredData(filter: string, page: number, pageSize: number): Observable<any> {
    return this.httpClient.get(this.url, { params: { page: page.toString(), pageSize: pageSize.toString(), filter } });
  }

  getObjectByValue(value: string): Observable<any> {
    return this.httpClient.get(`${this.url}/${value}`);
  }

}

