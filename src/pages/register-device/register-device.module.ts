import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterDevicePage } from './register-device';

@NgModule({
  declarations: [
    RegisterDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterDevicePage),
  ],
})
export class RegisterDevicePageModule {}
