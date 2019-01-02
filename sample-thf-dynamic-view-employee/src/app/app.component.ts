import { Component } from '@angular/core';

import { ThfDynamicViewField } from '@totvs/thf-ui/components/thf-dynamic';

@Component({
  selector: 'sample-thf-dynamic-view-employee',
  templateUrl: './sample-thf-dynamic-view-employee.component.html'
})
export class SampleThfDynamicViewEmployeeComponent {

  fields: Array<ThfDynamicViewField> = [
    { property: 'name', divider: 'Personal data', gridColumns: 4 },
    { property: 'age', label: 'Age', gridColumns: 4 },
    { property: 'genre', gridColumns: 4 },
    { property: 'cpf', label: 'CPF', gridColumns: 4 },
    { property: 'rg', label: 'RG', gridColumns: 4 },
    { property: 'graduation', label: 'Graduation', gridColumns: 4 },
    { property: 'company', label: 'Company', divider: 'Work Data' },
    { property: 'job', tag: true },
    { property: 'admissionDate', label: 'Admission date', type: 'date' },
    { property: 'hoursPerDay', label: 'Hours per day', type: 'time'},
    { property: 'wage', label: 'Wage', type: 'currency' },
    { property: 'city', label: 'City' , divider: 'Address' },
    { property: 'addressStreet', label: 'Street' },
    { property: 'addressNumber', label: 'Number' },
    { property: 'zipCode', label: 'Zip Code' },
  ];

  employee = {
    name: 'Jhon Doe',
    age: '20',
    rg: '9999999',
    email: 'jhon.doe@totvs.com',
    cpf: '999.999.999-99',
    birthday: '1998-03-14T00:00:01-00:00',
    graduation: 'College Degree',
    genre: 'male',
    company: 'TOTVS',
    job: 'Software Engineer',
    addressStreet: 'Avenida Braz Leme',
    addressNumber: '1000',
    zipCode: '02511-000',
    city: 'São Paulo',
    wage: 8000.50,
    admissionDate: '2014-10-14T13:45:00-00:00',
    hoursPerDay: '08:30:00',
  };

}

