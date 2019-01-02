import { Component, OnInit } from '@angular/core';

import { ThfInfoOrientation } from '@totvs/thf-ui/components/thf-info';
import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
 selector: 'sample-thf-info-labs',
 templateUrl: './sample-thf-info-labs.component.html',
})
export class SampleThfInfoLabsComponent implements OnInit {

  label: string;
  labelSize: number;
  orientation: ThfInfoOrientation;
  value: string;

  public readonly orientationOptions: Array<ThfRadioGroupOption> = [
    { label: 'Horizontal', value: ThfInfoOrientation.Horizontal },
    { label: 'Vertical', value: ThfInfoOrientation.Vertical }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = 'Totvs Info';
    this.labelSize = undefined;
    this.orientation = undefined;
    this.value = undefined;
  }

}

