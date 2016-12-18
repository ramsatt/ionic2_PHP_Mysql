import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PersonPage } from '../pages/person/person';
import { InsertPage } from '../pages/insert/insert';
import { UpdatePage } from '../pages/update/update';
import { Datamembers } from '../providers/datamembers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PersonPage,
    InsertPage,
    UpdatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PersonPage,
    InsertPage,
    UpdatePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Datamembers]
})
export class AppModule {}
