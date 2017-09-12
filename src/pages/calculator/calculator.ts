import { Component,ViewChild } from '@angular/core';
import { LoadingController,ToastController} from 'ionic-angular';
import { NavController,Content,AlertController,MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';

/*import { Calculator } from '../calculator/calculator';*/

@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'

})

export class Calculator {

	homepage=HomePage;
	public amount:number=0;

	private flowergroup1: boolean = true;
	private flowergroup2: boolean = true;
	private flowergroup3: boolean = true;
	private flowergroup4: boolean = true;
	private flowergroup5: boolean = true;
	private flowergroup6: boolean = true;
	private flowergroup7: boolean = true;
	private flowergroup8: boolean = true;
	private finalscorecard: boolean = true;

	private group1extque: boolean = true;
	private congsnumextque: boolean = true;
	private group1windsextque: boolean = true;
	private group1dragansextque: boolean = true;
	private fishingcheckbox: boolean = false;
	private mahjongcheckbox: boolean = false;

	private pairofnumbercheckbox: boolean=false;
	private pairofwindscheckbox: boolean=false;
	private pairofdragancheckbox: boolean=false;

	congsgroup1que:any;
	group1congsnumque:any;
	congsgroup1windsque:any;
	congsgroup1dragansque:any;

	roundofflower:any;

	gamevalue:any;
	windoftheround:any;
	windoftheownround:any;
	middleNames:any;

	pairofnumber:any;
	pairofwinds:any;
	pairofdragan:any;


	flowerval:any;
	typeofgame:any;

	pungswindnum:any;
    kongswindnum:any;



	//Pungs variable declaration
	group1_que_val:any;
	group1_pungsnum_que_val:any;
	group1_winds_que_val:any;
	group1_dragans_que_val:any;

	//Kongs variable declairation
	congs_group1_que_val:any;
	group1_congsnum_que_val:any;
	congs_group1_winds_que_val:any;
	congs_group1_dragans_que_val:any;


	//kongs extra ques
	congs_group1_ext_val:any;
	group1_congsnum_ext_val:any;
	congs_group1_winds_ext_val:any;
	congs_group1_dragans_ext_val:any;

	//string name for pungs after substr
	groupquetext:any;
	grouppungsnumquetext:any;
	groupwindsquetext:any;
	groupdragansquetext:any;

	//string name for pungs after substr
	kongnumbertext:any;
	kongsnumberquetext:any;
	kongswindsquetext:any;
	kongsdragansquetext:any;


	pairdragonpoint:any;
	totalscore:any;
	windsextpoint:any;

	//pungs group
	group1_pungs:any;	
	group1_pungsnum:any;	
	group1_winds:any;	
	group1_dragans:any;	

	//kongs group
	congs_group1_number:any;
	group1_congssnum:any;
	congs_group1_winds:any;
	congs_group1_dragans:any;


	//flowergroup value
	flowergroup1value:any;
	flowergroup2value:any;
	flowergroup3value:any;
	flowergroup4value:any;
	flowergroup5value:any;
	flowergroup6value:any;
	flowergroup7value:any;
	flowergroup8value:any;

