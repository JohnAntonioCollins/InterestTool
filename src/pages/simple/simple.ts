import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InterestService } from '../../services/interest-service';

/*
teamSquad!
*/
@Component({
  selector: 'page-simple',
  templateUrl: 'simple.html'
})
export class SimplePage {

  accountType:any;
  balance:any;
  interestRate:number;
  overDraftPenalty:number;
  requiredMinimumBalance:any;
  isMinimumBalanceRequired:boolean;

  hasReccurringTransactions:boolean;
  recurringTransactionAmount:string;
  recurringTransactionFrequency:string;
  recurringTransactions: recurringTransaction[];

  hasAccountHistory:boolean;
  historicTransactionAmount:any;
  historicTransactionDate:any;
  accountHistory: historicTransaction[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public interestService:InterestService ) {
    this.recurringTransactions = new Array<recurringTransaction>();
    this.accountHistory = new Array<historicTransaction>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimplePage');
  }

   doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Account Created',
      message: 'Account #737 has been created.',
      buttons: ['Ok']
    });
    alert.present()
  }
  
  postAccount(){
    console.log(this.accountType, this.balance, this.interestRate, this.overDraftPenalty, this.requiredMinimumBalance, this.recurringTransactions, this.accountHistory)
    this.interestService.postAccount(this.balance, this.accountType, this.interestRate, this.overDraftPenalty, this.requiredMinimumBalance, this.recurringTransactions, this.accountHistory);
  }
  updateIsMinimumBalanceRequired(){}

  updateRecurringTransactions(){}
  
  updateHasAccountHistory(){}

  addRecurringTransaction(){
   this.recurringTransactions.push(
    new recurringTransaction(this.recurringTransactionAmount, this.recurringTransactionFrequency))
   this.addedTransactionAlert();
   console.log(this.recurringTransactionAmount, this.recurringTransactionFrequency);
   console.log(this.recurringTransactions[0].amount, this.recurringTransactions[0].frequency);
     
  } 

  addHistoricTransaction(){
    this.accountHistory.push(
      new historicTransaction(this.historicTransactionAmount, this.historicTransactionDate))
    this.addedTransactionAlert();
    console.log(this.historicTransactionAmount, this.historicTransactionDate);
    console.log(this.accountHistory);

  }

  addedTransactionAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      message: 'Transaction has been added.',
      buttons: ['Ok']
    });
    alert.present()
  }
  
}
export class recurringTransaction {
  amount: string;
  frequency: string;
  
  constructor(_amount: string, _frequency: string) {
     this.amount = _amount;
     this.frequency = _frequency;
     // assign local variables to class members
  }
}
export class historicTransaction {
  amount: string;
  dateOccurredOn: string;

  constructor(_amount: string, _dateOccurredOn: string) {
    this.amount = _amount;
    this.dateOccurredOn = _dateOccurredOn;
  }
}




