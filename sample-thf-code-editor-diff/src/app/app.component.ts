import { Component } from '@angular/core';

@Component({
  selector: 'sample-thf-code-editor-diff',
  templateUrl: './sample-thf-code-editor-diff.component.html'
})
export class SampleThfCodeEditorDiffComponent {

  code = [
`class Calc {
  sumValues(firstValue: any, secondValue: any): any {
    const result = firstValue + secondValue;
    return result;
  }
  subtractValues(firstValue: any, secondValue: any): any {
    const result = firstValue - secondValue;
    return result;
  }
}`,
`class Calculator {

  sum(firstValue: number, secondValue: number): number {
    return firstValue + secondValue;
  }

  subtract(firstValue: number, secondValue: number): number {
    return firstValue - secondValue;
  }
}
`];

}

