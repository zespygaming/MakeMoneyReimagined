		//LOCAL DATA
			//document.getElementById('monee').innerHTML=localStorage.getItem('money');

		//NAVBAR
			function checkShopPrices(){
				if(document.getElementById('affordWaterBottle').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=10){
						document.getElementById('affordWaterBottle').innerHTML='Buy';
					}else{
						document.getElementById('affordWaterBottle').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainWaterBottle').innerHTML=1;
						break;
						case 10:
							document.getElementById('gainWaterBottle').innerHTML=1.1;
						break;
						case 20:
							document.getElementById('gainWaterBottle').innerHTML=1.2;
						break;
					}
				}
				if(document.getElementById('affordCart').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=50){
						document.getElementById('affordCart').innerHTML='Buy';
					}else{
						document.getElementById('affordCart').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainCart').innerHTML=1;
						break;
						case 10:
							document.getElementById('gainCart').innerHTML=1.1;
						break;
						case 20:
							document.getElementById('gainCart').innerHTML=1.2;
						break;
					}
				}
				if(document.getElementById('affordHeadphone').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=150){
						document.getElementById('affordHeadphone').innerHTML='Buy';
					}else{
						document.getElementById('affordHeadphone').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainHeadphone').innerHTML=2;
						break;
						case 10:
							document.getElementById('gainHeadphone').innerHTML=2.2;
						break;
						case 20:
							document.getElementById('gainHeadphone').innerHTML=2.4;
						break;
					}
				}
				if(document.getElementById('affordShoes').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=500){
						document.getElementById('affordShoes').innerHTML='Buy';
					}else{
						document.getElementById('affordShoes').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainShoes').innerHTML=2;
						break;
						case 10:
							document.getElementById('gainShoes').innerHTML=2.2;
						break;
						case 20:
							document.getElementById('gainShoes').innerHTML=2.4;
						break;
					}
				}
				if(document.getElementById('affordPhone').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=1750){
						document.getElementById('affordPhone').innerHTML='Buy';
					}else{
						document.getElementById('affordPhone').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainPhone').innerHTML=3;
						break;
						case 10:
							document.getElementById('gainPhone').innerHTML=3.3;
						break;
						case 20:
							document.getElementById('gainPhone').innerHTML=3.6;
						break;
					}
				}
				if(document.getElementById('affordWatch').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=4500){
						document.getElementById('affordWatch').innerHTML='Buy';
					}else{
						document.getElementById('affordWatch').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainWatch').innerHTML=3;
						break;
						case 10:
							document.getElementById('gainWatch').innerHTML=3.3;
						break;
						case 20:
							document.getElementById('gainWatch').innerHTML=3.6;
						break;
					}
				}
				if(document.getElementById('affordUsedCar').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=12000){
						document.getElementById('affordUsedCar').innerHTML='Buy';
					}else{
						document.getElementById('affordUsedCar').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainUsedCar').innerHTML=4;
						break;
						case 10:
							document.getElementById('gainUsedCar').innerHTML=4.4;
						break;
						case 20:
							document.getElementById('gainUsedCar').innerHTML=4.8;
						break;
					}
				}
				if(document.getElementById('affordDecentCar').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=40000){
						document.getElementById('affordDecentCar').innerHTML='Buy';
					}else{
						document.getElementById('affordDecentCar').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainDecentCar').innerHTML=4;
						break;
						case 10:
							document.getElementById('gainDecentCar').innerHTML=4.4;
						break;
						case 20:
							document.getElementById('gainDecentCar').innerHTML=4.8;
						break;
					}
				}
				if(document.getElementById('affordHouse').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=100000){
						document.getElementById('affordHouse').innerHTML='Buy';
					}else{
						document.getElementById('affordHouse').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainHouse').innerHTML=5;
						break;
						case 10:
							document.getElementById('gainHouse').innerHTML=5.5;
						break;
						case 20:
							document.getElementById('gainHouse').innerHTML=6;
						break;
					}
				}
				if(document.getElementById('affordFancyCar').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=250000){
						document.getElementById('affordFancyCar').innerHTML='Buy';
					}else{
						document.getElementById('affordFancyCar').innerHTML='Cannot Afford';
					}
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('gainFancyCar').innerHTML=6;
						break;
						case 10:
							document.getElementById('gainFancyCar').innerHTML=6.6;
						break;
						case 20:
							document.getElementById('gainFancyCar').innerHTML=7.2;
						break;
					}
				}

				switch(Number(document.getElementById('incomeUL').innerHTML)){
					case 0:
						if(document.getElementById('trueMonee').innerHTML>=50000){
							document.getElementById('affordIncomeU').innerHTML='Buy';
						}else{
							document.getElementById('affordIncomeU').innerHTML='Cannot Afford';
						}
					break;
					case 10:
						document.getElementById('incomeUC').innerHTML='150K';
						document.getElementById('incomeULN').innerHTML='20';
						if(document.getElementById('trueMonee').innerHTML>=150000){
							document.getElementById('affordIncomeU').innerHTML='Buy';
						}else{
							document.getElementById('affordIncomeU').innerHTML='Cannot Afford';
						}
					break;
					case 20:
						document.getElementById('affordIncomeU').innerHTML='Maxed out!';
					break;
				}
				switch(document.getElementById('superChanceUL').innerHTML){
					case '1/100K':
						if(document.getElementById('trueMonee').innerHTML>=35000){
							document.getElementById('affordSuperChanceU').innerHTML='Buy';
						}else{
							document.getElementById('affordSuperChanceU').innerHTML='Cannot Afford';
						}
					break;
					case '1/10K':
						document.getElementById('superChanceUC').innerHTML='80K';
						document.getElementById('superChanceULN').innerHTML='1/5K';
						if(document.getElementById('trueMonee').innerHTML>=80000){
							document.getElementById('affordSuperChanceU').innerHTML='Buy';
						}else{
							document.getElementById('affordSuperChanceU').innerHTML='Cannot Afford';
						}
					break;
					case '1/5K':
						document.getElementById('affordSuperChanceU').innerHTML='Maxed Out!';
					break;
				}
				switch(document.getElementById('superPowerUL').innerHTML){
					case 'x100':
						if(document.getElementById('trueMonee').innerHTML>=45000){
							document.getElementById('affordSuperPowerU').innerHTML='Buy';
						}else{
							document.getElementById('affordSuperPowerU').innerHTML='Cannot Afford';
						}
					break;
					case 'x200':
						document.getElementById('superPowerUC').innerHTML='100K';
						document.getElementById('superPowerULN').innerHTML='x300';
						if(document.getElementById('trueMonee').innerHTML>=100000){
							document.getElementById('affordSuperPowerU').innerHTML='Buy';
						}else{
							document.getElementById('affordSuperPowerU').innerHTML='Cannot Afford';
						}
					break;
					case 'x300':
						document.getElementById('affordSuperPowerU').innerHTML='Maxed Out!';
					break;
				}
			}
			function moneyTab(){
				document.getElementById('moneyDisplayer').style='display:block;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='white';
				}
				convertMonee();
			}
			function shopTab(){
				checkShopPrices();

				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:block;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='white';
				}
			}
			function casinoTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:block;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='white';
				}
			}
			function prestigeTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:block;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='white';
				}
			}
			function settingsTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:block;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}
			}
			function versionsTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:block;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}
			}
			function helpTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:block;';

				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(130,130,130);font-weight:bold;';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(110,110,110);font-weight:bold;';
				}
			}
		//MONEY
			function gain(){
				var mone=Number(document.getElementById('monee').innerHTML);
				var truMone=Number(document.getElementById('trueMonee').innerHTML);
				var incom=Number(document.getElementById('incum').innerHTML);
				var sClickChance;
				var sClickPower;
				var sClickReward;
				switch(document.getElementById('superChanceUL').innerHTML){
					case '1/100K':
						sClickChance='100000';
					break;
					case '1/10K':
						sClickChance='10000';
					break;
					case '1/5K':
						sClickChance='5000';
					break;
				}
				switch(document.getElementById('superPowerUL').innerHTML){
					case 'x100':
						sClickPower='100';
						sClickReward=100*incom;
					break;
					case 'x200':
						sClickPower='200';
						sClickReward=200*incom;
					break;
					case 'x300':
						sClickPower='300';
						sClickReward=300*incom;
					break;
				}

				document.getElementById('wrok').addEventListener('keydown',function(e){
 			  	var key = e.keyCode||e.charCode;

  		 		if (key == 13){
    	 			e.stopPropagation();
    				e.preventDefault();
  				}
				}
				);

				if(Math.floor(Math.random()*sClickChance)==0){
					document.getElementById('notifis').innerHTML='Super Click! +$'+sClickPower*incom;
					setTimeout(function(){
						document.getElementById('notifis').innerHTML='';
					},2500);
					document.getElementById('trueMonee').innerHTML=truMone+sClickReward;
				}else{
					document.getElementById('trueMonee').innerHTML=truMone+incom;
				}
				convertMonee();
			}
			function convertMonee(){
				var mone=Number(document.getElementById('monee').innerHTML);
				var truMone=Number(document.getElementById('trueMonee').innerHTML);

				document.getElementById('monee').innerHTML=Math.round(truMone);
			}
		//SHOP
		 //ITEM SHOP
			function buyWaterBottle(){
				var incomeItem1=Number(document.getElementById('incum').innerHTML);
				var incomeUp1=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordWaterBottle').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=10;
					convertMonee();
					switch(incomeUp1){
						case 0:
							incomeItem1+=1;
						break;
						case 10:
							incomeItem1+=1.1;
						break;
						case 20:
							incomeItem1+=1.2;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem1;
					document.getElementById('affordWaterBottle').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyCart(){
				var incomeItem2=Number(document.getElementById('incum').innerHTML);
				var incomeUp2=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordCart').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=50;
					convertMonee();
					switch(incomeUp2){
						case 0:
							incomeItem2+=1;
						break;
						case 10:
							incomeItem2+=1.1;
						break;
						case 20:
							incomeItem2+=1.2;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem2;
					document.getElementById('affordCart').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyHeadphone(){
			var incomeItem3=Number(document.getElementById('incum').innerHTML);
			var incomeUp3=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordHeadphone').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=150;
					convertMonee();
					switch(incomeUp3){
						case 0:
							incomeItem3+=2;
						break;
						case 10:
							incomeItem3+=2.2;
						break;
						case 20:
							incomeItem3+=2.4;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem3;
					document.getElementById('affordHeadphone').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyShoes(){
			var incomeItem4=Number(document.getElementById('incum').innerHTML);
			var incomeUp4=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordShoes').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=500;
					convertMonee();
					switch(incomeUp4){
						case 0:
							incomeItem4+=2;
						break;
						case 10:
							incomeItem4+=2.2;
						break;
						case 20:
							incomeItem4+=2.4;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem4;
					document.getElementById('affordShoes').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyPhone(){
			var incomeItem5=Number(document.getElementById('incum').innerHTML);
			var incomeUp5=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordPhone').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=1750;
					convertMonee();
					switch(incomeUp5){
						case 0:
							incomeItem5+=3;
						break;
						case 10:
							incomeItem5+=3.3;
						break;
						case 20:
							incomeItem5+=3.6;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem5;
					document.getElementById('affordPhone').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyWatch(){
			var incomeItem6=Number(document.getElementById('incum').innerHTML);
			var incomeUp6=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordWatch').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=4500;
					convertMonee();
					switch(incomeUp6){
						case 0:
							incomeItem6+=3;
						break;
						case 10:
							incomeItem6+=3.3;
						break;
						case 20:
							incomeItem6+=3.6;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem6;
					document.getElementById('affordWatch').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyUsedCar(){
			var incomeItem7=Number(document.getElementById('incum').innerHTML);
			var incomeUp7=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordUsedCar').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=12000;
					convertMonee();
					switch(incomeUp7){
						case 0:
							incomeItem7+=4;
						break;
						case 10:
							incomeItem7+=4.4;
						break;
						case 20:
							incomeItem7+=4.8;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem7;
					document.getElementById('affordUsedCar').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyDecentCar(){
			var incomeItem8=Number(document.getElementById('incum').innerHTML);
			var incomeUp8=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordDecentCar').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=40000;
					convertMonee();
					switch(incomeUp8){
						case 0:
							incomeItem8+=4;
						break;
						case 10:
							incomeItem8+=4.4;
						break;
						case 20:
							incomeItem8+=4.8;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem8;
					document.getElementById('affordDecentCar').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyHouse(){
			var incomeItem9=Number(document.getElementById('incum').innerHTML);
			var incomeUp9=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordHouse').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=100000;
					convertMonee();
					switch(incomeUp9){
						case 0:
							incomeItem9+=5;
						break;
						case 10:
							incomeItem9+=5.5;
						break;
						case 20:
							incomeItem9+=6;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem9;
					document.getElementById('affordHouse').innerHTML='Owned';
					checkShopPrices();
				}
			}
			function buyFancyCar(){
			var incomeItem10=Number(document.getElementById('incum').innerHTML);
			var incomeUp10=Number(document.getElementById('incomeUL').innerHTML);

				if(document.getElementById('affordFancyCar').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=250000;
					convertMonee();
					switch(incomeUp10){
						case 0:
							incomeItem10+=6;
						break;
						case 10:
							incomeItem10+=6.6;
						break;
						case 20:
							incomeItem10+=7.2;
						break;
					}
					document.getElementById('incum').innerHTML=incomeItem10;
					document.getElementById('affordFancyCar').innerHTML='Owned';
					checkShopPrices();
				}
			}
		 //UPGRADE SHOP
			function upgradeIncome(){
				var upgradeItem1=Number(document.getElementById('incum').innerHTML);

				if(document.getElementById('affordIncomeU').innerHTML=='Buy'){
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('trueMonee').innerHTML-=50000;
							upgradeItem1*=1.1;
							document.getElementById('incum').innerHTML=upgradeItem1;
							document.getElementById('incomeUL').innerHTML=10;
							document.getElementById('incomeUC').innerHTML='150K';
							document.getElementById('incomeULN').innerHTML='20';
						break;
						case 10:
							document.getElementById('trueMonee').innerHTML-=150000;
							upgradeItem1/=1.1;
							upgradeItem1*=1.2;
							document.getElementById('incum').innerHTML=upgradeItem1;
							document.getElementById('incomeUL').innerHTML=20;
							document.getElementById('incomeUC').innerHTML='no.';
							document.getElementById('incomeULN').innerHTML='no.';
						break;
					}
					convertMonee();
					checkShopPrices();
				}
			}
			function upgradeSuperPower(){
				if(document.getElementById('affordSuperPowerU').innerHTML=='Buy'){
					switch(document.getElementById('superPowerUL').innerHTML){
						case 'x100':
							document.getElementById('trueMonee').innerHTML-=45000;
							document.getElementById('superPowerUL').innerHTML='x200';
							document.getElementById('superPowerUC').innerHTML='100K';
							document.getElementById('superPowerULN').innerHTML='x300';
						break;
						case 'x200':
							document.getElementById('trueMonee').innerHTML-=100000;
							document.getElementById('superPowerUL').innerHTML='x300';
							document.getElementById('superPowerUC').innerHTML='no.';
							document.getElementById('superPowerULN').innerHTML='no.';
						break;
						default:
							document.getElementById('lois999').innerHTML=p;
					}
					convertMonee();
					checkShopPrices();
				}
			}
			function upgradeSuperChance(){
				if(document.getElementById('affordSuperChanceU').innerHTML=='Buy'){
					switch(document.getElementById('superChanceUL').innerHTML){
						case '1/100K':
							document.getElementById('trueMonee').innerHTML-=35000;
							document.getElementById('superChanceUL').innerHTML='1/10K';
							document.getElementById('superChanceUC').innerHTML='80K';
							document.getElementById('superChanceULN').innerHTML='1/5K';
						break;
						case '1/10K':
							document.getElementById('trueMonee').innerHTML-=80000;
							document.getElementById('superChanceUL').innerHTML='1/5K';
							document.getElementById('superChanceUC').innerHTML='no.';
							document.getElementById('superChanceULN').innerHTML='no.';
						break;
						default:
							document.getElementById('lois999').innerHTML='loiss';
					}
					convertMonee();
					checkShopPrices();
				}
			}
		//CASINO
			function gamble(){
				/*
				Hey wait a minute, you're not a developer! Who the fuck said you could be here???

				Are you trying to exploit the slots machine?

				I knew it! Well there's not much I can do to stop you.

				Go on, allow a negative amount of money to be gambled or whatever.

				You dirty rat.
				*/
				var stakes=document.getElementById('gambleAmount').valueAsNumber;
				var spareMone=Number(document.getElementById('trueMonee').innerHTML);
				var cycle;
				if(stakes>0){
					if(stakes<=spareMone){
						document.getElementById('trueMonee').innerHTML=spareMone-stakes;
						convertMonee();
						cycle=0;
						document.getElementById('activateSlots').disabled=true;
						const cycler1=setInterval(function(){
							document.getElementById('casinoSlot1').innerHTML=Math.floor((Math.random()*7)+1);
							document.getElementById('casinoSlot2').innerHTML=Math.floor((Math.random()*7)+1);
							document.getElementById('casinoSlot3').innerHTML=Math.floor((Math.random()*7)+1);
							cycle+=1;
							if(cycle==20){
								clearInterval(cycler1);
								switch(Math.floor(Math.random()*10)){
									case 0:
										document.getElementById('casinoSlot1').innerHTML=1;
									break;
									case 1:
										document.getElementById('casinoSlot1').innerHTML=1;
									break;
									case 2:
										document.getElementById('casinoSlot1').innerHTML=7;
									break;
									default:
										document.getElementById('casinoSlot1').innerHTML=Math.floor((Math.random()*5)+2);
								}
								cycle=0;
								const cycler2=setInterval(function(){
									document.getElementById('casinoSlot2').innerHTML=Math.floor((Math.random()*7)+1);
									document.getElementById('casinoSlot3').innerHTML=Math.floor((Math.random()*7)+1);
									cycle+=1;
									if(cycle==20){
										clearInterval(cycler2);
										switch(Math.floor(Math.random()*10)){
											case 0:
												document.getElementById('casinoSlot2').innerHTML=1;
											break;
											case 1:
												document.getElementById('casinoSlot2').innerHTML=1;
											break;
											case 2:
												document.getElementById('casinoSlot2').innerHTML=7;
											break;
											default:
												document.getElementById('casinoSlot2').innerHTML=Math.floor((Math.random()*5)+2);
										}
										cycle=0;
										const cycler3=setInterval(function(){
											document.getElementById('casinoSlot3').innerHTML=Math.floor((Math.random()*7)+1);
											cycle+=1;
											if(cycle==20){
												clearInterval(cycler3);
												switch(Math.floor(Math.random()*10)){
													case 0:
														document.getElementById('casinoSlot3').innerHTML=1;
													break;
													case 1:
														document.getElementById('casinoSlot3').innerHTML=1;
													break;
													case 2:
														document.getElementById('casinoSlot3').innerHTML=7;
													break;
													default:
														document.getElementById('casinoSlot3').innerHTML=Math.floor((Math.random()*5)+2);
												}
												var casinoResult1=Number(document.getElementById('casinoSlot1').innerHTML);
												var casinoResult2=Number(document.getElementById('casinoSlot2').innerHTML);
												var casinoResult3=Number(document.getElementById('casinoSlot3').innerHTML);
												spareMone=Number(document.getElementById('trueMonee').innerHTML);
												convertMonee();

												if(casinoResult1==casinoResult2 && casinoResult2==casinoResult3){
													if(casinoResult1==7){
														document.getElementById('casinoNotifi').innerHTML='Jackpot!!<br>+$'+stakes*100;
														spareMone+=Number(stakes*100);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;},3000);
													}else if(casinoResult1==1){
														document.getElementById('casinoNotifi').innerHTML='Minor Triple<br>+$'+stakes*10;
														spareMone+=Number(stakes*10);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;},3000);
													}else{
														document.getElementById('casinoNotifi').innerHTML='Tripleee<br>+$'+stakes*30;
														spareMone+=Number(stakes*30);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;},3000);
													}
												}else if(casinoResult1==casinoResult2 || casinoResult2==casinoResult3){
													if(casinoResult2==7){
														document.getElementById('casinoNotifi').innerHTML='Semi-Jackpot!<br>+$'+stakes*50;
														spareMone+=Number(stakes*50);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;},3000);
													}else if(casinoResult2==1){
														document.getElementById('casinoNotifi').innerHTML='Minor Double<br>+$'+stakes*2;
														spareMone+=Number(stakes*2);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;},3000);
													}else{
														document.getElementById('casinoNotifi').innerHTML='Doublee<br>+$'+stakes*3;
														spareMone+=Number(stakes*3);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;},3000);
													}
												}else{
													switch(Math.floor(Math.random()*1000)){
														case 0:
															document.getElementById('casinoNotifi').innerHTML='Congrats, you gambled so much you got a 0.1% death message';
														break;
														default:
															switch(Math.floor(Math.random()*8)){
																case 0:
																	document.getElementById('casinoNotifi').innerHTML='You should probably stop wasting your money';
																break;
																case 1:
																	document.getElementById('casinoNotifi').innerHTML='Seriously, stop wasting your money';
																break;
																case 2:
																	document.getElementById('casinoNotifi').innerHTML='Bruh y u waste money so much';
																break;
																case 3:
																	document.getElementById('casinoNotifi').innerHTML='You do realize you werent chosen by the universe to win';
																break;
																case 4:
																	document.getElementById('casinoNotifi').innerHTML='Fun fact: 99% of gamblers quit right before making it big';
																break;
																case 5:
																	document.getElementById('casinoNotifi').innerHTML='One must imagine player happy';
																break;
																case 6:
																	document.getElementById('casinoNotifi').innerHTML='Skill issue';
																break;
																case 7:
																	document.getElementById('casinoNotifi').innerHTML='You lost! AHAHAHAHAHAHAHAHA!!!!';
																break;
															}
													}
													setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;},3000);
												}
												convertMonee();
											}
										},50);
									}
								},50);
							}
						},50);
					}else{
						document.getElementById('casinoNotifi').innerHTML='u dont have enough mone lmao';
						setTimeout(function(){document.getElementById('casinoNotifi').innerHTML=''},3000);
					}
				}else{
					document.getElementById('casinoNotifi').innerHTML='nice try buckaroo, but i patched that exploit';
					setTimeout(function(){document.getElementById('casinoNotifi').innerHTML=''},3000);
				}
			}
		//SETTINGS
			function darkLightMode(){
				if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
					document.getElementById('darkLight').innerHTML='Light Mode';
					document.getElementById('darkLight').style='background-color:black;color:white;';

					document.body.style='background-color:rgb(80,80,80);';

					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}else{
					document.getElementById('darkLight').innerHTML='Dark Mode';
					document.getElementById('darkLight').style='background-color:white;color:black;';

					document.body.style='background-color:lightgrey;';

					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';

					document.getElementByClass('navBttn').style.color='black';
				}
			}
			function versionBelowTitle(){
				if(document.getElementById('versionTitleToggle').innerHTML=='Hide'){
					document.getElementById('titleVersion').style='display:none;';
					document.getElementById('versionTitleToggle').innerHTML='Show';
					document.getElementById('versionTitleToggle').style.backgroundColor='black';
					document.getElementById('versionTitleToggle').style.color='white';
				}else{
					document.getElementById('titleVersion').style='display:normal;';
					document.getElementById('versionTitleToggle').innerHTML='Hide';
					document.getElementById('versionTitleToggle').style.backgroundColor='white';
					document.getElementById('versionTitleToggle').style.color='black';
				}
			}
			function wrokEternal(){
				if(document.getElementById('theOnlyThingTheyFearIsMe').innerHTML=='No'){
					document.getElementById('theOnlyThingTheyFearIsMe').style.backgroundColor='black';
					document.getElementById('theOnlyThingTheyFearIsMe').style.color='white';
					document.getElementById('theOnlyThingTheyFearIsMe').innerHTML='NO';
				}else{
					document.getElementById('theOnlyThingTheyFearIsMe').style.backgroundColor='white';
					document.getElementById('theOnlyThingTheyFearIsMe').style.color='black';
					document.getElementById('theOnlyThingTheyFearIsMe').innerHTML='No';
				}
			}
