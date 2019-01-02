import { Component } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-loading-overlay-labs',
  templateUrl: './sample-thf-loading-overlay-labs.component.html',
  styles: [`
    .sample-container {
      position: relative;
      height: 300px;
    }
  `]
})
export class SampleThfLoadingOverlayLabsComponent {

  properties: Array<string> = [];
  text: string;

  readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'screenLock', label: 'Screen Lock' }
  ];

  onChangeCheckbox(checkbox: Array<string>) {

    if (checkbox.includes('screenLock')) {

      setTimeout(() => {

        this.properties = [];

      }, 2000);

    }
  }

}

