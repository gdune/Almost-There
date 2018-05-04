import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup,AbstractControl } from '@angular/forms';
import {HomePage} from '../home/home';
import { SetupTripPage } from '../setup-trip/setup-trip';
import { ModalController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html'
})
export class AddContactPage {
	
	private contacts : FormGroup;
	name:AbstractControl;
	address:AbstractControl;
	phone:AbstractControl;
	

 	constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {

		  	this.contacts = this.formBuilder.group({
		  		name: ['', Validators.required],
		  		address: ['', Validators.required],
		  		phone: ['', Validators.required],
		  		
		  	});

		  	this.name = this.contacts.controls['name'];
		  	this.address = this.contacts.controls['address'];
		  	this.phone = this.contacts.controls['phone'];
		  	



	}
  	contactForm(){
  		console.log(this.contacts.value);

  	
  	}
}