	@ViewChild(Content) content: Content;

	  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,public alertCtrl: AlertController,public toastCtrl: ToastController,
	  	public menu:MenuController) {
	  		
	   }

	  ionViewDidLoad() {}

	  	  addItem(){


		     		 this.amount=this.amount+1;
		    		 this.flowerval=this.amount;
	     		   	 let roundofflower=	this.flowerval;
	     		   	 let valueflower=4;
	     			 let totalflower=0;

	     		   	if(roundofflower=="0"){
	     		   		   this.flowergroup1 = true;
	     		   		   this.flowergroup2 = true;
	     		   		   this.flowergroup3 = true;
	     		   		   this.flowergroup4 = true;
	     		   		   this.flowergroup5 = true;
	     		   		   this.flowergroup6 = true;
	     		   		   this.flowergroup7 = true;
	     		   		   this.flowergroup8 = true;
	     		   	}

	     		   	if(roundofflower=="1"){
	     		   		   totalflower=roundofflower*valueflower;
	     		   		   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = true;
	     		   		   this.flowergroup3 = true;
	     		   		   this.flowergroup4 = true;
	     		   		   this.flowergroup5 = true;
	     		   		   this.flowergroup6 = true;
	     		   		   this.flowergroup7 = true;
	     		   		   this.flowergroup8 = true;
	     		   	}

	     		   	if(roundofflower=="2"){
	     		   		   totalflower=roundofflower*valueflower;
	     				   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = false;
	     		   		   this.flowergroup3 = true;
	     		   		   this.flowergroup4 = true;
	     		   		   this.flowergroup5 = true;
	     		   		   this.flowergroup6 = true;
	     		   		   this.flowergroup7 = true;
	     		   		   this.flowergroup8 = true;
	     		   	}

	     		   	if(roundofflower=="3"){
	     		   		   totalflower=roundofflower*valueflower;
	     				   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = false;
	     		   		   this.flowergroup3 = false;
	     		   		   this.flowergroup4 = true;
	     		   		   this.flowergroup5 = true;
	     		   		   this.flowergroup6 = true;
	     		   		   this.flowergroup7 = true;
	     		   		   this.flowergroup8 = true;
	     		   		   
	     		   	}

	     		   	if(roundofflower=="4"){
	     		   		   totalflower=roundofflower*valueflower;
	     				   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = false;
	     		   		   this.flowergroup3 = false;
	     		   		   this.flowergroup4 = false;
	     		   		   this.flowergroup5 = true;
	     		   		   this.flowergroup6 = true;
	     		   		   this.flowergroup7 = true;
	     		   		   this.flowergroup8 = true;
	     		   			
	     		   	}

	     		   	if(roundofflower=="5"){
	     		   		   totalflower=roundofflower*valueflower;
	     				   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = false;
	     		   		   this.flowergroup3 = false;
	     		   		   this.flowergroup4 = false;
	     		   		   this.flowergroup5 = false;
	     		   		   this.flowergroup6 = true;
	     		   		   this.flowergroup7 = true;
	     		   		   this.flowergroup8 = true;
	     		   	}

	     		   	if(roundofflower=="6"){
	     		   		   totalflower=roundofflower*valueflower;
	     				   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = false;
	     		   		   this.flowergroup3 = false;
	     		   		   this.flowergroup4 = false;
	     		   		   this.flowergroup5 = false;
	     		   		   this.flowergroup6 = false;
	     		   		   this.flowergroup7 = true;
	     		   		   this.flowergroup8 = true;
	     		   	}

	     			if(roundofflower=="7"){
	     		   		   totalflower=roundofflower*valueflower;
	     				   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = false;
	     		   		   this.flowergroup3 = false;
	     		   		   this.flowergroup4 = false;
	     		   		   this.flowergroup5 = false;
	     		   		   this.flowergroup6 = false;
	     		   		   this.flowergroup7 = false;
	     		   		   this.flowergroup8 = true;
	     			}
	     			if(roundofflower=="8"){
	     		   		   totalflower=roundofflower*valueflower;
	     				   this.flowergroup1 = false;
	     		   		   this.flowergroup2 = false;
	     		   		   this.flowergroup3 = false;
	     		   		   this.flowergroup4 = false;
	     		   		   this.flowergroup5 = false;
	     		   		   this.flowergroup6 = false;
	     		   		   this.flowergroup7 = false;
	     		   		   this.flowergroup8 = false;
	     			}

	     			 if(this.amount>8){
	     			 	 totalflower=roundofflower*valueflower;
						 this.amount =8;     			 	
	     			 }

	     			this.flowerval=totalflower;

	  	  }

	  	  removeItem(){
	  	        this.amount=this.amount-1;
		  	    if(this.amount<0){
		  	    	this.amount=0;
		  	    	this.flowerval=0;
		  	    }
		  	    else{
	  	        	 this.flowerval=this.amount;
	  	   	    	 let roundofflower=this.flowerval;
	  	   	    	 let valueflower=4;
	  	   	 	     let totalflower=0;

	  	   	    	if(roundofflower=="0"){
	  	   	    		   this.flowergroup1 = true;
	  	   	    		   this.flowergroup2 = true;
	  	   	    		   this.flowergroup3 = true;
	  	   	    		   this.flowergroup4 = true;
	  	   	    		   this.flowergroup5 = true;
	  	   	    		   this.flowergroup6 = true;
	  	   	    		   this.flowergroup7 = true;
	  	   	    		   this.flowergroup8 = true;
	  	   	    	}

	  	   	    	if(roundofflower=="1"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	    		   this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = true;
	  	   	    		   this.flowergroup3 = true;
	  	   	    		   this.flowergroup4 = true;
	  	   	    		   this.flowergroup5 = true;
	  	   	    		   this.flowergroup6 = true;
	  	   	    		   this.flowergroup7 = true;
	  	   	    		   this.flowergroup8 = true;
	  	   	    	}

	  	   	    	if(roundofflower=="2"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	 		       this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = false;
	  	   	    		   this.flowergroup3 = true;
	  	   	    		   this.flowergroup4 = true;
	  	   	    		   this.flowergroup5 = true;
	  	   	    		   this.flowergroup6 = true;
	  	   	    		   this.flowergroup7 = true;
	  	   	    		   this.flowergroup8 = true;
	  	   	    	}

	  	   	    	if(roundofflower=="3"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	 		       this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = false;
	  	   	    		   this.flowergroup3 = false;
	  	   	    		   this.flowergroup4 = true;
	  	   	    		   this.flowergroup5 = true;
	  	   	    		   this.flowergroup6 = true;
	  	   	    		   this.flowergroup7 = true;
	  	   	    		   this.flowergroup8 = true;
	  	   	    		   
	  	   	    	}

	  	   	    	if(roundofflower=="4"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	 		       this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = false;
	  	   	    		   this.flowergroup3 = false;
	  	   	    		   this.flowergroup4 = false;
	  	   	    		   this.flowergroup5 = true;
	  	   	    		   this.flowergroup6 = true;
	  	   	    		   this.flowergroup7 = true;
	  	   	    		   this.flowergroup8 = true;
	  	   	    			
	  	   	    	}

	  	   	    	if(roundofflower=="5"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	 		       this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = false;
	  	   	    		   this.flowergroup3 = false;
	  	   	    		   this.flowergroup4 = false;
	  	   	    		   this.flowergroup5 = false;
	  	   	    		   this.flowergroup6 = true;
	  	   	    		   this.flowergroup7 = true;
	  	   	    		   this.flowergroup8 = true;
	  	   	    	}

	  	   	    	if(roundofflower=="6"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	 		   	   this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = false;
	  	   	    		   this.flowergroup3 = false;
	  	   	    		   this.flowergroup4 = false;
	  	   	    		   this.flowergroup5 = false;
	  	   	    		   this.flowergroup6 = false;
	  	   	    		   this.flowergroup7 = true;
	  	   	    		   this.flowergroup8 = true;
	  	   	    	}

	  	   	 	if(roundofflower=="7"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	 		       this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = false;
	  	   	    		   this.flowergroup3 = false;
	  	   	    		   this.flowergroup4 = false;
	  	   	    		   this.flowergroup5 = false;
	  	   	    		   this.flowergroup6 = false;
	  	   	    		   this.flowergroup7 = false;
	  	   	    		   this.flowergroup8 = true;
	  	   	 	}
	  	   	 	if(roundofflower=="8"){
	  	   	    		   totalflower=roundofflower*valueflower;
	  	   	 		 	   this.flowergroup1 = false;
	  	   	    		   this.flowergroup2 = false;
	  	   	    		   this.flowergroup3 = false;
	  	   	    		   this.flowergroup4 = false;
	  	   	    		   this.flowergroup5 = false;
	  	   	    		   this.flowergroup6 = false;
	  	   	    		   this.flowergroup7 = false;
	  	   	    		   this.flowergroup8 = false;
	  	   	 	}
	  	   	 	this.flowerval=totalflower;
	  	    }
	  	  }
	  	  


	  //Get the name of the pungs questions ans

 	 pungschangeone(value){

		let groupquetext =value.substr(1);
		this.group1_que_val=value[0];
		groupquetext= groupquetext.substr(1);
		this.groupquetext=groupquetext;

 	 }


	pungschangetwo(value){
		this.group1_pungsnum_que_val=value[0];
		let grouppungsnumquetext =value.substr(1);
		grouppungsnumquetext= grouppungsnumquetext.substr(1);
		this.grouppungsnumquetext=grouppungsnumquetext;

	}
	pungschangethree(value){
		this.group1_winds_que_val=value[0];
		let groupwindsquetext =value.substr(1);
		groupwindsquetext= groupwindsquetext.substr(1);
		this.groupwindsquetext=groupwindsquetext;

	}
	pungschangefour(value){
		this.group1_dragans_que_val=value[0];
		let groupdragansquetext =value.substr(1);
		groupdragansquetext= groupdragansquetext.substr(1);
		this.groupdragansquetext=groupdragansquetext;

	}

	   NumberChange(){
	   		let pairofnumber=this.pairofnumber;
	   		pairofnumber=parseInt(pairofnumber);
	   		if(pairofnumber >0){
	  	  		this.pairofwindscheckbox=true;
	  				this.pairofdragancheckbox=true;
	  	  	}
	  	  	if(pairofnumber==0){
	  	  		this.pairofwindscheckbox=false;
	  			this.pairofdragancheckbox=false;
	  	  	}

	   }


	   WindsChange(){
	   	 	let pairofwinds=this.pairofwinds;
	   	 	pairofwinds=parseInt(pairofwinds);
	   	 	if(pairofwinds >0 && pairofwinds !='undefined'){
	   	 		this.pairofnumbercheckbox=true;
	   	 		this.pairofdragancheckbox=true;

	   	 	}

	   	 	if(pairofwinds==0){
	   	 		this.pairofnumbercheckbox=false;
	   	 		this.pairofdragancheckbox=false;
	   	 	}

	   }

	   DragansChange(value){
   		  	let pairofdragan=this.pairofdragan;
   		  	if(pairofdragan !='undefined' && pairofdragan!="0"){
   		  		this.pairofnumbercheckbox=true;
   		  		this.pairofwindscheckbox=true;
   		  	}

   		  	if(pairofdragan=="0"){
   		  	    this.pairofnumbercheckbox=false;
   		  		this.pairofwindscheckbox=false;
   		  	}

	   	   if(value!=="0"){
 				this.pairdragonpoint=2;
	   	 	}
		   	 else{
 				this.pairdragonpoint=0;	
	   	    }


	   }


	  FishingGame(a){

  			if(a==true){
  				this.mahjongcheckbox=true;
  				this.fishingcheckbox=true;
  				this.gamevalue=0;
  			}
  	
		  }

	  MahjongGame(a){

		  	if(a==true){
		  		this.mahjongcheckbox=true;
		  		this.fishingcheckbox=true;
	  			this.gamevalue=20;
		  	}

		}

	  scrollToTop() {
	   	  this.content.scrollToTop();	  		
	   }


	   //Working now

	   conggroup1que(value){

	   		if(value=="0"){
	   			 this.congs_group1_que_val=0;
	   			 this.kongnumbertext="NA";
	   			 return false;
	   		}

   		    let a=value[0];
   			let b=value[1];
  		 	let c=a.concat(b);

  		 	if(c=="8,"){
			 this.congs_group1_que_val=8;

  		 	}
		 	else{
		 	  this.congs_group1_que_val=c;	
		 	}

		    let kongnumbertext =value.substr(1);
			kongnumbertext= kongnumbertext.substr(1);
			kongnumbertext= kongnumbertext.substr(1);
			this.kongnumbertext=kongnumbertext;

			if(kongnumbertext=="xposed"){
				this.kongnumbertext="exposed";
			}
			else{
				this.kongnumbertext=kongnumbertext;
			}

		   	if(kongnumbertext =="xposed"){
		   		this.group1extque=false;
		   	}
		   	else{
		   		this.group1extque=true;
		   	}
	  
	   }

	   group1congnumque(value){
	 	  
	   		if(value=="0"){
	   			 this.group1_congsnum_que_val=0;
	   			 this.kongsnumberquetext="NA";
	   			 return false;
	   		}

   		    let a=value[0];
   			let b=value[1];
  		 	let c=a.concat(b);

  		 	this.group1_congsnum_que_val=c;	

	 	    let kongsnumberquetext =value.substr(1);
	 		kongsnumberquetext= kongsnumberquetext.substr(1);
	 		kongsnumberquetext= kongsnumberquetext.substr(1);
	 		this.kongsnumberquetext=kongsnumberquetext;
		   	if(kongsnumberquetext =="Exposed"){
		   		this.congsnumextque=false;
		   	}
		   	else{
		   		this.congsnumextque=true;
		   	}
	   }

	   conggroup1windsque(value){
	   	 	
		   		if(value=="0"){
		   			 this.congs_group1_winds_que_val=0;
		   			 this.kongswindsquetext="NA";
		   			 return false;
		   		}

	   		    let a=value[0];
	   			let b=value[1];
	  		 	let c=a.concat(b);

	  		 	this.congs_group1_winds_que_val=c;	

		 	    let kongswindsquetext =value.substr(1);
		 		kongswindsquetext= kongswindsquetext.substr(1);
		 		kongswindsquetext= kongswindsquetext.substr(1);
		 		this.kongswindsquetext=kongswindsquetext;

	   		   	if(kongswindsquetext=="Exposed"){
	   		   		this.group1windsextque=false;
	   		   	}
	   		   	else{
	   		   		this.group1windsextque=true;
	   		   	}
	   }

	   conggroup1dragansque(value){

		   		if(value=="0"){
		   			 this.congs_group1_dragans_que_val=0;
		   			 this.kongsdragansquetext="NA";
		   			 return false;
		   		}

	   		    let a=value[0];
	   			let b=value[1];
	  		 	let c=a.concat(b);

	  		 	this.congs_group1_dragans_que_val=c;	

		 	    let kongsdragansquetext =value.substr(1);
		 		kongsdragansquetext= kongsdragansquetext.substr(1);
		 		kongsdragansquetext= kongsdragansquetext.substr(1);
		 		this.kongsdragansquetext=kongsdragansquetext;

   			   	if(kongsdragansquetext=="Exposed"){
   			   		this.group1dragansextque=false;
   			   	}
   			   	else{
   			   		this.group1dragansextque=true;
   			   	}
	   }


	   flowerchange(){
	   
		   	 let roundofflower=this.roundofflower;
		   	 let valueflower=4;
			 let totalflower=0;

		   	if(roundofflower=="0"){
		   		   this.flowergroup1 = true;
		   		   this.flowergroup2 = true;
		   		   this.flowergroup3 = true;
		   		   this.flowergroup4 = true;
		   		   this.flowergroup5 = true;
		   		   this.flowergroup6 = true;
		   		   this.flowergroup7 = true;
		   		   this.flowergroup8 = true;
		   	}

		   	if(roundofflower=="1"){
		   		   totalflower=roundofflower*valueflower;
		   		   this.flowergroup1 = false;
		   		   this.flowergroup2 = true;
		   		   this.flowergroup3 = true;
		   		   this.flowergroup4 = true;
		   		   this.flowergroup5 = true;
		   		   this.flowergroup6 = true;
		   		   this.flowergroup7 = true;
		   		   this.flowergroup8 = true;
		   	}

		   	if(roundofflower=="2"){
		   		   totalflower=roundofflower*valueflower;
				   this.flowergroup1 = false;
		   		   this.flowergroup2 = false;
		   		   this.flowergroup3 = true;
		   		   this.flowergroup4 = true;
		   		   this.flowergroup5 = true;
		   		   this.flowergroup6 = true;
		   		   this.flowergroup7 = true;
		   		   this.flowergroup8 = true;
		   	}

		   	if(roundofflower=="3"){
		   		   totalflower=roundofflower*valueflower;
				   this.flowergroup1 = false;
		   		   this.flowergroup2 = false;
		   		   this.flowergroup3 = false;
		   		   this.flowergroup4 = true;
		   		   this.flowergroup5 = true;
		   		   this.flowergroup6 = true;
		   		   this.flowergroup7 = true;
		   		   this.flowergroup8 = true;
		   		   
		   	}

		   	if(roundofflower=="4"){
		   		   totalflower=roundofflower*valueflower;
				   this.flowergroup1 = false;
		   		   this.flowergroup2 = false;
		   		   this.flowergroup3 = false;
		   		   this.flowergroup4 = false;
		   		   this.flowergroup5 = true;
		   		   this.flowergroup6 = true;
		   		   this.flowergroup7 = true;
		   		   this.flowergroup8 = true;
		   			
		   	}

		   	if(roundofflower=="5"){
		   		   totalflower=roundofflower*valueflower;
				   this.flowergroup1 = false;
		   		   this.flowergroup2 = false;
		   		   this.flowergroup3 = false;
		   		   this.flowergroup4 = false;
		   		   this.flowergroup5 = false;
		   		   this.flowergroup6 = true;
		   		   this.flowergroup7 = true;
		   		   this.flowergroup8 = true;
		   	}

		   	if(roundofflower=="6"){
		   		   totalflower=roundofflower*valueflower;
				   this.flowergroup1 = false;
		   		   this.flowergroup2 = false;
		   		   this.flowergroup3 = false;
		   		   this.flowergroup4 = false;
		   		   this.flowergroup5 = false;
		   		   this.flowergroup6 = false;
		   		   this.flowergroup7 = true;
		   		   this.flowergroup8 = true;
		   	}

			if(roundofflower=="7"){
		   		   totalflower=roundofflower*valueflower;
				   this.flowergroup1 = false;
		   		   this.flowergroup2 = false;
		   		   this.flowergroup3 = false;
		   		   this.flowergroup4 = false;
		   		   this.flowergroup5 = false;
		   		   this.flowergroup6 = false;
		   		   this.flowergroup7 = false;
		   		   this.flowergroup8 = true;
			}
			if(roundofflower=="8"){
		   		   totalflower=roundofflower*valueflower;
				   this.flowergroup1 = false;
		   		   this.flowergroup2 = false;
		   		   this.flowergroup3 = false;
		   		   this.flowergroup4 = false;
		   		   this.flowergroup5 = false;
		   		   this.flowergroup6 = false;
		   		   this.flowergroup7 = false;
		   		   this.flowergroup8 = false;
			}
			this.flowerval=totalflower;

	   }

	
	  Scoreloading() {
		    let loader = this.loadingCtrl.create({
		      content: "Please wait...",
		      duration: 2000
		    });
		   
		    loader.present();
		  }

	
	  CalculateScore(){

	  	
	  	   this.finalscorecard=false;
	       // make pair only one selectable
		   let gamevalue=this.gamevalue; 
		   let windoftheround=this.windoftheround;  //wind of the round
		   let windoftheownround=this.windoftheownround; //wind of own round
		   let pungtotal=0;	//pungtotal
		   let kongtotal=0; //kongtotal
		   let ext_kong_que_val=0; //ext_kong_que_val
		   let kongexttotal=0; //kongexttotal
		   let pung_kong_total=0; //pung_kong_total
		   let doublecount=0;

		   let finaltotal=0;
		   let pairofwinds=this.pairofwinds;
		   let pairdragonpoint=this.pairdragonpoint;
		   let flowerval=this.flowerval;
		   let typeofgame;

			if(gamevalue==undefined){
				gamevalue=0;
			}			

		   //Game Type
		   if(gamevalue==20){
			 typeofgame="mahjongg";
		   }
		   else{
		   	  typeofgame="fishing";
		   }

			//for Undefined flower value		   	
		   if(flowerval==undefined || flowerval==0){
		      flowerval=0;
		   }
			//for Undefined Pairdragon
		   if(pairdragonpoint==undefined ||pairdragonpoint=="0"){
		    	pairdragonpoint=0;
		   }

		   //pungs Value
		   let group1_que_val=this.group1_que_val;
		   let group1_pungsnum_que_val=this.group1_pungsnum_que_val;
		   let group1_winds_que_val=this.group1_winds_que_val;
		   let group1_dragans_que_val=this.group1_dragans_que_val;

		   //pungs Value parse Int

			if(isNaN(group1_que_val)==true){
				group1_que_val=0;
			}

			if(isNaN(group1_pungsnum_que_val)==true){
				group1_pungsnum_que_val=0;
			}


			if(isNaN(group1_winds_que_val)==true){
				group1_winds_que_val=0;
			}
			

			if(isNaN(group1_dragans_que_val)==true){
				group1_dragans_que_val=0;
			}

			group1_que_val=parseInt(group1_que_val);
			group1_pungsnum_que_val=parseInt(group1_pungsnum_que_val);
			group1_winds_que_val=parseInt(group1_winds_que_val);
			group1_dragans_que_val=parseInt(group1_dragans_que_val);

			pungtotal=(group1_que_val+group1_pungsnum_que_val+group1_winds_que_val+group1_dragans_que_val);
		
			//kongs variable declair

			let congs_group1_que_val=this.congs_group1_que_val;
			let group1_congsnum_que_val=this.group1_congsnum_que_val;
			let congs_group1_winds_que_val=this.congs_group1_winds_que_val;
			let congs_group1_dragans_que_val=this.congs_group1_dragans_que_val;

			let congs_group1_ext_val=this.congs_group1_ext_val;
			let group1_congsnum_ext_val=this.group1_congsnum_ext_val;
			let congs_group1_winds_ext_val=this.congs_group1_winds_ext_val;
			let congs_group1_dragans_ext_val=this.congs_group1_dragans_ext_val;

			//Kongs value

			if(isNaN(congs_group1_que_val)==true){
				congs_group1_que_val=0;
			}

			if(isNaN(group1_congsnum_que_val)==true){
				group1_congsnum_que_val=0;
			}

			if(isNaN(congs_group1_winds_que_val)==true){
				congs_group1_winds_que_val=0;
			}
			
			if(isNaN(congs_group1_dragans_que_val)==true){
				congs_group1_dragans_que_val=0;
			}
			
			//value of extra ques

			if(isNaN(congs_group1_ext_val)==true ){
				congs_group1_ext_val=0;
			}

			if(isNaN(group1_congsnum_ext_val)==true ){
				group1_congsnum_ext_val=0;
			}

			if(isNaN(congs_group1_winds_ext_val)==true ){
				congs_group1_winds_ext_val=0;
			}

			if(isNaN(congs_group1_dragans_ext_val)==true){
				congs_group1_dragans_ext_val=0;
			}


			congs_group1_que_val=parseInt(congs_group1_que_val);
			group1_congsnum_que_val=parseInt(group1_congsnum_que_val);
			congs_group1_winds_que_val=parseInt(congs_group1_winds_que_val);
			congs_group1_dragans_que_val=parseInt(congs_group1_dragans_que_val);

	
			congs_group1_ext_val=parseInt(congs_group1_ext_val);
			group1_congsnum_ext_val=parseInt(group1_congsnum_ext_val);
			congs_group1_winds_ext_val=parseInt(congs_group1_winds_ext_val);
			congs_group1_dragans_ext_val=parseInt(congs_group1_dragans_ext_val);

		
			kongtotal=(congs_group1_que_val+group1_congsnum_que_val+congs_group1_winds_que_val+congs_group1_dragans_que_val);
			ext_kong_que_val=(congs_group1_ext_val+group1_congsnum_ext_val+congs_group1_winds_ext_val+congs_group1_dragans_ext_val);
			
			kongexttotal=(kongtotal+ext_kong_que_val);
			pung_kong_total=(pungtotal+kongexttotal);

			
		
			let windsextpoint;

			if(windoftheround!=='0' && windoftheownround!=='0'){
				windsextpoint=2;		
			}



			finaltotal=(pung_kong_total+flowerval+pairdragonpoint+gamevalue+windsextpoint);

			let pungnumber=this.group1_pungs;
			let pungsnumbertwo=this.group1_pungsnum;
			let pungswind=this.group1_winds;
			let pungsdragan=this.group1_dragans;


			let kongsnumber=this.congs_group1_number;
			let kongsnumbertwo=this.group1_congssnum;
			let kongswinds=this.congs_group1_winds;
			let kongsdragon=this.congs_group1_dragans;

			let array=[pungnumber,pungsnumbertwo,pungswind,pungsdragan,kongsnumber,kongsnumbertwo,kongswinds,kongsdragon];
		/*	console.log(array);	*/
			let arr = array.filter(function(n){ return n != undefined }); 	
			/*console.log(arr);	*/

			function containsAny(source,target)
			{
			    var result = source.filter(function(item){ return target.indexOf(item) > -1});   
			    return (result.length > 0);  
			}    

			var number =containsAny(arr,["2","3","4","5","6","7","8"]);
			var numbertwo=containsAny(arr,["1","9"]);
			var winds  =containsAny(arr,["east","south","west","north"]);
			var dragon =containsAny(arr,["red","green","white"]);
			
		/*	console.log(number);
			console.log(numbertwo);
			console.log(winds);
			console.log(dragon);*/


			//Actual Values
			console.log("*) Total of Pungs :"+" "+pungtotal);
			console.log("*) Total of Kongs :"+" "+kongexttotal);
			console.log("*) Game value:"+" "+gamevalue);
			console.log("*) Value of flowers:"+" "+flowerval);
			console.log("*) Value of Wind and own wind:"+" "+windsextpoint);
			console.log("*) Value of pair Dragan(2 Points):"+" "+pairdragonpoint);
		    console.log("*) Actual Value Before Adding Doubles :"+" "+finaltotal);

			//number 1

			if(typeofgame=="mahjongg"){  //if no winds and dragans
				   	if(winds==true  && dragon==false ||dragon==true && winds==false 
			   			|| number==true && numbertwo==true && dragon==true &&winds==false
			   			|| number==true && numbertwo==true && winds==true && dragon==false
			   			|| number==true && numbertwo==true && winds==false && dragon==false){
				   			doublecount=doublecount+3; 
				   			finaltotal=(finaltotal+finaltotal+finaltotal+finaltotal);
				   			alert("No Winds and Dragans");
				   			console.log("1) After the Hands :"+" "+finaltotal);
				   		/*	alert(finaltotal);*/
				   		}

					if(numbertwo==true && winds==true && dragon==true && number==false){
						doublecount=doublecount+3; 
						finaltotal=(finaltotal+finaltotal+finaltotal+finaltotal);
						alert("If Only 1-9 Wind and Dragon");
						console.log("1) After the Hands :"+" "+finaltotal);
					/*	alert(finaltotal);*/
					}

					if(winds==true && dragon==true && number==false && numbertwo==false){
						doublecount=doublecount+3; 
						finaltotal=(finaltotal+finaltotal+finaltotal+finaltotal);
						alert("If All are Only Wind and Dragans");
						console.log("1) After the Hands :"+" "+finaltotal);
						/*	alert(finaltotal);*/
					}
						
					if(winds==true && dragon==true && number==true && numbertwo==true){
						doublecount=doublecount+1; 
						finaltotal=(finaltotal+finaltotal);
						alert("All are Number,Dragan and Winds");
					 	console.log("1) After the Hands :"+" "+finaltotal);
						/*alert(finaltotal);*/
					}
				
				}	
			
			if(typeofgame=="fishing"){

			   		if(winds==true && dragon==false ||dragon==true && winds==false 
			   			|| number==true && numbertwo==true && dragon==true &&winds==false
			   			|| number==true && numbertwo==true && winds==true && dragon==false
			   			|| number==true && numbertwo==true && winds==false && dragon==false){
			   			doublecount=doublecount+2; 
			   			finaltotal=(finaltotal+finaltotal+finaltotal);
			   			alert("No Winds and Dragans");
				        console.log("1) After the Hands :"+" "+finaltotal);

			   			/*alert(finaltotal);*/
			   		}

					if(numbertwo==true && winds==true && dragon==true && number==false){
						doublecount=doublecount+2; 
						finaltotal=(finaltotal+finaltotal+finaltotal);
						alert("If Only 1-9 Wind and Dragon");
					    console.log("1) After the Hands :"+" "+finaltotal);

						/*alert(finaltotal);*/
					}

					if(winds==true && dragon==true && number==false && numbertwo==false){
						doublecount=doublecount+2; 
						finaltotal=(finaltotal+finaltotal+finaltotal);
						alert("If All are Only Wind and Dragans");
						console.log("1) After the Hands :"+" "+finaltotal);

						/*alert(finaltotal);*/
					}
						
					if(winds==true && dragon==true && number==true && numbertwo==true){
						doublecount=doublecount+1; 
						finaltotal=(finaltotal+finaltotal);
						alert("All are Number,Dragan and Winds");
					    console.log("1) After the Hands :"+" "+finaltotal);

						/*alert(finaltotal);*/
					}	

			}

			//number 2

		   	 let roundofflower=this.roundofflower;

		   	 if(roundofflower==1){
	
				let flowergroup1value=this.flowergroup1value;

		   	 	if(flowergroup1value == windoftheround){
		   	 		doublecount=doublecount+1;
		   	 		finaltotal=(finaltotal+finaltotal);	
		   	 	}
		   	 	if(flowergroup1value == windoftheownround){
		   	 		doublecount=doublecount+1;	
		   	 		finaltotal=(finaltotal+finaltotal);	
		   	 	}

			
				console.log("2) After the flower :"+" "+finaltotal);

		   	 }

		   	 if(roundofflower==2){
		
				let flowergroup1value=this.flowergroup1value;
				let flowergroup2value=this.flowergroup2value;


		   	 	if(flowergroup1value == windoftheround){
		   	 		doublecount=doublecount+1;
		   	 		finaltotal=(finaltotal+finaltotal);	
		   	 	}
		   	 	if(flowergroup1value == windoftheownround){
		   	 		doublecount=doublecount+1;	
		   	 		finaltotal=(finaltotal+finaltotal);	
		   	 	}
		   	 	
		   	 	if(flowergroup2value == windoftheround){
		   	 		doublecount=doublecount+1;
		   	 		finaltotal=(finaltotal+finaltotal);	
		   	 	}
		   	 	if(flowergroup2value == windoftheownround){
		   	 		doublecount=doublecount+1;	
		   	 		finaltotal=(finaltotal+finaltotal);	
		   	 	}
				console.log("2) After the flower :"+" "+finaltotal);

		   	 }

	   	   	 if(roundofflower==3){
	   	
	   			let flowergroup1value=this.flowergroup1value;
	   			let flowergroup2value=this.flowergroup2value;
	   			let flowergroup3value=this.flowergroup3value;

	   	   	 	if(flowergroup1value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup1value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup2value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup2value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup3value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup3value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
				console.log("2) After the flower :"+" "+finaltotal);


	   	   	 }

	   	   	 if(roundofflower==4){
	   	
	   			let flowergroup1value=this.flowergroup1value;
	   			let flowergroup2value=this.flowergroup2value;
	   			let flowergroup3value=this.flowergroup3value;
	   			let flowergroup4value=this.flowergroup4value;


	   	   	 	if(flowergroup1value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup1value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup2value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup2value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup3value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup3value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup4value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup4value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
				console.log("2) After the flower :"+" "+finaltotal);

	   	   	 }

	   	   	 if(roundofflower==5){
	   	
	   			let flowergroup1value=this.flowergroup1value;
	   			let flowergroup2value=this.flowergroup2value;
	   			let flowergroup3value=this.flowergroup3value;
	   			let flowergroup4value=this.flowergroup4value;
	   			let flowergroup5value=this.flowergroup5value;

	   	   	 	if(flowergroup1value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup1value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup2value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup2value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup3value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup3value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup4value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup4value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
				console.log("2) After the flower :"+" "+finaltotal);

	   	   	 }

	   	   	 if(roundofflower==6){
	   	
	   			let flowergroup1value=this.flowergroup1value;
	   			let flowergroup2value=this.flowergroup2value;
	   			let flowergroup3value=this.flowergroup3value;
	   			let flowergroup4value=this.flowergroup4value;
	   			let flowergroup5value=this.flowergroup5value;
	   			let flowergroup6value=this.flowergroup6value;


	   	   	 	if(flowergroup1value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup1value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup2value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup2value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup3value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup3value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup4value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup4value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup6value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup6value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 }	


	   	   	 if(roundofflower==7){
	   	
	   			let flowergroup1value=this.flowergroup1value;
	   			let flowergroup2value=this.flowergroup2value;
	   			let flowergroup3value=this.flowergroup3value;
	   			let flowergroup4value=this.flowergroup4value;
	   			let flowergroup5value=this.flowergroup5value;
	   			let flowergroup6value=this.flowergroup6value;
	   			let flowergroup7value=this.flowergroup7value;

	   	   	 	if(flowergroup1value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup1value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup2value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup2value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup3value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup3value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup4value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup4value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup6value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup6value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup7value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup7value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
				console.log("2) After the flower :"+" "+finaltotal);

	   	   	 }

	   	   	 if(roundofflower==8){
	   	
	   			let flowergroup1value=this.flowergroup1value;
	   			let flowergroup2value=this.flowergroup2value;
	   			let flowergroup3value=this.flowergroup3value;
	   			let flowergroup4value=this.flowergroup4value;
	   			let flowergroup5value=this.flowergroup5value;
	   			let flowergroup6value=this.flowergroup6value;
	   			let flowergroup7value=this.flowergroup7value;
	   			let flowergroup8value=this.flowergroup8value;

	   	   	 	if(flowergroup1value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup1value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup2value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup2value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	
	   	   	 	if(flowergroup3value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup3value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup4value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup4value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup5value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}

	   	   	 	if(flowergroup6value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup6value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup7value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup7value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup8value == windoftheround){
	   	   	 		doublecount=doublecount+1;
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
	   	   	 	if(flowergroup8value == windoftheownround){
	   	   	 		doublecount=doublecount+1;	
	   	   	 		finaltotal=(finaltotal+finaltotal);	
	   	   	 	}
				console.log("2) After the flower :"+" "+finaltotal);

	   	   	 }

	   	   	 //step 3 


	   	   	 let pungswindnum;
	   	   	 let kongswindnum;

	   	   	 if(pungswind=='east'){
	   	   	 	pungswindnum=1;
	   	   	 }

	   	   	 if(pungswind==='west'){
	   	   	 	pungswindnum=2;
	   	   	 }

	   	   	 if(pungswind==='south'){
	   	   	 	pungswindnum=3;
	   	   	 }
	   	   	 if(pungswind==='north'){
	   	   	 	pungswindnum=4;
	   	   	 }


	   	   	 if(kongswinds=='east'){
	   	   	 	kongswindnum=1;
	   	   	 }

	   	   	 if(kongswinds=='west'){
	   	   	 	kongswindnum=2;
	   	   	 }

	   	   	 if(kongswinds=='south'){
	   	   	 	kongswindnum=3;
	   	   	 }
	   	   	 if(kongswinds=='north'){
	   	   	 	kongswindnum=4;
	   	   	 }

	   	   	 windoftheround=parseInt(windoftheround);
	   	   
	   	   	 if(windoftheround==pungswindnum){
	   	   	 	doublecount=doublecount+1;	
	   	   	 	finaltotal=(finaltotal+finaltotal);	
	   	   	 
	   	   	 }

	   	   	 if(windoftheround==kongswindnum){
	   	   	 	doublecount=doublecount+1;	
	   	   	 	finaltotal=(finaltotal+finaltotal);		
	   	   	 }

	   	   
	   	   	 windoftheownround=parseInt(windoftheownround);


	   	   	 if(windoftheownround==pungswindnum){
	   	   	 	doublecount=doublecount+1;
	   	   	 	finaltotal=(finaltotal+finaltotal);		
	   	   	 }



	   	   	 if(windoftheownround==kongswindnum){
	   	   	 	doublecount=doublecount+1;	
	   	   	 	finaltotal=(finaltotal+finaltotal);					
	   	   	 }

	   	   	console.log(" 3) After the pungs and Kong :"+" "+finaltotal);


	   	   	let groupquetext=this.groupquetext;
	   	   	let	grouppungsnumquetext=this.grouppungsnumquetext;
			let	groupwindsquetext=this.groupwindsquetext;
	   	    let	groupdragansquetext=this.groupdragansquetext;
		
			let kongnumbertext=this.kongnumbertext;
			let kongsnumberquetext=this.kongsnumberquetext;
			let kongswindsquetext=this.kongswindsquetext;
			let kongsdragansquetext=this.kongsdragansquetext;

			if(groupquetext=="undefined"||grouppungsnumquetext=="undefined"
			|| groupwindsquetext=="undefined"||groupdragansquetext=="undefined"){
				groupquetext=0;
			    grouppungsnumquetext=0;
			    groupwindsquetext=0;
			    groupdragansquetext=0;
			}

			if(kongnumbertext=="undefined"||kongsnumberquetext=="undefined"
			|| kongswindsquetext=="undefined"||kongsdragansquetext=="undefined"){
				kongnumbertext=0;
			    kongsnumberquetext=0;
			    kongswindsquetext=0;
			    kongsdragansquetext=0;
			}


	   	   	let TextArray=[groupquetext,grouppungsnumquetext,groupwindsquetext,groupdragansquetext,
	   	   	kongnumbertext,kongsnumberquetext,kongswindsquetext,kongsdragansquetext];

	   	   	 function countInArray(TextArray, what) {
	   	   	     let count = 0;
	   	   	     for (let i = 0; i < TextArray.length; i++) {
	   	   	         if (TextArray[i] === what) {
	   	   	             count++;
	   	   	         }
	   	   	     }
	   	   	     return count;
	   	   	 }

	   	   	 let a=countInArray(TextArray, "Concealed"); // returns 2

			//Number 3
			if(a >=3){
				finaltotal=(finaltotal+finaltotal);	
			    doublecount=doublecount+1;
				console.log("3) After the three Concealed (1 Double):"+" "+finaltotal);

			}


			//Number 4

			if(windoftheownround=="1"){
				finaltotal=(finaltotal+finaltotal);	
				doublecount=doublecount+1;
				console.log("4) After own wind has east (1 Double) :"+ " "+finaltotal);

			
			}

			//Number 5

			if(pairofwinds!="undefined"){
				if(pairofwinds==windoftheround){
					doublecount=doublecount+1;	
					finaltotal=(finaltotal+finaltotal);	
				}
				if(pairofwinds==windoftheownround){
					doublecount=doublecount+1;	
					finaltotal=(finaltotal+finaltotal);	
				}
				console.log("5) After the pairs :"+ " "+finaltotal);

			}
			this.totalscore=finaltotal;
			console.log(" 6) final Total :"+" "+finaltotal); 	       


	  }

	  RefreshPage(){
	  	let loader = this.loadingCtrl.create({
	  	  content: "Refreshing ...",
	  	  duration: 1500
	  	});
	  	loader.present();
	  	this.navCtrl.setRoot(Calculator);
	  } 


}
