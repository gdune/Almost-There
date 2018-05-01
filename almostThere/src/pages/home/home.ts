import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SetupTripPage } from '../setup-trip/setup-trip';
import { AddContactPage } from '../add-contact/add-contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  setupTripButton() {
  	this.navCtrl.push(SetupTripPage);
  }

  addContactButton() {
    this.navCtrl.push(AddContactPage);
  }

}
