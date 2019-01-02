import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SampleThfSelectCustomerRegistrationService {

  private url: string = 'https://thf.totvs.com.br/sample/api/sampleSelect/';

  constructor(private http: HttpClient) { }

  getCitiesByState(uf: string) {
    return this.http.get(`${this.url}/getCities/${uf}`);
  }

  getStates() {
   return this.http.get(`${this.url}/getStates`);
  }

}

 [ SampleThfSelectCustomerRegistrationService ],
  styles: [`
    .sample-select-option-template-container {
      display: inline-flex;
      align-items: flex-start;
      width: 100%;
    }

    .sample-select-option-template-margin {
      margin: 5px;
    }

    .sample-select-option-template-label {
      font-size: 16px;
    }

    .sample-select-option-template-value {
      font-size: 12px;
      text-transform: uppercase;
    }
  `]
})
export class SampleThfSelectCustomerRegistrationComponent implements OnDestroy, OnInit {

  address: string;
  city: number;
  cityOptions: Array<ThfSelectOption>;
  document: string;
  documentLabel;
  documentType: string;
  mask: string;
  minLength: number;
  name: string;
  nameLabel: string;
  state: string;
  stateOptions: Array<ThfSelectOption>;

  private citiesSubscription: Subscription;
  private statesSubscription: Subscription;

  readonly options: Array<ThfRadioGroupOption> = [
    {label: 'CPF', value: 'CPF'},
    {label: 'CNPJ', value: 'CNPJ'}
  ];

  constructor(private sampleService: SampleThfSelectCustomerRegistrationService) { }

  ngOnDestroy() {
    this.citiesSubscription.unsubscribe();
    this.statesSubscription.unsubscribe();
  }

  ngOnInit() {
    this.initialize();
    this.getStates();
    this.changeType(this.documentType);
  }

  changeType(documentType) {
    if (documentType === 'CPF') {
      this.documentLabel = 'CPF Number';
      this.mask = '999.999.999-99';
      this.minLength = 14;
      this.nameLabel = 'Client Name';
    } else {
      this.documentLabel = 'CNPJ Number';
      this.mask = '99.999.999/9999-99';
      this.minLength = 18;
      this.nameLabel = 'Company Name';
    }

    this.address = '';
    this.document = '';
    this.name = '';
  }

  initialize() {
    this.cityOptions = [];
    this.stateOptions = [];
    this.documentType = 'CPF';
  }

  onChangeState() {
    this.getCitiesByState(this.state);
  }

  getCityByValue(cityValue: number) {
    const cityLabel = this.cityOptions.find(city => city.value === cityValue);
    return cityLabel ? cityLabel.label : '';
  }

  getStateByValue(stateValue: string) {
    const stateLabel = this.stateOptions.find(state => state.value === stateValue);
    return stateLabel ? stateLabel.label : '';
  }

  private getCitiesByState(state: string) {
    this.citiesSubscription = this.sampleService.getCitiesByState(state).subscribe((cities: Array<ThfSelectOption>) => {
      this.cityOptions = cities;
      this.city = this.cityOptions[0].value as number;
    });
  }

  private getStates() {
    this.statesSubscription = this.sampleService.getStates().subscribe((states: Array<ThfSelectOption>) => {
      this.stateOptions = states;
      this.state = 'sp';

      this.getCitiesByState(this.state);
    });
  }

}

