import { Component } from '@angular/core';

import { ThfMultiselectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-multiselect-basic',
  templateUrl: './sample-thf-multiselect-basic.component.html'
})
export class SampleThfMultiselectBasicComponent {

  options: Array<ThfMultiselectOption> = [
    { value: 'totvsMultiselect1', label: 'Totvs Multiselect 1' },
    { value: 'totvsMultiselect2', label: 'Totvs Multiselect 2' }
  ];

}

