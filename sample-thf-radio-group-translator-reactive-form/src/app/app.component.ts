import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ThfRadioGroupOption, ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'sample-thf-radio-group-translator-reactive-form',
  templateUrl: './sample-thf-radio-group-translator-reactive-form.component.html'
})
export class SampleThfRadioGroupTranslatorReactiveFormComponent implements OnInit {

  translatorForm: FormGroup;

  readonly languageOptions: Array<ThfRadioGroupOption> = [
    { label: 'Spanish', value: 'es' },
    { label: 'English', value: 'en' }
  ];

  readonly optionsList: Array<ThfSelectOption> = [
    { value: '1', label: 'Olá' },
    { value: '2', label: 'Tchau' },
    { value: '3', label: 'Estrangeiro' },
    { value: '4', label: 'Alinhamento' },
    { value: '5', label: 'Visão' },
    { value: '6', label: 'Livro' }
  ];

  readonly wordsOptions: Array<any> = [
    { id: '1', en: 'Hello', es: 'Hola' },
    { id: '2', en: 'Bye', es: 'Hasta luego' },
    { id: '3', en: 'Foreign', es: 'Extranjero' },
    { id: '4', en: 'Alignment', es: 'Alineación' },
    { id: '5', en: 'Vision', es: 'Vista' },
    { id: '6', en: 'Book', es: 'Libro' }
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.translatorForm = this.formBuilder.group({
      language: [ 'es', Validators.required ],
      original: [ undefined, Validators.required ],
      translated: [ undefined, Validators.required ]
    });
  }

  changeLanguage() {
    const language = this.translatorForm.value.language;
    const original = this.translatorForm.value.original;

    const word = this.wordsOptions.find(item => item.id === original);

    if (word) {
      this.translatorForm.patchValue({
        translated: word[language]
      });
    }
  }

}

