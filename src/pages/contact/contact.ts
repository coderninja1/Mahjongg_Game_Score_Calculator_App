import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare var window;

/*
  Generated class for the Contact page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

     callIT(passedNumber){
         //You can add some logic here
         passedNumber = encodeURIComponent(passedNumber);
          window.location = "tel:"+passedNumber;
         }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

}
