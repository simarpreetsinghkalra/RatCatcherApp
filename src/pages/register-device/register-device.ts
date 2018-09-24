import { ApiServicesProvider } from './../../providers/api-services/api-services';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterDevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-device',
  templateUrl: 'register-device.html',
})
export class RegisterDevicePage {
  public macAddress: string;
  public deviceName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiService: ApiServicesProvider, private toastCtrl: ToastController) {
  }

  addDevice(){
    this.apiService.addNewDevice(this.deviceName, this.macAddress, this.apiService.userId).subscribe(res=>{
      if(res.success){
        this.apiService.presentToast("Device added successfully");
      }else{
        this.apiService.presentToast(res.message);
      }
    });
  }
    presentToast(msg: string){
      this.toastCtrl.create({
        message: msg,
        duration: 3000,
        closeButtonText: "OK"
      }).present();
    }
}
