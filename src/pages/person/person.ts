import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Person page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-person',
  templateUrl: 'person.html'
})
export class PersonPage {
  person;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = navParams.data.member;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonPage');
  }

}
