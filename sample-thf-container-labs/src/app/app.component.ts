import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-container-labs',
  templateUrl: './sample-thf-container-labs.component.html',
})
export class SampleThfContainerLabsComponent implements OnInit {

  content: string;
  height: number;
  properties: Array<string>;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'noShadow', label: 'No Shadow' },
    { value: 'noPadding', label: 'No Padding' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.content = undefined;
    this.height = undefined;
    this.properties = [];
  }

}

