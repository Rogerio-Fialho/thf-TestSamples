import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subscription } from 'rxjs';

import { ThfHttpRequestInterceptorService } from '@totvs/thf-ui/interceptors/thf-http-request';

@Component({
  selector: 'sample-thf-http-request-interceptor-labs',
  templateUrl: './sample-thf-http-request-interceptor-labs.component.html'
})
export class SampleThfHttpRequestInterceptorLabsComponent implements OnInit, OnDestroy {

  countPendingRequestHeaderParam = false;
  screenLockHeaderParam = false;

  pendingRequests: number = 0;
  url: string = '';

  private subscription: Subscription;
  private apiSubscription: Subscription;

  constructor(
    private http: HttpClient,
    private httpRequestInterceptor: ThfHttpRequestInterceptorService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();

    if (this.apiSubscription) {
      this.apiSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.subscription = this.httpRequestInterceptor.getCountPendingRequests().subscribe(data => {
      this.pendingRequests = data;
    });
  }

  getRequest() {
    const headers = {
      'X-Totvs-No-Count-Pending-Requests': this.countPendingRequestHeaderParam.toString(),
      'X-Totvs-Screen-Lock': this.screenLockHeaderParam.toString()
    };

    this.apiSubscription = this.http.get(this.url, { headers: headers }).subscribe(() => {});
  }

}

