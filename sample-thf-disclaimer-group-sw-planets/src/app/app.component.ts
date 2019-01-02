import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ThfComboOption } from '@totvs/thf-ui/components/thf-field';
import { ThfTableColumn } from '@totvs/thf-ui/components/thf-table';

@Injectable()
export class SampleThfDisclaimerGroupSwPlanetsService {

  constructor(private http: HttpClient) { }

  getClimates(): Array<ThfComboOption> {
    return [
      { value: 'arid', label: 'Arid' },
      { value: 'frozen', label: 'Frozen' },
      { value: 'murky', label: 'Murky' },
      { value: 'temperate', label: 'Temperate' },
      { value: 'tropical', label: 'Tropical' }
    ];
  }

  getColumns(): Array<ThfTableColumn> {
    return [
      { column: 'name', label: 'Planet Name' },
      { column: 'climate', label: 'Climate' },
      { column: 'terrain', label: 'Terrain' },
      { column: 'surface_water', label: 'Surface Water' },
      { column: 'gravity', label: 'Gravity' },
      { column: 'population', label: 'Population', type: 'number' }
    ];
  }

  getItems(): Observable<Array<any>> {
    return this.http.get('https://swapi.co/api/planets/').pipe(map((response: any) => response.results));
  }

  getTerrains(): Array<ThfComboOption> {
    return [
      { value: 'barren', label: 'Barren' },
      { value: 'cityscape', label: 'Cityscape' },
      { value: 'desert', label: 'Desert' },
      { value: 'forests', label: 'Forests' },
      { value: 'gas giant', label: 'Gas giant' },
      { value: 'grasslands', label: 'Grasslands' },
      { value: 'grassy hills', label: 'Grassy hills' },
      { value: 'ice caves', label: 'Ice caves' },
      { value: 'jungles', label: 'Jungles' },
      { value: 'lakes', label: 'Lakes' },
      { value: 'mountain ranges', label: 'Mountain ranges' },
      { value: 'mountains', label: 'Mountains' },
      { value: 'ocean', label: 'Ocean' },
      { value: 'rainforests', label: 'Rainforests' },
      { value: 'rock', label: 'Rock' },
      { value: 'swamp', label: 'Swamp' },
      { value: 'tundra', label: 'Tundra' }
    ];
  }

}

lter);
  }

  private clearFieldsIfNoFilter(...fields: Array<string>) {
    const filterEqualField = (filter, field) => filter === field;
    const fieldHaveNoFilter = field => !this.filters.some(filter => filterEqualField(filter.property, field));

    const fieldsWithoutFilter = fields.filter(field => this[field] && fieldHaveNoFilter(field));

    fieldsWithoutFilter.forEach(field => this[field] = undefined);
  }

  private filter(filters: Array<ThfDisclaimer>) {
    const filterCondition = (filter, item) => item[filter.property].toLocaleLowerCase().includes(filter.value.toLocaleLowerCase());
    const filterItems = item => filters.every(filter => filterCondition(filter, item));

    this.filteredItems = this.items.filter(filterItems);
  }

  private removeFilter(field: string) {
    const deletedIndex = this.filters.findIndex(filter => filter.property === field);
    this.filters.splice(deletedIndex, 1);
  }

  private resetFilters() {
    this.filteredItems = [...this.items || []];
  }

}

