import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DsheetsPage } from './dsheets';

@NgModule({
  declarations: [
    DsheetsPage,
  ],
  imports: [
    IonicPageModule.forChild(DsheetsPage),
  ],
})
export class DsheetsPageModule {}
