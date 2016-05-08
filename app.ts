import {Component} from 'angular2/core';
import {CORE_DIRECTIVES,FORM_DIRECTIVES} from 'angular2/common';
import {Account} from './account';

@Component({
    selector: 'my-app',
    template: `
    <select (change)="onSelect($event.target.value)">
      <option *ngFor="#account of accounts" [value]="account.Accountid">{{account.Accountid}}</option>
    </select>  <div>Cash : {{selectedAccount.Accountcash}}</div>
    `,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class DropDownComponent { 
    public accounts: Account[] = [
      { "Accountid": 108861, "Accountcash": "123456" },
      { "Accountid": 108862, "Accountcash": "234567" },
      { "Accountid": 108863, "Accountcash": "345678" }
    ];
    public selectedAccount: Account = this.accounts[0];
    onSelect(Accountid) { 
        this.selectedAccount = null;
        for (var i = 0; i < this.accounts.length; i++)
        {
          if (this.accounts[i].Accountid == Accountid) {
            this.selectedAccount = this.accounts[i];
          }
        }
    }
}