import { Component, OnInit } from '@angular/core';

import { ThfNotificationService } from '@totvs/thf-ui/services/thf-notification';

@Component({
  selector: 'sample-thf-dropdown-social-network',
  templateUrl: './sample-thf-dropdown-social-network.component.html'
})
export class SampleThfDropdownSocialNetworkComponent implements OnInit {

  currentFriend: object;
  userAvatar: string = 'https://lorempixel.com/144/144/';

  public readonly answers: Array<object> = [
    { label: 'Confirm', action: this.notification.bind(this, 'added', 'success') },
    { label: 'Ignore', action: this.notification.bind(this, 'ignored', 'warning') },
    { label: 'Block', action: this.notification.bind(this, 'blocked', 'information') }
  ];

  public readonly newFriends: Array<object> = [
    { name: 'Mr. Dev Totvs', mutualFriends: '7', reside: 'Mountain View, CA' },
    { name: 'Mr. AI Totvs', mutualFriends: '99+', reside: 'New York City, NY' },
    { name: 'Mr. UX Totvs', mutualFriends: '14', reside: 'Los Angeles, CA' }
  ];

  private indexFriend: number = 0;

  constructor(private thfNotification: ThfNotificationService) { }

  ngOnInit() {
    this.setCurrentFriend(0);
  }

  private notification(action: string, notificationType: string) {
    this.thfNotification[notificationType](`User ${action} successfully!`);

    this.indexFriend++;
    this.setCurrentFriend(this.indexFriend);
  }

  private setCurrentFriend(index: number) {
    this.currentFriend = this.newFriends[index];
  }

}

