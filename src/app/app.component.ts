import { ApiServicesProvider } from './../providers/api-services/api-services';
import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage, private apiService: ApiServicesProvider, private alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('userId').then(val => {
        if(val){
          this.apiService.userId = val;
          console.log(val);
        }else{
          this.apiService.createNewUser().subscribe(res => {
            if(res.success){
              this.storage.set('userId',res.data._id);
            } else{
              this.alertCtrl.create({
                title: 'Message',
                subTitle: 'There was a problem registering your device with our server. Please try re-launching this app.',
                buttons: [
                  {
                    text: 'Okay..!',
                    handler: data => {
                      platform.exitApp();
                    }
                  }
                ]
              });
            }
          });
        }
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
