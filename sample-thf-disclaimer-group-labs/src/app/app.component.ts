import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfDisclaimer } from '@totvs/thf-ui/components/thf-disclaimer';

@Component({
  selector: 'sample-thf-disclaimer-group-labs',
  templateUrl: './sample-thf-disclaimer-group-labs.component.html'
})
export class SampleThfDisclaimerGroupLabsComponent implements OnInit {

  disclaimer: ThfDisclaimer;
  disclaimers: Array<ThfDisclaimer>;
  event: string;
  properties: Array<string> = [];
  title: string;

  readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'hideRemoveAll', label: 'Hide remove all' }
  ];

  ngOnInit() {
    this.restore();
  }

  addDisclaimer() {
    this.disclaimers = [...this.disclaimers, this.disclaimer];

    this.disclaimer = { value: undefined };
  }

  changeEvent(event: string) {
    this.event = event;
  }

  restore() {
    this.disclaimer = { value: undefined };
    this.disclaimers = [];

    this.event = '';
  }
}

