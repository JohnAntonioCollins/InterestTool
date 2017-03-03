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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

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

}
