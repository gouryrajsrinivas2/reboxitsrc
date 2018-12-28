import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistPage } from './hist';

@NgModule({
  declarations: [
    HistPage,
  ],
  imports: [
    IonicPageModule.forChild(HistPage),
  ],
})
export class HistPageModule {}
