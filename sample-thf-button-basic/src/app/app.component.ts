import { Component } from '@angular/core';

@Component({
  selector: 'sample-thf-button-basic',
  templateUrl: './sample-thf-button-basic.component.html',
})
export class SampleThfButtonBasicComponent {

  onClick() {
    alert('Thf Button!');
  }

}

