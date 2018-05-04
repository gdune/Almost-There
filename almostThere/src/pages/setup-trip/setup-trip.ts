import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-setup-trip',
  templateUrl: 'setup-trip.html'
})
export class SetupTripPage {

	formgroup:FormGroup;
	destination:AbstractControl;
	recipient:AbstractControl;
	etamessage:AbstractControl;
	time:AbstractControl;
	deafultTime;


  constructor(public navCtrl: NavController, 
  	public formBuilder: FormBuilder, private storage: Storage) {

  		this.formgroup = formBuilder.group({
			destination:['',Validators.required],
			recipient:['',Validators.required],
			etamessage:['',Validators.required],
			time:['',Validators.required]
  		});

  		this.destination = this.formgroup.controls['destination'];
  		this.recipient = this.formgroup.controls['recipient'];
  		this.etamessage = this.formgroup.controls['etamessage'];
  		this.time = this.formgroup.controls['time'];
  }

  tripForm(){
     // set a key/value
  	this.storage.set('tripForm', this.formgroup.value);
  }

}
