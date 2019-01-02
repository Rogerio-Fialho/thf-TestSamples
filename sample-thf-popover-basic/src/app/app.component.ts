import { Component, ElementRef, ViewChild } from '@angular/core';

import { ThfButtonComponent } from '@totvs/thf-ui/components/thf-button';

@Component({
  selector: 'sample-thf-popover-basic',
  templateUrl: './sample-thf-popover-basic.component.html',
})
export class SampleThfPopoverBasicComponent {

  @ViewChild(ThfButtonComponent, {read: ElementRef}) thfButton: ThfButtonComponent;

}

