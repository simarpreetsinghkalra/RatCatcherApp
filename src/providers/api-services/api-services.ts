import { User } from './../../modals/user';
import { ApiResponse } from './../../modals/api-response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Device } from '../../modals/device';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ApiServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServicesProvider {
  private baseUrl = "https://serene-sands-33811.herokuapp.com/";
  public _userId: string;
  public headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  public get userId() : string {
    return this._userId;
  }

  public set userId(id: string) {
      this._userId = id;
  }

  constructor(public http: HttpClient, private toastCtrl: ToastController) {
  }

  createNewUser(){
    return this.http.get<ApiResponse<User>>(this.baseUrl + "user/new");
  }

  addNewDevice(name: string, macaddress: string, userid: string){
    let body="name=" + name +"&macaddress=" + macaddress + "&userid=5ba5c05f1caadc00153ac4dc";
    return this.http.post<ApiResponse<Device>>(this.baseUrl + "device/add", body, {
      headers: this.headers
    });
  }

  editDevice(deviceid: string, name: string, mousecount: string, killmousenumber: string){
    let body = "deviceid=" + deviceid + "&name=" + name + "&mousecount=" + mousecount + "&killmousenumber=" + killmousenumber;
    return this.http.post<ApiResponse<Device>>(this.baseUrl + "device/edit",body,{
      headers: this.headers
    });   
  }

  removeDevice(deviceid: string, userid: string){
    let body = "deviceid=" + deviceid + "&userid=" + userid;
    return this.http.post(this.baseUrl + "device/remove",body,{
      headers: this.headers
    });
  }

  getDevices(userid: string){
    let body ="userid=" + userid;
    return this.http.post<ApiResponse<Device[]>>(this.baseUrl + "device/get", body, {
      headers: this.headers
    });
  }

  getOneDevice(deviceid: string){
    let body = "deviceid=" + deviceid;
    return this.http.post<ApiResponse<Device>>(this.baseUrl + "device/getone", body, {
      headers: this.headers
    });
  }

  public presentToast(msg: string){
    this.toastCtrl.create({
      message: msg,
      duration: 3000,
      closeButtonText: "OK"
    }).present();
  }
}
