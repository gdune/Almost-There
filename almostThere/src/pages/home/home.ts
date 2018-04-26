import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SetupTripPage } from '../setup-trip/setup-trip';

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

}
