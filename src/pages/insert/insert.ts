import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import {Datamembers} from "../../providers/datamembers";
import { HomePage } from "../home/home";

/*
  Generated class for the Insert page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html'
})
export class InsertPage {
  results: Array<any>;
    loader: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:Datamembers, public loadingCtrl:LoadingController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertPage');
  }

  public Insert(firstname: string, lastname: string,email: string,mobile: string,city: string,state: string,country: string,postalcode: string)
  {
      this.presentLoading();
      this.data.InsertMember(firstname,lastname,email,mobile,city,state,country,postalcode).subscribe(
        data => {
          this.results = data;
          console.log(data);
            if(this.results[0].result =="success")
            {
                this.navCtrl.popTo(HomePage);
            }
            this.loader.dismiss();
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
    );

  }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    }
}
