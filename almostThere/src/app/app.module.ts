import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SetupTripPage } from '../pages/setup-trip/setup-trip';
import { AddContactPage } from '../pages/add-contact/add-contact';
import { DefaultSettingPage } from '../pages/default-setting/default-setting';


@NgModule({
  declarations: [
    MyApp,
    HomePage,

    AddContactPage,
    SetupTripPage,
    DefaultSettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SetupTripPage,
    AddContactPage,
    HomePage,
    DefaultSettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
