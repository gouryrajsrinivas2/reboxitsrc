import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartzPage } from './cartz';

@NgModule({
  declarations: [
    CartzPage,
  ],
  imports: [
    IonicPageModule.forChild(CartzPage),
  ],
})
export class CartzPageModule {}
