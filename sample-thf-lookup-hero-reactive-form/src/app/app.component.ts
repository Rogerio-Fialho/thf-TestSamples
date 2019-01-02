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

ro' },
    { column: 'label', label: 'Name' }
  ];

  public readonly vehicles: Array<ThfSelectOption> = [
    { label: 'Airplane', value: 'airplane' },
    { label: 'Boat', value: 'boat' },
    { label: 'Car', value: 'car' },
    { label: 'Helicopter', value: 'helicopter' },
    { label: 'Motorcycle', value: 'motorcycle' },
    { label: 'Rocket', value: 'rocket' },
    { label: 'Spaceship', value: 'spaceship' },
    { label: 'Submarine', value: 'submarine' },
    { label: 'Truck', value: 'truck' }
  ];

  constructor(
    public service: SampleThfLookupService,
    public notification: ThfNotificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formMission = this.formBuilder.group({
      hero: [null, Validators.required],
      vehicle: [null, Validators.required]
    });
  }

  fieldFormat(value) {
    return `${value.nickname} - ${value.label}`;
  }

  startMission() {
    const heroName = this.formMission.get('hero').value;
    const heroVehicle = this.formMission.get('vehicle').value;

    if (heroName.length % 2 === 0) {
      this.notification.success(`Mission started with hero ${heroName} ${heroVehicle ? 'with vehicle: ' + heroVehicle : ''}.`);

    } else {
      this.notification.error(`Choose another hero because ${heroName} is in other mission.`);
    }

    this.formMission.reset();
  }

}

