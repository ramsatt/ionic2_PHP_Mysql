import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {Datamembers} from "../../providers/datamembers";
import { HomePage } from "../home/home";

/*
  Generated class for the Update page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {
  person;
  results: Array<any>;
  loader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:Datamembers, public loadingCtrl:LoadingController) {
    this.person = navParams.data.member;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  Update(id:string,firstname: string, lastname: string,email: string,mobile: string,city: string,state: string,country: string,postalcode: string)
  {
    this.data.EditMember(id,firstname,lastname,email,mobile,city,state,country,postalcode).subscribe(
        data => {
          this.results = data;
          console.log(data);
          if(this.results[0].result =="success")
          {
            this.navCtrl.popTo(HomePage);
          }
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
    );

  }

}
