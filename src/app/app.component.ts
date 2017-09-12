import { Component, ViewChild } from '@angular/core';
import { Nav,Platform,AlertController} from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { Calculator } from '../pages/calculator/calculator';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { Splashscreen } from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
 
/*@App({
template: '',
config: {
mode: "md"
}
})*/


export class MyApp {

  @ViewChild(Nav) nav: Nav;
 
  rootPage = HomePage;
 
  pages: Array<{title: string, component: any}>;
  pages2: any;
 
  constructor(public platform: Platform,public alertCtrl: AlertController) {
    this.initializeApp();
    this.platform = platform;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Homepage', component: HomePage }
    ];

    this.pages2 = {
         calculatorpage: Calculator,
         aboutpage: AboutPage,
         contactpage: ContactPage,
         homepage:HomePage
       }

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.hideSplashScreen();
      
    });
  }

  ExitApp(){
    let a=confirm("Do You Want to Exit ?"); 
      if(a===true){
        this.platform.exitApp();
      }
      else{
      
      }
    }
  
    hideSplashScreen() {
      if (Splashscreen) {
      setTimeout(() => {
      Splashscreen.hide();
      }, 100);
      }
    }

  }










