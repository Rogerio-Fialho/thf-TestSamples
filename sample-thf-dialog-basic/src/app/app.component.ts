import { Component } from '@angular/core';

import { ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';

@Component({
  selector: 'sample-thf-dialog-basic',
  templateUrl: './sample-thf-dialog-basic.component.html',
})
export class SampleThfDialogBasicComponent {

  constructor(public thfDialog: ThfDialogService) { }

}

