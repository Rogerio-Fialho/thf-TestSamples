import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ThfComboOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-combo-scheduling',
  templateUrl: './sample-thf-combo-scheduling.component.html'
})
export class SampleThfComboSchedulingComponent implements OnInit {

  birthday: string;
  email: string;
  especialities: Array<ThfComboOption>;
  especiality: string;
  informations: string;
  name: string;
  phone: string;
  typeScheduling: string;

  readonly typeSchedulings: Array<ThfSelectOption> = [
    { label: 'Particular', value: 'particular' },
    { label: 'Health Insurance', value: 'healthInsurance' },
  ];

  @ViewChild('schedulingForm') form: NgForm;

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.especialities = this.getEspecialities();
  }

  confirmPreAppointment(name: string = '') {
    this.thfNotification.success(`Great ${name}, your pre-appointment was successfully received!`);

    this.form.reset();
  }

  private getEspecialities() {
    return [
      { label: 'Allergist', value: 'allergist' },
      { label: 'Cardiologist', value: 'cardiologist' },
      { label: 'General practitioner', value: 'generalPractitioner' },
      { label: 'Dermatologist', value: 'dermatologist' },
      { label: 'Gynecologist', value: 'gynecologist' },
      { label: 'Nutritionist', value: 'nutritionist' },
      { label: 'Pediatrist', value: 'pediatrist' },
      { label: 'Psychiatrist', value: 'psychiatrist' },
      { label: 'Orthopaedist', value: 'orthopaedist' }
    ];
  }

}

