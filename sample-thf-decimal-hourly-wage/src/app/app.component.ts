import { Component } from '@angular/core';

@Component({
  selector: 'sample-thf-decimal-hourly-wage',
  templateUrl: './sample-thf-decimal-hourly-wage.component.html'
})
export class SampleThfDecimalHourlyWageComponent {

  hourlyWage: number;
  quantityDaysPerMonth: number;
  salary: number;
  weekHours: number;
  workingDaysPerWeek: number;

  calculate() {
    const hours = this.weekHours / this.workingDaysPerWeek * this.quantityDaysPerMonth;
    const salary = this.salary / hours;
    this.hourlyWage = salary;
  }

}

