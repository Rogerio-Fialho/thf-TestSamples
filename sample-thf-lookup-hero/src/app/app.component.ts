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

ane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  constructor(public service: SampleThfLookupService, public notification: ThfNotificationService) { }

  fieldFormat(value) {
    return `${value.nickname} - ${value.label}`;
  }

  startMission() {
    if (this.hero.length % 2 === 0) {
      this.notification.success(`Mission started with hero ${this.hero} ${this.vehicle ? 'with vehicle: ' + this.vehicle : ''}.`);
    } else {
      this.notification.error(`Choose another hero because ${this.hero} is in other mission.`);
    }

    this.hero = undefined;
    this.vehicle = undefined;
  }

}

