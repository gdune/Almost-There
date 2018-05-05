import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-default-setting',
  templateUrl: 'default-setting.html'
})
export class DefaultSettingPage {

  constructor(public navCtrl: NavController, 
  	public formBuilder: FormBuilder, private storage: Storage) {

  }

  home() {
      this.navCtrl.push(HomePage);
  }
}
