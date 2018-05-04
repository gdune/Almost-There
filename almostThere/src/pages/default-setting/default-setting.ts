import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';


@Component({
  selector: 'page-default-setting',
  templateUrl: 'default-setting.html'
})
export class DefaultSettingPage {

  constructor(public navCtrl: NavController) {

  }
  home(){
      this.navCtrl.push(HomePage);

  }
}
