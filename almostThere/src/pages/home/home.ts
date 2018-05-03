import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SetupTripPage } from '../setup-trip/setup-trip';
import { AddContactPage } from '../add-contact/add-contact';
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  addContactButton() {
    this.navCtrl.push(AddContactPage);
  }

  setupTripButton() {
  	this.navCtrl.push(SetupTripPage);
  }

}
