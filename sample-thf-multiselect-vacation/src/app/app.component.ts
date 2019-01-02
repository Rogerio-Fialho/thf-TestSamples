import { Component, OnInit } from '@angular/core';

import { ThfMultiselectOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-multiselect-vacation',
  templateUrl: './sample-thf-multiselect-vacation.component.html'
})
export class SampleThfMultiselectVacationComponent implements OnInit {

  days: number;
  employeesVacations: Array<string> = [];
  finalPeriod: Date;
  initialPeriod: Date;
  nameEmployeesVacations: string;
  startPeriod: Date;

  public readonly employees: Array<ThfMultiselectOption> = [
    { value: '412341', label: 'Alfred' },
    { value: '518734', label: 'Alice' },
    { value: '986237', label: 'Bradley' },
    { value: '941278', label: 'Jackie' },
    { value: '897643', label: 'Phillip' },
    { value: '423767', label: 'Reynold' },
    { value: '423837', label: 'Robert' }
  ];

  public daysOptions: Array<ThfRadioGroupOption> = [
    { value: 10, label: '10' },
    { value: 20, label: '20' },
    { value: 30, label: '30' }
  ];

  ngOnInit() {
    this.startPeriod = new Date();

    this.clean();
  }

  clean() {
    this.days = 20;

    this.initialPeriod = this.startPeriod;
    this.finalPeriod = undefined;

    this.employeesVacations = [];
  }

  updateNameEmployeesVacations() {
    this.nameEmployeesVacations = this.employees
      .filter((employee: ThfMultiselectOption) => this.employeesVacations.includes(<string>employee.value))
      .map((employee: ThfMultiselectOption) => employee.label)
      .join(', ');
  }

}

