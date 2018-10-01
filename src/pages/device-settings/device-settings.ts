import { ApiResponse } from './../../modals/api-response';
import { Device } from './../../modals/device';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ApiServicesProvider } from '../../providers/api-services/api-services';

/**
 * Generated class for the DeviceSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-settings',
  templateUrl: 'device-settings.html',
})
export class DeviceSettingsPage {
  device: Device
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiServicesProvider, private toastCtrl: ToastController) {
    this.device = navParams.get('device');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceSettingsPage');
  }

  updateDevice(){
    this.apiService.editDevice(this.device._id,this.device.name,this.device.killmousenumber,this.device.killmousenumber).subscribe((res: ApiResponse<Device>)=>{
      if(res.success){
        this.presentToast("Device info updated.") 
        this.navCtrl.pop();    
      } else{
        this.presentToast(res.message);
      }
    })
  }

  removeDevice(){
    this.apiService.removeDevice(this.device._id,this.apiService.userId).subscribe(res=>{
      if(res.success){
        this.presentToast("Device Sucessfully Removed.");
        this.navCtrl.popTo(this.navCtrl.getByIndex(this.navCtrl.length()-3));
      } else{
        this.presentToast(res.message);
      }
    })
  }

  presentToast(msg: string){
    this.toastCtrl.create({
      message: msg,
      duration: 3000,
      closeButtonText: "OK"
    }).present();
  }
  
  backNav(){
    this.navCtrl.pop();
  }

}
