import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InterestService } from '../../services/interest-service';

@Component({
  selector: 'page-complex',
  templateUrl: 'complex.html'
})
export class ComplexPage {

accountID:number;
interval:number;
frequency:number;
interestType:any = "SIMPLE";
calculationRule:any = "NONE";
numDaysForRule:number = 0;
checked:boolean;
complexInterest:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public interestService:InterestService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplexPage');
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Interest Calculated',
      message: 'We calculated an interest of 443493 pennies',
      buttons: ['Ok']
    });
    alert.present()
  }

  getInterestValue(){
    if(this.complexInterest){
      this.interestType="COMPLEX";
    }else{
      this.interestType="SIMPLE";
    }
    console.log(this.accountID, this.interval, this.frequency, this.interestType, this.calculationRule.toUpperCase(), this.numDaysForRule);
    this.interestService.getInterestValue(this.accountID, this.interval, this.frequency, this.interestType, this.calculationRule.toUpperCase(), this.numDaysForRule);
  }

  updateInterestType(){
    this.interestType="COMPLEX";
    console.log(this.complexInterest);
  }

}

