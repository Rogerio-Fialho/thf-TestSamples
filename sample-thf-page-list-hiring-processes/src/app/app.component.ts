import { Injectable } from '@angular/core';

import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Injectable()
export class SampleThfPageListHiringProcessesService {

  getColumns(): Array<ThfTableColumn> {
    return [
      { column: 'hireStatus', label: 'Status', type: 'subtitle', subtitles: [
        { value: 'hired', type: 'success', label: 'Hired', content: '1' },
        { value: 'progress', type: 'warning', label: 'Progress', content: '2' },
        { value: 'canceled', type: 'danger', label: 'Canceled', content: '3' }
      ]},
      { column: 'idCard', label: 'Identity card', type: 'string' },
      { column: 'name', label: 'Name'},
      { column: 'age', label: 'Age' },
      { column: 'city', label: 'City' },
      { column: 'jobDescription', label: 'Job description', type: 'string' }
    ];
  }

  getHireStatus() {
    return [
      { value: 'hired', label: 'Hired' },
      { value: 'progress', label: 'Progress' },
      { value: 'canceled', label: 'Canceled'}
    ];
  }

  getItems() {
    return [
      { hireStatus: 'hired', name: 'James Johnson', city: 'Ontario', age: 24, idCard: 'AB34lxi90', jobDescription: 'Systems Analyst' },
      { hireStatus: 'progress', name: 'Brian Brown', city: 'Buffalo', age: 23, idCard: 'HG56lds54', jobDescription: 'Trainee' },
      { hireStatus: 'canceled', name: 'Mary Davis', city: 'Albany', age: 31, idCard: 'DF23cfr65', jobDescription: 'Programmer' },
      { hireStatus: 'hired', name: 'Margaret Garcia', city: 'New York', age: 29, idCard: 'GF45fgh34', jobDescription: 'Web developer' },
      { hireStatus: 'hired', name: 'Emma Hall', city: 'Ontario', age: 34, idCard: 'RF76jut21', jobDescription: 'Recruiter' },
      { hireStatus: 'progress', name: 'Lucas Clark', city: 'Utica', age: 32, idCard: 'HY21kgu65', jobDescription: 'Consultant' },
      { hireStatus: 'hired', name: 'Ella Scott', city: 'Ontario', age: 24, idCard: 'UL78flg68', jobDescription: 'DBA' },
      { hireStatus: 'progress', name: 'Chloe Walker', city: 'Albany', age: 29, idCard: 'JH12oli98', jobDescription: 'Programmer' },
    ];
  }

  getJobs() {
    return [
      { value: 'Systems Analyst', label: 'Systems Analyst' },
      { value: 'Trainee', label: 'Trainee' },
      { value: 'Programmer', label: 'Programmer'},
      { value: 'Web Developer', label: 'Web developer'},
      { value: 'Recruiter', label: 'Recruiter'},
      { value: 'Consultant', label: 'Consultant'},
      { value: 'DBA', label: 'DBA'}
    ];
  }

}

ter) { }

  ngOnInit() {
    this.disclaimerGroup = {
      title: 'Filters',
      disclaimers: [],
      change: this.onChangeDisclaimer.bind(this)
    };

    this.hiringProcesses = this.sampleHiringProcessesService.getItems();
    this.hiringProcessesColumns = this.sampleHiringProcessesService.getColumns();
    this.jobDescriptionOptions = this.sampleHiringProcessesService.getJobs();
    this.statusOptions = this.sampleHiringProcessesService.getHireStatus();

    this.hiringProcessesFiltered = [...this.hiringProcesses];
  }

  advancedFilterActionModal() {
    this.advancedFilterModal.open();
  }

  disableHireButton() {
    return !this.hiringProcesses.find(candidate => candidate['$selected']);
  }

  filter() {
    const filters = this.disclaimers.map(disclaimer => disclaimer.value);
    filters.length ? this.hiringProcessesFilter(filters) : this.resetFilterHiringProcess();
  }

  filterAction(filter = [this.labelFilter]) {
    this.populateDisclaimers(filter);
    this.filter();
  }

  hireCandidate() {
    const selectedCandidate = this.hiringProcesses.find(candidate => candidate['$selected']);
    switch (selectedCandidate['hireStatus']) {
      case 'progress':
        selectedCandidate['hireStatus'] = 'hired';
        this.thfNotification.success('Hired candidate!');
        break;

      case 'hired':
        this.thfNotification.warning('This candidate has already been hired.');
        break;

      case 'canceled':
        this.thfNotification.error('This candidate has already been disqualified.');
        break;
    }
  }

  hiringProcessesFilter(filters) {
    this.hiringProcessesFiltered = this.hiringProcesses.filter(item => {
      return Object.keys(item)
      .some(key => (!(item[key] instanceof Object) && this.includeFilter(item[key], filters)));
    });
  }

  includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  onChangeDisclaimer(disclaimers) {
    this.disclaimers = disclaimers;
    this.filter();
  }

  populateDisclaimers(filters: Array<any>) {
    this.disclaimers = filters.map(value => ({ value }));

    if (this.disclaimers && this.disclaimers.length > 0) {
      this.disclaimerGroup.disclaimers = [...this.disclaimers];
    } else {
      this.disclaimerGroup.disclaimers = [];
    }
  }

  resetFilterHiringProcess() {
    this.hiringProcessesFiltered = [...this.hiringProcesses];
    this.status = [];
    this.jobDescription = [];
  }

  private beforeRedirect(itemBreadcrumbLabel) {

    if (this.hiringProcesses.some(candidate => candidate['$selected'])) {

      this.thfDialog.confirm({
        title: `Confirm redirect to ${itemBreadcrumbLabel}`,
        message: `There is data selected. Are you sure you want to quit?`,
        confirm: () => this.router.navigate(['/'])
      });

    } else {
      this.router.navigate(['/']);
    }

  }

}

