import { Component } from '@angular/core';

@Component({
  selector: 'sample-thf-list',
  templateUrl: './sample-thf-list.component.html',
})
export class SampleThfListComponent {

  showMoreDisabled = false;

  data: Array<any> = [
    {
      title: 'José dos Santos', name: 'José', register: '22/03/2017', mail: 'jose.santos@email.com.br',
      updated: '22/10/2017 as 04:20', phoneNumber: '(47) 8888-8888'
    },
    {
      title: 'Maria da Silva', name: 'Maria', register: '21/03/2017', mail: 'maria.silva@email.com.br',
      updated: '16/10/2017 as 04:20', phoneNumber: '(42) 9888-9999'
    }
  ];

  data2: Array<any> = [
    { 'title': 'Marte', 'name': 'Marte' },
    { 'title': 'Plutão', 'name': 'Plutão' },
    { 'title': 'Terra', 'name': 'Terra' }];

  eventsObject: Array<any> = [{ 'label': 'Editar', 'function': 'onClick1' },
  { 'label': 'Excluir', 'function': 'onClick2' }];

  eventsObject2: Array<any> = [{ 'label': 'Editar', 'function': 'onClick1' },
  { 'label': 'Excluir', 'function': 'onClick2' },
  { 'label': 'Clonar', 'function': 'onClick3' }];

  onClick1() {
    alert('onClick1');
  }

  onClick2() {
    alert('onClick2');
  }

  onClick3() {
    alert('onClick3');
  }

  showMoreFunction() {
    this.data.push({
      title: 'Marcos Figueira', name: 'Marcos', register: '10/08/2017',
      mail: 'marcos.figueira@email.com.br', updated: '01/08/2017 as 14:28',
      phoneNumber: '(12) 9778-9985'
    });
    this.showMoreDisabled = true;
  }
}

