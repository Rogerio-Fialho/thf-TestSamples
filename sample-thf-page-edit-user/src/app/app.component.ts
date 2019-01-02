import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';
import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-page-edit-user',
  templateUrl: './sample-thf-page-edit-user.component.html'
})
export class SampleThfPageEditUserComponent implements OnInit {

  birthDate: Date;
  email: string;
  fathersName: string;
  genre: string;
  graduation: string;
  mothersName: string;
  name: string;
  nationality: string;
  nickname: string;
  placeOfBirth: string;
  userId: number;

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', action: this.beforeRedirect.bind(this) },
      { label: 'User Edit' }
    ]
  };

  @ViewChild('formEditUser') formEditUser: NgForm;

  constructor(
    private route: Router,
    private thfDialog: ThfDialogService,
    private thfNotification: ThfNotificationService
  ) { }

  ngOnInit() {
    this.initialize();
  }

  cancel() {
    this.initialize();
  }

  initialize() {
    this.birthDate = new Date(1978, 11, 26);
    this.email = 'john.doe@totvs.com.br';
    this.fathersName = 'Mike Doe';
    this.genre = 'male';
    this.graduation = 'College Degree';
    this.mothersName = 'Jane Doe';
    this.name = 'John Doe';
    this.nationality = 'USA';
    this.nickname = 'John';
    this.placeOfBirth = 'Colorado';
    this.userId = 122635;
  }

  save() {
    this.thfNotification.success(`Save successfully`);
  }

  private beforeRedirect(itemBreadcrumbLabel) {

    if (this.formEditUser.valid) {
      this.route.navigate(['/']);
    } else {

      this.thfDialog.confirm({
        title: `Confirm redirect to ${itemBreadcrumbLabel}`,
        message: `There is data that has not been saved yet. Are you sure you want to quit?`,
        confirm: () => this.route.navigate(['/'])
      });

    }

  }

}

