import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ThfModalComponent } from '@totvs/thf-ui/components/thf-modal/thf-modal.component';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Component({
  selector: 'sample-thf-table-components',
  templateUrl: './sample-thf-table-components.component.html',
})
export class SampleThfTableComponentsComponent {

  extraInformation: any;
  title: any;

  public readonly columns: Array<ThfTableColumn> = [
    { property: 'status', type: 'label', width: '5%', labels: [
      { value: 'stable', color: 'success', label: 'Stable' },
      { value: 'experimental', color: 'warning', label: 'Experimental' },
      { value: 'roadmap', color: 'danger', label: 'Roadmap' }
    ]},
    { property: 'component', type: 'link' },
    { property: 'description', color: this.experimentalColor },
    { property: 'extra', label: 'Extras', type: 'link', action: (value, row) => { this.extras(value, row); } },
    { property: 'favorite', label: 'Actions', type: 'icon', action: this.goToDocumentation.bind(this), icons: [
      { value: 'favorite', icon: 'thf-icon-star', color: this.isFavorited.bind(this), action: this.favorite.bind(this) }
    ]}
  ];

  public readonly items: Array<any> = [
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Checkbox',
      description: 'Group of square buttons that allows multiple items to be selected',
      link: '/documentation/thf-checkbox-group', extra: 'Best Practices',
      extras: [ 'Short and objective texts for items', 'Use with short lists', 'For big lists use Totvs Multiselect' ],
      status: 'stable'
    },
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Combo',
      description: 'Display a list of items with filter and allows selection',
      link: '/documentation/thf-combo', extra: 'Features',
      extras: [ 'Filter options (starts, contains, ends)', 'Custom services', 'Navigation by keys' ],
      status: 'stable'
    },
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Select', description: 'Display a list of items and allows selection',
      link: '/documentation/thf-select', status: 'stable'
    },
    {
      favorite: ['favorite'],
      component: 'Totvs MultiSelect', description: 'Display a list of items and allows multiple selection',
      link: '/documentation/thf-multiselect',
      status: 'experimental'
    },
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Input',
      description: 'Input for general texts',
      link: '/documentation/thf-input', status: 'stable' },
    {
      favorite: ['favorite'],
      component: 'Totvs Textarea', description: 'Larger input for big texts',
      link: '/documentation/thf-textarea' , extra: 'Best Practices',
      extras: [ 'Recommended to large texts like observations and details', 'For short texts use thf-input' ],
      status: 'experimental'
    },
    {
      favorite: ['favorite'],
      component: 'Totvs Number', description: 'Input that allows only numbers',
      link: '/documentation/thf-number', status: 'experimental'
    },
    {
      favorite: ['favorite'],
      component: 'Totvs Datepicker', description: 'Input with calendar for dates',
      link: '/documentation/thf-datepicker', extra: 'Features',
      extras: [ 'Multiple idioms ( pt, es , en)', 'Custom date formats', 'Period validation (start date and end date)' ],
      status: 'experimental'
    },
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Email', description: 'Input that allows valid email texts (username@email.com)',
      link: '/documentation/thf-email', status: 'stable'
    },
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Url', description: 'Input that expects a valid url as text (http://www.url.com)',
      link: '/documentation/thf-url', status: 'stable'
    },
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Password', description: 'Input with bullet text to type passwords',
      link: '/documentation/thf-password', status: 'stable'
    },
    {
      favorite: ['favorite', 'thf-icon-export'],
      component: 'Totvs Login', description: 'Input with a user icon that represents a login field',
      link: '/documentation/thf-login', status: 'stable'
    },
    {
      favorite: ['favorite'],
      component: 'Totvs Upload', description: 'Upload file(s) with a loading bar',
      link: '/documentation/thf-upload', extra: 'Features', status: 'experimental',
      extras: [ 'Multiple file selection', 'Automatic upload after click', 'File format and size restriction' ],
    }
  ];

  @ViewChild(ThfModalComponent) thfModal: ThfModalComponent;

  constructor(private router: Router) { }

  experimentalColor(row) {
    return row.status === 'experimental' ? 'warning' : 'success';
  }

  extras(value, row) {
    this.title = value;
    this.extraInformation = row;

    this.thfModal.open();
  }

  goToDocumentation(row) {
    this.router.navigate([row.link]);
  }

  private favorite(row) {
    row.favorited = !row.favorited;
  }

  private isFavorited(row) {
    return row.favorited ? 'warning' : 'success';
  }

}

