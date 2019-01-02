import { Component, ElementRef, ViewChild } from '@angular/core';

import { ThfCheckboxGroupOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-popover-labs',
  templateUrl: './sample-thf-popover-labs.component.html',
})
export class SampleThfPopoverLabsComponent {

  content: string = '';
  position: string = '';
  properties: Array<string> = [];
  title: string = '';

  public readonly positionOptions: Array<ThfRadioGroupOption> = [
    { label: 'Right', value: 'right' },
    { label: 'Right-top', value: 'right-top' },
    { label: 'Right-bottom', value: 'right-bottom' },
    { label: 'Bottom', value: 'bottom' },
    { label: 'Bottom-left', value: 'bottom-left' },
    { label: 'Bottom-right', value: 'bottom-right' },
    { label: 'Left', value: 'left' },
    { label: 'Left-top', value: 'left-top' },
    { label: 'Left-bottom', value: 'left-bottom' },
    { label: 'Top', value: 'top' },
    { label: 'Top-left', value: 'top-left' },
    { label: 'Top-right', value: 'top-right' },
  ];

  public readonly propertiesOptions: Array<ThfCheckboxGroupOption> = [
    { value: 'hideArrow', label: 'Hide arrow' }
  ];

  @ViewChild('buttonClick', {read: ElementRef}) buttonClickRef: ElementRef;
  @ViewChild('buttonHover', {read: ElementRef}) buttonHoverRef: ElementRef;

  restore() {
    this.content = '';
    this.position = undefined;
    this.properties = [];
    this.title = '';
  }

}

