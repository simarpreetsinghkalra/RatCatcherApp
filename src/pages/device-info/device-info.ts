import { Device } from './../../modals/device';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeviceInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-info',
  templateUrl: 'device-info.html',
})
export class DeviceInfoPage {
  device: Device;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.device = this.navParams.get('device');
  }

  ionViewDidLoad() {
  }

  openSettings(){
    this.navCtrl.push('DeviceSettingsPage',{
      device: this.device
    });
  }

  backNav(){
    this.navCtrl.pop();
  }

}
