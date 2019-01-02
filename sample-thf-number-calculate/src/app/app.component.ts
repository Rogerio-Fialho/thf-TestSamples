import { Component } from '@angular/core';

import { ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-number-calculate',
  templateUrl: './sample-thf-number-calculate.component.html'
})
export class SampleThfNumberCalculateComponent {

  icms: number;
  liquid: number;
  price: number;
  quantity: number;
  state: number;
  total: number;

  public readonly statesOptions: Array<ThfSelectOption> = [
    { value: 18, label: 'São Paulo' },
    { value: 17, label: 'Alagoas' },
    { value: 15, label: 'Ceará' }
  ];

  calculate() {
    const realPrice = this.price * this.quantity;
    this.liquid = realPrice;
    this.total = realPrice + (realPrice * (this.state / 100));
  }

  loadICMS() {
    this.icms = this.state;
  }

}

