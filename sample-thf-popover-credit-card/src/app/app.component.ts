import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'sample-thf-popover-credit-card',
  templateUrl: './sample-thf-popover-credit-card.component.html',
})
export class SampleThfPopoverCreditCardComponent {

  public inputCardName: string;
  public inputCardCode: string;
  public inputCardValid: string;

  @ViewChild('cardname', {read: ElementRef}) cardnameref: ElementRef;
  @ViewChild('cardcode', {read: ElementRef}) cardcoderef: ElementRef;
  @ViewChild('carddate', {read: ElementRef}) carddateref: ElementRef;

}

