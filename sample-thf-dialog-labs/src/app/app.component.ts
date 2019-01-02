import { Component, OnInit } from '@angular/core';

import { ThfCheckboxGroupOption, ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';
import { ThfDialogAlertLiterals, ThfDialogConfirmLiterals, ThfDialogService } from '@totvs/thf-ui/services/thf-dialog';

@Component({
  selector: 'sample-thf-dialog-labs',
  templateUrl: './sample-thf-dialog-labs.component.html',
})
export class SampleThfDialogLabsComponent implements OnInit {

  action: string;
  actionOptions: Array<string>;
  dialogMethod: string;
  help: string;
  literals: string;
  literalsAlert: ThfDialogAlertLiterals;
  literalsConfirm: ThfDialogConfirmLiterals;
  message: string;
  title: string;

  public readonly dialogActionOptions: Array<ThfCheckboxGroupOption> = [
    { label: 'Ok', value: 'ok' },
    { label: 'Cancel', value: 'cancel' },
    { label: 'Confirm', value: 'confirm' },
  ];

  public readonly dialogMethodOptions: Array<ThfRadioGroupOption> = [
    { label: 'Alert', value: 'alert' },
    { label: 'Confirm', value: 'confirm' }
  ];

  constructor(private thfAlert: ThfDialogService) { }

  ngOnInit() {
    this.restore();
  }

  alertDialog() {
    this.thfAlert.alert({
      literals: this.literalsAlert,
      title: this.title,
      message: this.message,
      ok: () => this.actionOptions.includes('ok') ? this.action = 'OK' : undefined
    });
  }

  changeLiterals() {
    let literalsModel;
    try {
      literalsModel = this.literals ? JSON.parse(this.literals) : undefined;
    } catch (error) {
      literalsModel = undefined;
    }

    if (this.dialogMethod === 'alert') {
      this.literalsAlert = literalsModel;
    } else if (this.dialogMethod === 'confirm') {
      this.literalsConfirm = literalsModel;
    }
  }

  changeMethod() {
    if (this.dialogMethod === 'alert') {
      this.help = 'Ex: { "ok": "Concluído" }';
    } else {
      this.help = 'Ex: { "cancel": "Não", "confirm": "Sim" }';
    }
  }

  confirmDialog() {
    this.thfAlert.confirm({
      literals: this.literalsConfirm,
      title: this.title,
      message: this.message,
      confirm: () => this.actionOptions.includes('confirm') ? this.action = 'Confirm' : undefined,
      cancel: () => this.actionOptions.includes('cancel') ? this.action = 'Cancel' : undefined
    });
  }

  openDialog() {
    this.action = '';
    this.dialogMethod === 'alert' ? this.alertDialog() : this.confirmDialog();
  }

  restore() {
    this.action = undefined;
    this.actionOptions = [];
    this.title = 'Totvs Dialog';
    this.message = 'Totvs Dialog';
    this.dialogMethod = undefined;
    this.literals = undefined;
    this.literalsAlert = undefined;
    this.literalsConfirm = undefined;
    this.help = '';
  }

}

