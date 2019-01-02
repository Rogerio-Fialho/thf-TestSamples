import { Component, OnInit } from '@angular/core';

import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfTagOrientation, ThfTagType } from '@totvs/thf-ui/components/thf-tag';

@Component({
  selector: 'sample-thf-tag-labs',
  templateUrl: './sample-thf-tag-labs.component.html',
})
export class SampleThfTagLabsComponent implements OnInit {

  icon: boolean;
  label: string;
  orientation: ThfTagOrientation;
  type: ThfTagType;
  value: string;

  public readonly orientationOptions: Array<ThfRadioGroupOption> = [
    { label: 'Horizontal', value: ThfTagOrientation.Horizontal },
    { label: 'Vertical', value: ThfTagOrientation.Vertical }
  ];

  public readonly typeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Info', value: ThfTagType.Info },
    { label: 'Danger', value: ThfTagType.Danger },
    { label: 'Success', value: ThfTagType.Success },
    { label: 'Warning', value: ThfTagType.Warning }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.icon = undefined;
    this.label = undefined;
    this.orientation = undefined;
    this.value = 'Totvs Tag';
    this.type = undefined;
  }

}

