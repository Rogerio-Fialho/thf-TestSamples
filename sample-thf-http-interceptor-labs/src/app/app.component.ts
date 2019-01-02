import { Component, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-http-interceptor-labs',
  templateUrl: './sample-thf-http-interceptor-labs.component.html'
})
export class SampleThfHttpInterceptorLabsComponent implements OnDestroy {

  text = 'Mensagem';
  code = '000';
  help = 'http://thf.totvs.com.br';
  type = 'success';
  status = 200;
  noErrorHeaderParam = false;

  private apiSubscription: Subscription;

  typeOptions: Array<ThfRadioGroupOption> = [
    { label: 'Sucesso', value: 'success' },
    { label: 'Erro', value: 'error' },
    { label: 'Atenção', value: 'warning' },
    { label: 'Informação', value: 'information' }
  ];

  statusOptions: Array<ThfRadioGroupOption> = [
    { label: '200 - OK', value: 200 },
    { label: '201 - Criado com sucesso', value: 201 },
    { label: '401 - Não autorizado', value: 401 },
    { label: '500 - Erro interno do servidor', value: 500 }
  ];

  constructor(private http: HttpClient) { }

  ngOnDestroy() {
    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  processRequest() {
    const headers = { 'X-Totvs-No-Error': this.noErrorHeaderParam.toString() };

    this.apiSubscription = this.http.get(
      `https://thf.totvs.com.br/sample/api/message`,
      {
        headers: headers,
        params: { status: this.status.toString(), code: this.code, type: this.type, msg: this.text, help: this.help }
      }
    ).subscribe(response => { });
  }
}

