import { Component } from '@angular/core';

import { NavController, NavParams,LoadingController  } from 'ionic-angular';
import {Datamembers} from "../../providers/datamembers";
import { PersonPage } from "../person/person";
import { InsertPage } from "../insert/insert";
import { UpdatePage } from "../update/update";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: Array<any>;
    loader: any;

  constructor(public navCtrl: NavController, public data:Datamembers, public navParams:NavParams, public loadingCtrl:LoadingController) {
    
  }

  ngOnInit()
  {
      this.presentLoading();
      this.data.LoadMembers().subscribe(
        data => {
          this.members = data;
          console.log(data);
            this.loader.dismiss();
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
    );
  }

  Refresh()
  {
      this.presentLoading();
      this.data.LoadMembers().subscribe(
          data => {
              this.members = data;
              console.log(data);
              this.loader.dismiss();
          },
          err => {
              console.log(err);
          },
          () => console.log('Movie Search Complete')
      );
  }

  Viewperson(member)
  {
      this.navCtrl.push(PersonPage,{member:member});
  }
    View(member)
    {
        this.navCtrl.push(PersonPage,{member:member});
    }
  Insert()
  {
      this.navCtrl.push(InsertPage);
  }

  update(member)
  {
      this.navCtrl.push(UpdatePage,{member:member});
  }

  Delete(id:any)
  {
      this.presentLoading();
      this.data.DeleteMember(id).subscribe(
          data => {
              this.members = data;
              console.log(data);
              this.loader.dismiss();
          },
          err => {
              console.log(err);
          },
          () => console.log('Movie Search Complete')
      );
  }
  search(event, key)
  {
      if(event.target.value.length > 0) {
          this.data.searchMembers(event.target.value).subscribe(
              data => {
                  this.members = data;
                  console.log(data);
              },
              err => {
                  console.log(err);
              },
              () => console.log('Movie Search Complete')
          );
      }
  }

    presentLoading() {
        this.loader = this.loadingCtrl.create({
            content: "Loading..."
        });
        this.loader.present();
    }

}
