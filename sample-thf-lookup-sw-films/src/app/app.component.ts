import { Component, OnInit } from '@angular/core';

import { ThfRadioGroupOption } from '@totvs/thf-ui/components/thf-field';

import { SampleThfLookupSwFilmsService } from './sample-thf-lookup-sw-films.service';

@Component({
  selector: 'sample-thf-lookup-sw-films',
  templateUrl: './sample-thf-lookup-sw-films.component.html',
  providers: [SampleThfLookupSwFilmsService]
})
export class SampleThfLookupSwFilmsComponent implements OnInit {

  entity;
  filmItemsFiltered;
  filterParams = 'people';

  private filmItems;

  readonly characterColumns = [
    { column: 'name', label: 'Name' },
    { column: 'gender', label: 'Gender' },
    { column: 'height', label: 'Height' },
    { column: 'mass', label: 'Mass' },
  ];

  readonly entities: Array<ThfRadioGroupOption> = [
    { label: 'Character', value: 'people' },
    { label: 'Planet', value: 'planets' },
    { label: 'Starship', value: 'starships' }
  ];

  readonly filmColumns = [
    { column: 'episode_id', label: 'Episode id' },
    { column: 'title', label: 'Title' },
    { column: 'director', label: 'Director' },
    { column: 'producer', label: 'Producer' },
    { column: 'release_date', label: 'Release date', type: 'date' },
  ];

  readonly planetsColumns = [
    { column: 'name', label: 'Name' },
    { column: 'diameter', label: 'Diameter' },
    { column: 'population', label: 'Population' },
    { column: 'climate', label: 'Climate' },
  ];

  readonly starshipsColumns = [
    { column: 'name', label: 'Name' },
    { column: 'passengers', label: 'Passengers' },
    { column: 'max_atmosphering_speed', label: 'Max Speed' },
    { column: 'consumables', label: 'Consumables' },
  ];

  constructor(public filterService: SampleThfLookupSwFilmsService) { }

  get entityColumns() {
    return this.getEntityColumns(this.filterParams);
  }

  get entityLabel() {
    return this.getLabelOfEntity(this.filterParams);
  }

  ngOnInit() {
    this.filterService.getFilms().subscribe((films: { results: Array<any> }) => {
      this.filmItems = films.results;
    });
  }

  onSelected(entity) {
    this.filmItemsFiltered = this.filmItems.filter(film => entity.films.includes(film.url));
  }

  private getEntityColumns(entity) {
    switch (entity) {
      case 'people':
        return this.characterColumns;
      case 'planets':
        return this.planetsColumns;
      case 'starships':
        return this.starshipsColumns;
    }
  }

  private getLabelOfEntity(entity): string {
    switch (entity) {
      case 'people':
        return 'character';
      case 'planets':
        return 'planet';
      case 'starships':
        return 'starship';
    }
  }

}

