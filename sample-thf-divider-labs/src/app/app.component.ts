import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sample-thf-divider-labs',
  templateUrl: './sample-thf-divider-labs.component.html',
})
export class SampleThfDividerLabsComponent implements OnInit {

  label: string;

  ngOnInit() {
    this.restore();
  }

  restore() {
    this.label = undefined;
  }

}

