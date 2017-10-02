import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewsfeedPage } from '../pages/newsfeed/newsfeed';
import { EventsAttendingPage } from '../pages/events-attending/events-attending';
import { MyEventsPage } from '../pages/my-events/my-events';
import { MyProfilePage } from '../pages/my-profile/my-profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewsfeedPage,
    EventsAttendingPage,
    MyEventsPage,
    MyProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewsfeedPage,
    EventsAttendingPage,
    MyEventsPage,
    MyProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
