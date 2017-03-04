import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InterestService } from '../../services/interest-service';


/*
  Generated class for the Simple page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-simple',
  templateUrl: 'simple.html'
})
export class SimplePage {
  accountType:any;
  balance:number;
  interestRate:number;
  overDraftPenalty:number;
  requiredMinimumBalance:any;
  isMinimumBalanceRequired:boolean;
  recurringTransactions:any;
  accountHistory:any;

  transactionFrequency:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public interestService:InterestService) {}

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
    //set to 'null' as per middleware's spec, remove after build out
    this.recurringTransactions="null";
    this.accountHistory="null";
    console.log(
    this.accountType, this.balance, this.interestRate, this.overDraftPenalty, this.requiredMinimumBalance, this.isMinimumBalanceRequired, this.recurringTransactions, this.accountHistory)
  }
  updateIsMinimumBalanceRequired(){}

  updateRecurringTransactions(){}

  updateHasAccountHistory(){}
}
