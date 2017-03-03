import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {}

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

}
