import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app';
import { AppUsersOnline } from "./app.usersOnline";
import { AppChat } from "./app.chat";
import { HomePage } from './home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ChatEngine } from './chatEngine';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppUsersOnline,
    AppChat
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppChat
  ],
  providers: [
    ChatEngine,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
