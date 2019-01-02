import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';
import { ThfI18nService } from '@totvs/thf-ui/services/thf-i18n';
import { ThfPageLoginCustomField, ThfPageLoginLiterals } from '@totvs/thf-templates/components/thf-page-login';

@Component({
  selector: 'sample-thf-page-login-human-resources',
  templateUrl: './sample-thf-page-login-human-resources.component.html',
})
export class SampleThfPageLoginHumanResourcesComponent implements OnDestroy, OnInit {

  customField: ThfPageLoginCustomField = {
    property: 'domain',
    placeholder: 'Enter your domain'
  };

  literalsI18n: ThfPageLoginLiterals;
  loading: boolean = false;

  private i18nSubscription: Subscription;

  constructor(
    private thfI18nService: ThfI18nService,
    private thfDialog: ThfDialogService) { }

  ngOnDestroy() {
    this.i18nSubscription.unsubscribe();
  }

  ngOnInit() {
    this.i18nSubscription = this.thfI18nService.getLiterals().subscribe(literals => {
      this.literalsI18n = literals;
    });
  }

  checkLogin(formData) {
    this.loading = true;

    setTimeout(() => {
      if (formData.login === 'devtotvs' && formData.password === '1986') {
        this.thfDialog.alert({
          ok: () => this.loading = false,
          title: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });

      } else {
        this.thfDialog.alert({
          ok: () => this.loading = false,
          title: 'Access denied',
          message: 'Invalid access data!'

        });
      }
    }, 3000);

  }

}

