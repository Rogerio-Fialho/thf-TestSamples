import { Component } from '@angular/core';

import { ThfButtonGroupItem } from '@totvs/thf-ui/components/thf-button-group';

@Component({
  selector: 'sample-thf-button-group-post',
  templateUrl: './sample-thf-button-group-post.component.html'
})
export class SampleThfButtonGroupPostComponent {

  setBold: boolean;
  setItalic: boolean;
  setTextAlignment: string;
  setUnderline: boolean;
  textArea: string = '"Luck is a thing that comes in many forms and who can recognize her?" - Ernest Hemingway';

  fontStyle: Array<ThfButtonGroupItem> = [
    { icon: 'thf-icon-text-bold', action: () => this.setBold = !this.setBold },
    { icon: 'thf-icon-text-italic', action: () => this.setItalic = !this.setItalic },
    { icon: 'thf-icon-text-underline', action: () => this.setUnderline = !this.setUnderline },
  ];

  textAlign: Array<ThfButtonGroupItem> = [
    { icon: 'thf-icon-align-left', selected: true, action: () => this.setTextAlignment = 'left' },
    { icon: 'thf-icon-align-center', action: () => this.setTextAlignment = 'center' },
    { icon: 'thf-icon-align-right', action: () => this.setTextAlignment = 'right' },
    { icon: 'thf-icon-align-justify', action: () => this.setTextAlignment = 'justify' },
  ];

}

