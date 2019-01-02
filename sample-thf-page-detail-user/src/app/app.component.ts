import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';

@Component({
  selector: 'sample-thf-page-detail-user',
  templateUrl: './sample-thf-page-detail-user.component.html'
})
export class SampleThfPageDetailUserComponent {

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@totvs.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'John';
  placeOfBirth: string = 'Colorado';
  userId: number = 122635;

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'User Detail' }
    ]
  };

  constructor(private router: Router) { }

  edit() {
    this.router.navigate(['/documentation/thf-page-edit'], { queryParams: { view: 'web' } });
  }

}

