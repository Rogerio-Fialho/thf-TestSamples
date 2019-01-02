/**
 * Exemplo de configuração de um módulo com forRegister.
 */

// import { NgModule } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';

// import { ThfModule } from '@totvs/thf-ui/thf.module';
//
// import { ThfCodeEditorModule } from '@totvs/thf-ui/components/thf-code-editor/thf-code-editor.module';
// import { ThfCodeEditorRegisterable } from '@totvs/thf-ui/components/thf-code-editor/thf-code-editor-registerable.interface';

// const customRegister: ThfCodeEditorRegisterable = {
//   language: 'terraform'
//   options: {
//     keywords: ['resource', 'provider', 'variable', 'output', 'module', 'true', 'false'],
//     operators: ['{', '}', '(', ')', '[', ']', '?', ':'],
//     symbols:  /[=><!~?:&|+\-*\/\^%]+/,
//     escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
//     tokenizer: {
//      ...
//     }
//   }
// };
//
// @NgModule({
//   imports: [
//     HttpClientModule,

//     ThfModule,
//     ThfCodeEditorModule.forRegister(customRegister)
//   ],
//   declarations: [
//   ],
//   exports: [],
//   providers: []
// })
// export class SampleThfCodeEditorRegisterModule { }

omment' ],
        [`[\\/*]`, 'comment' ],
        [`[\\#.*]`, 'comment']
      ],
      string: [
        [`[^\\\\\"\\$]+`,  'string'],
        [`\\$`, 'string.interpolated', '@interpolated'],
        [`\\\\.`, 'string.escape.invalid'],
        [`\"`, { token: 'string.quote', bracket: '@close', next: '@pop' } ]
      ],
      whitespace: [
        [`[ \\t\\r\\n]+`, 'white'],
        [`\\/\\/.*$`,    'comment'],
        [`\\#.*$`,    'comment'],
      ],
      interpolated: [
        [`[{]`, { token: 'string.escape.curly', switchTo: '@interpolated_compound' }],
        ['', '', '@pop'],
      ],
    },
  }

};

