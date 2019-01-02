/**
 * Exemplo de configuração de um módulo com i18n.
 */

// import { NgModule } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';

// import { ThfModule } from '@totvs/thf-ui/thf.module';
// import { ThfI18nConfig, ThfI18nModule } from '@totvs/thf-ui/services/thf-i18n';

// import { SampleThfPageLoginHumanResourcesComponent } from './sample-thf-page-login-human-resources.component';

// const humanResourcesEnLiterals = {
//   title: 'Welcome to Human Resources',
//   oginErrorPattern: 'Invalid ID',
//   loginPlaceholder: 'Insert your ID',
//   passwordErrorPattern: 'Invalid PIN',
//   passwordPlaceholder: 'Insert your PIN',
//   submitLabel: 'Access your account',
//   forgotPassword: 'Forgot your ID or PIN?',
//   highlightInfo: 'For us the future is now'
// };

// const thfI18nConfig: ThfI18nConfig = {
//   contexts: {
//     general: {
//       'en-US': humanResourcesEnLiterals
//     }
//   },
//   default: {
//    language: 'en-US',
//    context: 'general',
//    cache: true
//   }
// };

// @NgModule({
//   imports: [
//     HttpClientModule,

//     ThfModule,
//     ThfI18nModule.config(thfI18nConfig)
//   ],
//   declarations: [
//     SampleThfPageLoginHumanResourcesComponent
//   ],
//   exports: [],
//   providers: []
// })
// export class SampleThfPageLoginHumanResourcesModule { }

: 'Access released',
          message: 'You are on vacation, take time to rest.'
        });

      } else {
        this.thfDialog.alert({
          ok: () => this.loading = false,
          title: 'Access denied',
          message: 'Invalid access data!'

        });
      }
    }, 3000);

  }

}

