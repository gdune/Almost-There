import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SetupTripPage } from '../setup-trip/setup-trip';
import { AddContactPage } from '../add-contact/add-contact';
import { DefaultSettingPage } from '../default-setting/default-setting';
import { ModalController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  defaultSettingButton() {
    this.navCtrl.push(DefaultSettingPage);
  }

  addContactButton() {
    this.navCtrl.push(AddContactPage);
  }

  setupTripButton() {
  	this.navCtrl.push(SetupTripPage);
  }

  ionViewDidEnter() {
  // Or to get a key/value pair
    this.storage.get('tripForm').then((val) => {
      var p = document.getElementById('tripSummary').getElementsByTagName("p");
      var i;
      console.log(val);
      p[0].innerHTML = "Message will be sent to " + val.recipient + " when you are " + val.time + " minutes from " + val.destination;
      p[1].innerHTML = "Message: " + val.etamessage;
    });
  }

}
