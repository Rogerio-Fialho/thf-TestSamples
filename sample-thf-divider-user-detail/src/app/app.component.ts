import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ThfBreadcrumb } from '@totvs/thf-ui/components/thf-breadcrumb';

@Component({
  selector: 'sample-thf-divider-user-detail',
  templateUrl: './sample-thf-divider-user-detail.component.html',
})
export class SampleThfDividerUserDetailComponent {

  birthDate: string = '26/12/1978';
  email: string = 'john.doe@totvs.com.br';
  fathersName: string = 'Mike Doe';
  genre: string = 'male';
  graduation: string = 'College Degree';
  mothersName: string = 'Jane Doe';
  name: string = 'John Doe';
  nationality: string = 'USA';
  nickname: string = 'Big John';
  placeOfBirth: string = 'Colorado';
  statusValue: string = 'Success';
  userId: number = 122635;

  public readonly breadcrumb: ThfBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'User Detail' }
    ]
  };

  constructor(private router: Router) { }

}

