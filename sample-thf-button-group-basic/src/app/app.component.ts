import { Component } from '@angular/core';

import { ThfButtonGroupItem } from '@totvs/thf-ui/components/thf-button-group';

@Component({
  selector: 'sample-thf-button-group-basic',
  templateUrl: './sample-thf-button-group-basic.component.html'
})
export class SampleThfButtonGroupBasicComponent {

  buttons: Array<ThfButtonGroupItem> = [
    { label: 'Button 1', action: this.action },
    { label: 'Button 2', action: this.action }
  ];

  action(button) {
    alert(`${button.label}`);
  }

}

