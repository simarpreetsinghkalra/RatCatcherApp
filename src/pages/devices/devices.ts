import { Device } from './../../modals/device';
import { ApiServicesProvider } from './../../providers/api-services/api-services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DevicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {
  public isLoading = true;
  public devices: Device[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiServicesProvider) {
  }

  ionViewDidLoad() {
    this.apiService.getDevices(this.apiService.userId).subscribe(res => {
      if(res.success){
        this.devices = res.data;
        this.isLoading = false;
      } else{
        this.apiService.presentToast(res.message);
        this.isLoading = false;
      }
    });
  }
  
  openDeviceInfo(device: Device){
    this.navCtrl.push('DeviceInfoPage',{
      device: device
    });
  }

  backNav(){
    this.navCtrl.pop();
  }
}
