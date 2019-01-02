import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ThfLookupFilter, ThfLookupResponseApi } from '@totvs/thf-ui/components/thf-field';

@Injectable()
export class SampleThfLookupSwFilmsService implements ThfLookupFilter {

  private baseUrl = 'https://swapi.co/api';
  private filmsUrl = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get(this.filmsUrl);
  }

  getFilteredData(filter: string, page: number, pageSize, filterParams: any): Observable<ThfLookupResponseApi> {
    const searchParam = { params: { page: page.toString(), search: filter } };

    return this.http.get(`${this.baseUrl}/${filterParams}`, searchParam)
      .pipe(map((response: { results: Array<any>, next: string }) => {
        return {
          items: response.results,
          hasNext: !!response.next
        };
      }));
  }

  getObjectByValue(value: string, filterParams: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${filterParams}/?search=${value}`)
      .pipe(map((response: { results: Array<any> }) => response.results[0]));
  }

}

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

