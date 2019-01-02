import { Component } from '@angular/core';

@Component({
  selector: 'sample-thf-tag-bank-account',
  templateUrl: './sample-thf-tag-bank-account.component.html',
})
export class SampleThfTagBankAccountComponent {

  investiments = [
    { label: 'Stocks', type: 'danger', value: 'Low -3.50%' },
    { label: 'Treasury bills', type: 'success', value: 'Growing +2.25%' },
    { label: 'Real estate', type: 'warning', value: 'Risk -0.02%' },
    { label: 'Mutual fund', type: 'success', value: 'Growing +3.00%' }
  ];

  items = [
    { month: 'June', details: [
      { label: 'Automatic Payment' , value: '$ 250' , type: 'danger', text: 'Expense' },
      { label: 'Deposit' , value: '$ 500' , type: 'success', text: 'Income' },
      { label: 'Bank receipt' , value: '$ 10' , type: 'info', text: 'Document' },
      { label: 'Credit Card' , value: '$ 230' , type: 'danger', text: 'Expense' },
      { label: 'Personal Loan' , value: '$ 150' , type: 'warning', text: 'Future' }
    ]},
    { month: 'July', details: [
      { label: 'Deposit' , value: '$ 500' , type: 'success', text: 'Income' },
      { label: 'Car insurance' , value: '$ 40' , type: 'danger', text: 'Expense' },
      { label: 'Deposit' , value: '$ 200' , type: 'success', text: 'Income' },
      { label: 'Bank statement' , value: '$ 5' , type: 'info', text: 'Document' },
      { label: 'Deposit' , value: '$ 70' , type: 'success', text: 'Income' }
    ]},
    { month: 'August', details: [
      { label: 'Student Loan' , value: '$ 250' , type: 'danger', text: 'Expense' },
      { label: 'Deposit' , value: '$ 50' , type: 'success', text: 'Income' },
      { label: 'Bank receipt' , value: '$ 10' , type: 'info', text: 'Document' },
      { label: 'Automatic Payment' , value: '$ 230' , type: 'warning', text: 'Future' },
      { label: 'Credit Card' , value: '$ 150' , type: 'warning', text: 'Future' }
    ]},
  ];

  userData = {
    'name': 'Natasha Romanova',
    'email': 'natasha.romanova@totvs.com.br',
    'photo': 'avatar2.png'
  };

}

