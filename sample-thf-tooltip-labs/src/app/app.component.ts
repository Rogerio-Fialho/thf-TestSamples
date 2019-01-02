import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-tooltip-labs',
  templateUrl: './sample-thf-tooltip-labs.component.html'
})
export class SampleThfTooltipLabsComponent implements OnInit {

  tooltip: string;
  tooltipPosition: string;

  public readonly tooltipPositionOptions: Array<ThfCheckboxGroupOption> = [
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' }
  ];

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.tooltip = '';
    this.tooltipPosition = undefined;
  }

}

