import { Component } from '@angular/core';

import { ThfButtonGroupItem } from '@totvs/thf-ui/components/thf-button-group';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-button-group-attendance',
  templateUrl: './sample-thf-button-group-attendance.component.html'
})
export class SampleThfButtonGroupAttendanceComponent {

  attendances: Array<ThfButtonGroupItem> = [
    { label: 'Appointment', icon: 'thf-icon-calendar', action: this.getPassword },
    { label: 'Emergency', icon: 'thf-icon-injector', action: this.getPassword },
    { label: 'Exams', icon: 'thf-icon-exam', action: this.getPassword }
  ];

  constructor(private thfNotification: ThfNotificationService) { }

  getPassword(attendance) {
    const password = this.randomPassword();
    const typeNotification = this.getTypeNotification(attendance.label);

    this.thfNotification[typeNotification](`
      Type of attendance: ${attendance.label} -
      Your password: ${password}
    `);
  }

  getTypeNotification(label: string = ''): string {
    switch (label) {
      case 'Emergency':
        return 'error';
      case 'Appointment':
        return 'information';
      case 'Exams':
        return 'success';
    }
  }

  randomPassword() {
    return Math.random().toString().slice(2, 5);
  }

}

