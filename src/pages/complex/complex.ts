import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Complex page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-complex',
  templateUrl: 'complex.html'
})
export class ComplexPage {

accountID:number;
interval:number = 365;
frequency:number = 12;
interestType:any = "SIMPLE";
calculationRule:any = "NONE";
numDaysForRule:number = 0;
checked:boolean;
complexInterest:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {}

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
    if(this.complexInterest){this.interestType="COMPLEX";}else{this.interestType="SIMPLE";}
    console.log(this.accountID, this.interval, this.frequency, this.interestType, this.calculationRule, this.numDaysForRule, );
  }
  updateInterestType(){
    this.interestType="COMPLEX";
    console.log(this.complexInterest);
  }

}

