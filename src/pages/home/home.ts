import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController ,Platform} from 'ionic-angular';
import { StatusBar,Splashscreen} from 'ionic-native';
import { Calculator } from '../calculator/calculator';
import { FabContainer } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  
	  calculator = Calculator;
    private alreadyPushed: boolean;
    private selectedItem: any;
    private items: Array<any>;

	  constructor(public navCtrl: NavController ,public loadingCtrl: LoadingController,public platform: Platform) {   
        this.items = [
          'Home',
        ];
        platform.ready().then(() => {

          this.hideSplashScreen();
          Splashscreen.hide();
          StatusBar.overlaysWebView(true); // let status bar overlay webview
          StatusBar.backgroundColorByHexString('#222'); // set status bar to dark

      });
     
  }

  ionViewDidEnter() {
    // Initialize the flag
    this.alreadyPushed = false;
    
    if(this.selectedItem) {
      // Reset the selected item
      this.selectedItem._setOpenAmount(0);
    }
    
  }
  
  ondrag(event, item) {
      let percent = event.getSlidingPercent();
      if (percent > 1 && !this.alreadyPushed) {
        
        // Store the event to reset it later
        this.selectedItem = event;
        // Set the flag to true
        this.alreadyPushed = true;
        // Push the new page
        this.navCtrl.push(Calculator);
      
      }
    }


   presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 500
    });
    loader.present();
  }


  openSocial(url,network: string, fab: FabContainer) {
       this.platform.ready().then(() => {
           let loading = this.loadingCtrl.create({
             content: `Redirecting to ${network}`,
             duration: (Math.random() * 1000) + 500
           });

           loading.present();
           fab.close();
           
      });
      open(url, "_blank", "location=yes");
   }

    hideSplashScreen() {
         if (Splashscreen) {
         setTimeout(() => {
         Splashscreen.hide();
         }, 100);
         }
     }





}
