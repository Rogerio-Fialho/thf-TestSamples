import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-widget-labs',
  templateUrl: './sample-thf-widget-labs.component.html',
})
export class SampleThfWidgetLabsComponent implements OnInit {

  action: string;
  background: string;
  content: string;
  height: number;
  help: string;
  primaryLabel: string;
  properties: Array<string>;
  secondaryLabel: string;
  title: string;

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'noShadow', label: 'No Shadow' },
    { value: 'primaryWidget', label: 'Primary Widget' }
  ];

  ngOnInit() {
    this.restore();
  }

  changeAction(action) {
    this.action = action;
  }

  restore() {
    this.background = '';
    this.action = '';
    this.content = '';
    this.height = undefined;
    this.help = '';
    this.title = '';
    this.primaryLabel = undefined;
    this.properties = [];
    this.secondaryLabel = undefined;
  }

}

