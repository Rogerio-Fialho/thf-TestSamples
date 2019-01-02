import { Component } from '@angular/core';

import { ThfDynamicFormField } from '@totvs/thf-ui/components/thf-dynamic';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-dynamic-form-register',
  templateUrl: './sample-thf-dynamic-form-register.component.html'
})
export class SampleThfDynamicFormRegisterComponent {

  person = {};

  fields: Array<ThfDynamicFormField> = [
    { property: 'name', required: true, minLength: 4, maxLength: 50, gridColumns: 6, gridSmColumns: 12 },
    { property: 'cpf', label: 'CPF', mask: '999.999.999-99', gridColumns: 6 },
    { property: 'birthday', type: 'date', gridColumns: 6 },
    { property: 'genre', gridColumns: 6, options: ['Male', 'Female', 'Other'] },
    { property: 'email', divider: 'CONTACTS', gridColumns: 6 },
    { property: 'phone', mask: '(99) 99999-9999', gridColumns: 6 },
    { property: 'address', gridColumns: 6 },
    { property: 'addressNumber', label: 'Address number', type: 'number', gridColumns: 6 },
    { property: 'state', gridColumns: 6, options: [
      { label: 'Santa Catarina', value: 1 },
      { label: 'São Paulo', value: 2 },
      { label: 'Rio de Janeiro', value: 3 },
      { label: 'Minas Gerais', value: 4 }
    ]},
    { property: 'entryTime', label: 'Entry time', type: 'time', divider: 'Work data', gridColumns: 6 },
    { property: 'exitTime', label: 'Exit time', type: 'time', gridColumns: 6 },
    { property: 'wage', type: 'currency', gridColumns: 6 }
  ];

  constructor(public thfNotification: ThfNotificationService) { }

}

