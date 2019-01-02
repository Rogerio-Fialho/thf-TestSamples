import { Component, ElementRef, ViewChild } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Component({
  selector: 'sample-thf-url-shortener',
  templateUrl: './sample-thf-url-shortener.component.html'
})
export class SampleThfUrlShortenerComponent {

  baseUrls: Array<any> = [];
  shortenedUrl: string;
  url: string;

  public readonly urlColumns: Array<ThfTableColumn> = [
    { column: 'url', label: 'Long URL' },
    { column: 'short', label: 'Shortened URL' }
  ];

  @ViewChild('boxUrl', { read: ElementRef }) boxUrlElement;

  constructor(private thfNotification: ThfNotificationService) { }

  copyToClipboard() {
    this.boxUrlElement.nativeElement.querySelector('input').select();
    document.execCommand('copy');
    this.thfNotification.success('Text copied!');
  }

  shortenUrl() {
    const urlBase64 = btoa(this.url.replace(/http|www|com|br|\/|\./gi, '').trim());

    this.shortenedUrl = `thf.com/${urlBase64.substr(urlBase64.length - 3)}` + this.baseUrls.length;
    this.baseUrls.push({ url: this.url, short: this.shortenedUrl });
  }

}

