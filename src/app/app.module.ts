import { NgModule, ErrorHandler  } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Calculator } from '../pages/calculator/calculator';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { MaterialModule } from '@angular/material';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		Calculator,
		AboutPage,
		ContactPage
	],
	imports: [
		MaterialModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		AboutPage,
		Calculator,
		ContactPage
	],
providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})

export class AppModule {}