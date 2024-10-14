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
				if(document.getElementById('affordCart').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=50){
						document.getElementById('affordCart').innerHTML='Buy';
					}else{
						document.getElementById('affordCart').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordHeadphone').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=150){
						document.getElementById('affordHeadphone').innerHTML='Buy';
					}else{
						document.getElementById('affordHeadphone').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordShoes').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=500){
						document.getElementById('affordShoes').innerHTML='Buy';
					}else{
						document.getElementById('affordShoes').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordPhone').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=1750){
						document.getElementById('affordPhone').innerHTML='Buy';
					}else{
						document.getElementById('affordPhone').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordWatch').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=4500){
						document.getElementById('affordWatch').innerHTML='Buy';
					}else{
						document.getElementById('affordWatch').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordUsedCar').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=12000){
						document.getElementById('affordUsedCar').innerHTML='Buy';
					}else{
						document.getElementById('affordUsedCar').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordDecentCar').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=40000){
						document.getElementById('affordDecentCar').innerHTML='Buy';
					}else{
						document.getElementById('affordDecentCar').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordHouse').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=100000){
						document.getElementById('affordHouse').innerHTML='Buy';
					}else{
						document.getElementById('affordHouse').innerHTML='Cannot Afford';
					}
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
				if(document.getElementById('affordFancyCar').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=250000){
						document.getElementById('affordFancyCar').innerHTML='Buy';
					}else{
						document.getElementById('affordFancyCar').innerHTML='Cannot Afford';
					}
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

				switch(Number(document.getElementById('incomeUL').innerHTML)){
					case 0:
						if(document.getElementById('trueMonee').innerHTML>=30000){
							document.getElementById('affordIncomeU').innerHTML='Buy';
						}else{
							document.getElementById('affordIncomeU').innerHTML='Cannot Afford';
						}
					break;
					case 10:
						document.getElementById('incomeUC').innerHTML='90K';
						document.getElementById('incomeULN').innerHTML='20';
						if(document.getElementById('trueMonee').innerHTML>=90000){
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
						if(document.getElementById('trueMonee').innerHTML>=35000){
							document.getElementById('affordSuperPowerU').innerHTML='Buy';
						}else{
							document.getElementById('affordSuperPowerU').innerHTML='Cannot Afford';
						}
					break;
					case 'x200':
						document.getElementById('superPowerUC').innerHTML='80K';
						document.getElementById('superPowerULN').innerHTML='x300';
						if(document.getElementById('trueMonee').innerHTML>=80000){
							document.getElementById('affordSuperPowerU').innerHTML='Buy';
						}else{
							document.getElementById('affordSuperPowerU').innerHTML='Cannot Afford';
						}
					break;
					case 'x300':
						document.getElementById('affordSuperPowerU').innerHTML='Maxed Out!';
					break;
				}

				if(document.getElementById('affordCasinoKit').innerHTML!='Owned'){
					if(document.getElementById('trueMonee').innerHTML>=50000){
						document.getElementById('affordCasinoKit').innerHTML='Buy';
					}else{
						document.getElementById('affordCasinoKit').innerHTML='Cannot Afford';
					}
				}

				if(document.getElementById('affordFancyCar').innerHTML=='Owned' && document.getElementById('affordHouse').innerHTML=='Owned' && document.getElementById('affordDecentCar').innerHTML=='Owned' && document.getElementById('affordWaterBottle').innerHTML=='Owned' && document.getElementById('affordCart').innerHTML=='Owned' && document.getElementById('affordHeadphone').innerHTML=='Owned'){
					giveAchievementAllItem();
				}
			}
			function moneyTab(){
				document.getElementById('moneyDisplayer').style='display:block;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('achievementDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:bold;';
					}
					document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}
				convertMonee();
			}
			function shopTab(){
				checkShopPrices();

				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:block;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('achievementDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}
			}
			function casinoTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:block;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('achievementDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}
			}
			function prestigeTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:block;';
				document.getElementById('achievementDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}
			}
			function achievementTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('achievementDisplayer').style='display:block;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('achievementTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('achievementTab2').innerHTML='Achievements';
					document.getElementById('achievementTabNotifi').innerHTML='';
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='black';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('achievementTab2').innerHTML='Achievements';
					document.getElementById('achievementTabNotifi').innerHTML='';
					document.getElementById('settingsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementByClass('navBttn').style.color='white';
				}

				document.getElementById('achievementTab2').innerHTML='Achievements';
				document.getElementById('achievementTabNotifi').innerHTML='';
			}
			function settingsTab(){
				document.getElementById('moneyDisplayer').style='display:none;';
				document.getElementById('shopDisplayer').style='display:none;';
				document.getElementById('casinoDisplayer').style='display:none;';
				document.getElementById('prestigeDisplayer').style='display:none;';
				document.getElementById('achievementDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:block;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:bold;';
					}
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
				document.getElementById('achievementDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:block;';
				document.getElementById('helpDisplayer').style='display:none;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:bold;';
					}
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
				document.getElementById('achievementDisplayer').style='display:none;';
				document.getElementById('settingsDisplayer').style='display:none;';
				document.getElementById('versionsDisplayer').style='display:none;';
				document.getElementById('helpDisplayer').style='display:block;';

				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:bold;';
					}
					document.getElementById('settingsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(130,130,130);font-weight:bold;';
				}else{
					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					if(document.getElementById('achievementTab2').innerHTML=='Achievements'){
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:bold;';
					}
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
				var truIncom=Number(document.getElementById('trueIncum').innerHTML);
				var sClickChance;
				var sClickPower;
				var sClickReward;
				var cickCouter=Number(document.getElementById('clickCounter').innerHTML);

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
						sClickReward=100*truIncom;
					break;
					case 'x200':
						sClickPower='200';
						sClickReward=200*truIncom;
					break;
					case 'x300':
						sClickPower='300';
						sClickReward=300*truIncom;
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
					giveAchievementSuperClick();
					if(sClickReward>=10000){
						giveAchievement10KClick();
					}
				}else{
					document.getElementById('trueMonee').innerHTML=truMone+truIncom;
				}

				cickCouter++;
				document.getElementById('clickCounter').innerHTML=cickCouter;
				if(cickCouter>=100000){
					giveAchievementClick100K();
				}

				convertMonee();
			}
			function convertMonee(){
				var truMone=Number(document.getElementById('trueMonee').innerHTML);
				var deciMone=Number(Math.round(truMone*10))/10;

				if(truMone>=10000){
					document.getElementById('monee').innerHTML=Math.round(truMone);
				}else{
					document.getElementById('monee').innerHTML=deciMone;
				}

				if(Number(document.getElementById('monee').innerHTML)>=1000000){
					giveAchievement1Mil();
				}
			}
			function convertIncum(){
				var incom=Number(document.getElementById('incum').innerHTML);
				var truIncom=Number(document.getElementById('trueIncum').innerHTML);
				var deciIncom=Number(Math.round(truIncom*10))/10;

				if(truIncom>=1000){
					document.getElementById('incum').innerHTML=Math.round(truIncom);
				}else{
					document.getElementById('incum').innerHTML=deciIncom;
				}
			}
		//SHOP
		 //ITEM SHOP
			function buyWaterBottle(){
				var incomeItem1=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem1;
					document.getElementById('affordWaterBottle').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyCart(){
				var incomeItem2=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem2;
					document.getElementById('affordCart').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyHeadphone(){
			var incomeItem3=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem3;
					document.getElementById('affordHeadphone').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyShoes(){
			var incomeItem4=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem4;
					document.getElementById('affordShoes').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyPhone(){
			var incomeItem5=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem5;
					document.getElementById('affordPhone').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyWatch(){
			var incomeItem6=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem6;
					document.getElementById('affordWatch').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyUsedCar(){
			var incomeItem7=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem7;
					document.getElementById('affordUsedCar').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyDecentCar(){
			var incomeItem8=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem8;
					document.getElementById('affordDecentCar').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyHouse(){
			var incomeItem9=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem9;
					document.getElementById('affordHouse').innerHTML='Owned';
					convertIncum();
					checkShopPrices();
				}
			}
			function buyFancyCar(){
			var incomeItem10=Number(document.getElementById('trueIncum').innerHTML);
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
					document.getElementById('trueIncum').innerHTML=incomeItem10;
					document.getElementById('affordFancyCar').innerHTML='Owned';

					convertIncum();
					checkShopPrices();
				}
			}
		 //UPGRADE SHOP
			function upgradeIncome(){
				var upgradeItem1=Number(document.getElementById('trueIncum').innerHTML);

				if(document.getElementById('affordIncomeU').innerHTML=='Buy'){
					switch(Number(document.getElementById('incomeUL').innerHTML)){
						case 0:
							document.getElementById('trueMonee').innerHTML-=30000;
							upgradeItem1*=1.1;
							document.getElementById('trueIncum').innerHTML=upgradeItem1;
							document.getElementById('incomeUL').innerHTML=10;
							document.getElementById('incomeUC').innerHTML='90K';
							document.getElementById('incomeULN').innerHTML='20';
						break;
						case 10:
							document.getElementById('trueMonee').innerHTML-=90000;
							upgradeItem1/=1.1;
							upgradeItem1*=1.2;
							document.getElementById('trueIncum').innerHTML=upgradeItem1;
							document.getElementById('incomeUL').innerHTML=20;
							document.getElementById('incomeUC').innerHTML='no.';
							document.getElementById('incomeULN').innerHTML='no.';
							giveAchievementMaxUpgrade();
							if(document.getElementById('superPowerUL').innerHTML=='x300' && document.getElementById('superChanceUL').innerHTML=='1/5K'){
								giveAchievementAllUpgrade();
							}
						break;
					}
					convertMonee();
					convertIncum();
					checkShopPrices();
				}
			}
			function upgradeSuperPower(){
				if(document.getElementById('affordSuperPowerU').innerHTML=='Buy'){
					switch(document.getElementById('superPowerUL').innerHTML){
						case 'x100':
							document.getElementById('trueMonee').innerHTML-=35000;
							document.getElementById('superPowerUL').innerHTML='x200';
							document.getElementById('superPowerUC').innerHTML='100K';
							document.getElementById('superPowerULN').innerHTML='x300';
						break;
						case 'x200':
							document.getElementById('trueMonee').innerHTML-=80000;
							document.getElementById('superPowerUL').innerHTML='x300';
							document.getElementById('superPowerUC').innerHTML='no.';
							document.getElementById('superPowerULN').innerHTML='no.';
							giveAchievementMaxUpgrade();
							if(Number(document.getElementById('incomeUL').innerHTML)==20 && document.getElementById('superChanceUL').innerHTML=='1/5K'){
								giveAchievementAllUpgrade();
							}
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
							giveAchievementMaxUpgrade();
							if(Number(document.getElementById('incomeUL').innerHTML)==20 && document.getElementById('superPowerUL').innerHTML=='x300'){
								giveAchievementAllUpgrade();
							}
						break;
						default:
							document.getElementById('lois999').innerHTML='loiss';
					}
					convertMonee();
					checkShopPrices();
				}
			}
		 //CASINO SHOP
			function buyCasinoKit(){
				if(document.getElementById('affordCasinoKit').innerHTML=='Buy'){
					document.getElementById('trueMonee').innerHTML-=50000;
					document.getElementById('casinoKitButton').style.display='block';
					document.getElementById('affordCasinoKit').innerHTML='Owned';
					convertMonee();
					checkShopPrices();
				}
			}
		//CASINO
		 //SLOTS
			function gamble(){
				/*
				Hey wait a minute, you're not a developer! Who the fuck said you could be here???

				Are you trying to exploit the slots machine?

				I knew it! Well there's not much I can do to stop you.

				Go on, allow a negative amount of money to be gambled or whatever.

				You worthless cheater.
				*/
				var stakes=document.getElementById('gambleAmount').valueAsNumber;
				var gIncum=Number(document.getElementById('trueIncum').innerHTML)*10;
				var spareMone=Number(document.getElementById('trueMonee').innerHTML);
				var cycle;
				var specialNumber=Number(document.getElementById('trueCasinoNumber').innerHTML);
				var specialEffect=Number(document.getElementById('trueCasinoEffect').innerHTML);

				if(stakes>0){
					if(stakes<=spareMone){
						document.getElementById('trueMonee').innerHTML=spareMone-stakes;
						convertMonee();
						cycle=0;
						document.getElementById('activateSlots').disabled=true;
						document.getElementById('casinoKitButton').disabled=true;
						const cycler1=setInterval(function(){
							document.getElementById('casinoSlot1').innerHTML=Math.floor((Math.random()*7)+1);
							document.getElementById('casinoSlot2').innerHTML=Math.floor((Math.random()*7)+1);
							document.getElementById('casinoSlot3').innerHTML=Math.floor((Math.random()*7)+1);
							cycle+=1;
							if(cycle==20){
								clearInterval(cycler1);
								if(specialNumber>0 && specialEffect>0 && specialEffect<=2){
									switch(specialEffect){
										case 1:
											switch(Math.floor(Math.random()*4)){
												case 0:
													document.getElementById('casinoSlot1').innerHTML=specialNumber;
												break;
												default:
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
															var casinoKitCrew1_1=Math.floor((Math.random()*4)+2);
															if(casinoKitCrew1_1>=specialNumber){
																casinoKitCrew1_1++;
															}
															document.getElementById('casinoSlot1').innerHTML=casinoKitCrew1_1;
															
													}
											}
										break;
										case 2:
											switch(Math.floor(Math.random()*40)){
												case 0:
													document.getElementById('casinoSlot1').innerHTML=specialNumber;
												break;
												case 1:
													document.getElementById('casinoSlot1').innerHTML=specialNumber;
												break;
												case 2:
													document.getElementById('casinoSlot1').innerHTML=specialNumber;
												break;
												default:
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
															var casinoKitCrew1_2=Math.floor((Math.random()*4)+2);
															if(casinoKitCrew1_2>=specialNumber){
																casinoKitCrew1_2++;
															}
															document.getElementById('casinoSlot1').innerHTML=casinoKitCrew1_2;
															
													}
											}
										break;
									}
								}else{
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
								}
								cycle=0;
								const cycler2=setInterval(function(){
									document.getElementById('casinoSlot2').innerHTML=Math.floor((Math.random()*7)+1);
									document.getElementById('casinoSlot3').innerHTML=Math.floor((Math.random()*7)+1);
									cycle+=1;
									if(cycle==20){
										clearInterval(cycler2);
										if(specialNumber>0 && specialEffect>0 && specialEffect<=2){
											switch(specialEffect){
												case 1:
													switch(Math.floor(Math.random()*4)){
														case 0:
															document.getElementById('casinoSlot2').innerHTML=specialNumber;
														break;
														default:
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
																	var casinoKitCrew2_1=Math.floor((Math.random()*4)+2);
																	if(casinoKitCrew2_1>=specialNumber){
																		casinoKitCrew2_1++;
																	}
																	document.getElementById('casinoSlot2').innerHTML=casinoKitCrew2_1;
																	
															}
													}
												break;
												case 2:
													switch(Math.floor(Math.random()*40)){
														case 0:
															document.getElementById('casinoSlot2').innerHTML=specialNumber;
														break;
														case 1:
															document.getElementById('casinoSlot2').innerHTML=specialNumber;
														break;
														case 2:
															document.getElementById('casinoSlot2').innerHTML=specialNumber;
														break;
														default:
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
																	var casinoKitCrew2_2=Math.floor((Math.random()*4)+2);
																	if(casinoKitCrew2_2>=specialNumber){
																		casinoKitCrew2_2++;
																	}
																	document.getElementById('casinoSlot2').innerHTML=casinoKitCrew2_2;
																	
															}
													}
												break;
											}
										}else{
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
										}
										cycle=0;
										const cycler3=setInterval(function(){
											document.getElementById('casinoSlot3').innerHTML=Math.floor((Math.random()*7)+1);
											cycle+=1;
											if(cycle==20){
												clearInterval(cycler3);
												if(specialNumber>0 && specialEffect>0 && specialEffect<=2){
													switch(specialEffect){
														case 1:
															switch(Math.floor(Math.random()*4)){
																case 0:
																	document.getElementById('casinoSlot3').innerHTML=specialNumber;
																break;
																default:
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
																			var casinoKitCrew3_1=Math.floor((Math.random()*4)+2);
																			if(casinoKitCrew3_1>=specialNumber){
																				casinoKitCrew3_1++;
																			}
																			document.getElementById('casinoSlot3').innerHTML=casinoKitCrew3_1;
																			
																	}
															}
														break;
														case 2:
															switch(Math.floor(Math.random()*40)){
																case 0:
																	document.getElementById('casinoSlot3').innerHTML=specialNumber;
																break;
																case 1:
																	document.getElementById('casinoSlot3').innerHTML=specialNumber;
																break;
																case 2:
																	document.getElementById('casinoSlot3').innerHTML=specialNumber;
																break;
																default:
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
																			var casinoKitCrew3_2=Math.floor((Math.random()*4)+2);
																			if(casinoKitCrew3_2>=specialNumber){
																				casinoKitCrew3_2++;
																			}
																			document.getElementById('casinoSlot3').innerHTML=casinoKitCrew3_2;
																			
																	}
															}
														break;
													}
												}else{
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
												}
												var casinoResult1=Number(document.getElementById('casinoSlot1').innerHTML);
												var casinoResult2=Number(document.getElementById('casinoSlot2').innerHTML);
												var casinoResult3=Number(document.getElementById('casinoSlot3').innerHTML);
												spareMone=Number(document.getElementById('trueMonee').innerHTML);
												convertMonee();

												if(casinoResult1==casinoResult2 && casinoResult2==casinoResult3){
													if(casinoResult1==7){
														document.getElementById('casinoNotifi').innerHTML='Jackpot!!<br>+$'+stakes*100+' (x100)';
														spareMone+=Number(stakes*100);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;document.getElementById('casinoKitButton').disabled=false;},3000);
														if(stakes>=gIncum){
															giveAchievementJackpot();
														}
													}else if(casinoResult1==1){
														document.getElementById('casinoNotifi').innerHTML='Minor Triple<br>+$'+stakes*10+' (x10)';
														spareMone+=Number(stakes*10);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;document.getElementById('casinoKitButton').disabled=false;},3000);
													}else{
														switch(casinoResult1){
															case 2:
																document.getElementById('casinoNotifi').innerHTML='Triple 2\'s!<br>+$'+stakes*30+' (x30)';
															break;
															case 3:
																document.getElementById('casinoNotifi').innerHTML='Triple 3\'s!<br>+$'+stakes*30+' (x30)';
															break;
															case 4:
																document.getElementById('casinoNotifi').innerHTML='Triple 4\'s!<br>+$'+stakes*30+' (x30)';
															break;
															case 5:
																document.getElementById('casinoNotifi').innerHTML='Triple 5\'s!<br>+$'+stakes*30+' (x30)';
															break;
															case 6:
																document.getElementById('casinoNotifi').innerHTML='Triple 6\'s!<br>+$'+stakes*30+' (x30)';
															break;
															default:
																document.getElementById('casinoNotifi').innerHTML='Tripleee<br>+$'+stakes*30+' (x30)';
														}
														spareMone+=Number(stakes*30);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;document.getElementById('casinoKitButton').disabled=false;},3000);
													}
												}else if(casinoResult1==casinoResult2 || casinoResult2==casinoResult3){
													if(casinoResult2==7){
														document.getElementById('casinoNotifi').innerHTML='Semi-Jackpot!<br>+$'+stakes*50+' (x50)';
														spareMone+=Number(stakes*50);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;document.getElementById('casinoKitButton').disabled=false;},3000);
													}else if(casinoResult2==1){
														document.getElementById('casinoNotifi').innerHTML='Minor Double<br>+$'+stakes*2+' (x2)';
														spareMone+=Number(stakes*2);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;document.getElementById('casinoKitButton').disabled=false;},3000);
													}else{
														switch(casinoResult1){
															case 2:
																document.getElementById('casinoNotifi').innerHTML='Double 2\'s<br>+$'+stakes*3+' (x3)';
															break;
															case 3:
																document.getElementById('casinoNotifi').innerHTML='Double 3\'s!<br>+$'+stakes*3+' (x3)';
															break;
															case 4:
																document.getElementById('casinoNotifi').innerHTML='Double 4\'s!<br>+$'+stakes*3+' (x3)';
															break;
															case 5:
																document.getElementById('casinoNotifi').innerHTML='Double 5\'s!<br>+$'+stakes*3+' (x3)';
															break;
															case 6:
																document.getElementById('casinoNotifi').innerHTML='Double 6\'s!<br>+$'+stakes*3+' (x3)';
															break;
															default:
																document.getElementById('casinoNotifi').innerHTML='Doublee<br>+$'+stakes*3+' (x3)';
														}
														spareMone+=Number(stakes*3);
														document.getElementById('trueMonee').innerHTML=spareMone;
														setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;document.getElementById('casinoKitButton').disabled=false;},3000);
													}
												}else{
													switch(Math.floor(Math.random()*1000)){
														case 0:
															document.getElementById('casinoNotifi').innerHTML='Congrats, you gambled so much you got a 0.1% loss message';
														break;
														default:
															switch(Math.floor(Math.random()*14)){
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
																case 8:
																	document.getElementById('casinoNotifi').innerHTML='Are ya winnin son?';
																break;
																case 9:
																	document.getElementById('casinoNotifi').innerHTML='Gambling addiction is a myth made up by the government<br>to stop people from getting too rich';
																break;
																case 10:
																	document.getElementById('casinoNotifi').innerHTML='https://www.youtube.com/watch?v=HMuYfScGpbE';
																break;
																case 11:
																	document.getElementById('casinoNotifi').innerHTML='Keep it up, maybe you\'ll win around the time tf2 gets updated';
																break;
																case 12:
																	document.getElementById('casinoNotifi').innerHTML='One More?';
																break;
																case 13:
																	document.getElementById('casinoNotifi').innerHTML='An entire casino update, and you <strong>still</strong> can\'t win <span id=\'swearInstance2\'>s**t</span>';
																break;
															}
													}
													setTimeout(function(){document.getElementById('casinoNotifi').innerHTML='';document.getElementById('activateSlots').disabled=false;document.getElementById('casinoKitButton').disabled=false;},3000);
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
		 //KIT
			function openCasinoKit(){
				document.getElementById('casinoHijackKit').style.display='block';
				document.getElementById('blurredBackground1').style.display='block';

				document.getElementById('moneyDisplayer').style.pointerEvents='none';
				document.getElementById('shopDisplayer').style.pointerEvents='none';
				document.getElementById('casinoDisplayer').style.pointerEvents='none';
				document.getElementById('prestigeDisplayer').style.pointerEvents='none';
				document.getElementById('settingsDisplayer').style.pointerEvents='none';
				document.getElementById('versionsDisplayer').style.pointerEvents='none';
				document.getElementById('helpDisplayer').style.pointerEvents='none';
				document.getElementById('achievementDisplayer').style.pointerEvents='none';

				document.getElementById('casinoKitButton').style.pointerEvents='none';
				document.getElementById('activateSlots').style.pointerEvents='none';
			}
			function closeCasinoKit(){
				document.getElementById('casinoHijackKit').style.display='none';
				document.getElementById('blurredBackground1').style.display='none';

				document.getElementById('moneyDisplayer').style.pointerEvents='auto';
				document.getElementById('shopDisplayer').style.pointerEvents='auto';
				document.getElementById('casinoDisplayer').style.pointerEvents='auto';
				document.getElementById('prestigeDisplayer').style.pointerEvents='auto';
				document.getElementById('settingsDisplayer').style.pointerEvents='auto';
				document.getElementById('versionsDisplayer').style.pointerEvents='auto';
				document.getElementById('helpDisplayer').style.pointerEvents='auto';
				document.getElementById('achievementDisplayer').style.pointerEvents='auto';

				document.getElementById('casinoKitButton').style.pointerEvents='auto';
				document.getElementById('activateSlots').style.pointerEvents='auto';
			}
			function casinoKitChooseNumber2(){
				document.getElementById('casinoKitNumber2').style.backgroundColor='#d0d0d0';
				document.getElementById('casinoKitNumber3').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber4').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber5').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber6').style.backgroundColor='#f0f0f0';
				
				document.getElementById('casinoKitNumber2').style.transform='translate(0,1px)';
				document.getElementById('casinoKitNumber3').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber4').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber5').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber6').style.transform='translate(0,0)';
				
				document.getElementById('trueCasinoNumber').innerHTML=2;
			}
			function casinoKitChooseNumber3(){
				document.getElementById('casinoKitNumber2').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber3').style.backgroundColor='#d0d0d0';
				document.getElementById('casinoKitNumber4').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber5').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber6').style.backgroundColor='#f0f0f0';
				
				document.getElementById('casinoKitNumber2').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber3').style.transform='translate(0,1px)';
				document.getElementById('casinoKitNumber4').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber5').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber6').style.transform='translate(0,0)';

				document.getElementById('trueCasinoNumber').innerHTML=3;
			}
			function casinoKitChooseNumber4(){
				document.getElementById('casinoKitNumber2').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber3').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber4').style.backgroundColor='#d0d0d0';
				document.getElementById('casinoKitNumber5').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber6').style.backgroundColor='#f0f0f0';
				
				document.getElementById('casinoKitNumber2').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber3').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber4').style.transform='translate(0,1px)';
				document.getElementById('casinoKitNumber5').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber6').style.transform='translate(0,0)';

				document.getElementById('trueCasinoNumber').innerHTML=4;
			}
			function casinoKitChooseNumber5(){
				document.getElementById('casinoKitNumber2').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber3').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber4').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber5').style.backgroundColor='#d0d0d0';
				document.getElementById('casinoKitNumber6').style.backgroundColor='#f0f0f0';
				
				document.getElementById('casinoKitNumber2').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber3').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber4').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber5').style.transform='translate(0,1px)';
				document.getElementById('casinoKitNumber6').style.transform='translate(0,0)';

				document.getElementById('trueCasinoNumber').innerHTML=5;
			}
			function casinoKitChooseNumber6(){
				document.getElementById('casinoKitNumber2').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber3').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber4').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber5').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitNumber6').style.backgroundColor='#d0d0d0';
				
				document.getElementById('casinoKitNumber2').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber3').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber4').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber5').style.transform='translate(0,0)';
				document.getElementById('casinoKitNumber6').style.transform='translate(0,1px)';

				document.getElementById('trueCasinoNumber').innerHTML=6;
			}
            
            function casinoKitChooseEffect1(){
				document.getElementById('casinoKitEffect1').style.backgroundColor='#d0d0d0';
				document.getElementById('casinoKitEffect2').style.backgroundColor='#f0f0f0';
				
				document.getElementById('casinoKitEffect1').style.transform='translate(0,1px)';
				document.getElementById('casinoKitEffect2').style.transform='translate(0,0)';

				document.getElementById('trueCasinoEffect').innerHTML=1;
			}
			function casinoKitChooseEffect2(){
				document.getElementById('casinoKitEffect1').style.backgroundColor='#f0f0f0';
				document.getElementById('casinoKitEffect2').style.backgroundColor='#d0d0d0';
				
				document.getElementById('casinoKitEffect1').style.transform='translate(0,0)';
				document.getElementById('casinoKitEffect2').style.transform='translate(0,1px)';

				document.getElementById('trueCasinoEffect').innerHTML=2;
			}
		//ACHIEVEMENTS
			function giveAchievement1Mil(){
				var achievementCount1=Number(document.getElementById('achievementsGotten').innerHTML);
				
				if(document.getElementById('achievement1Mil').disabled==true){
					document.getElementById('achievement1Mil').disabled=false;
					document.getElementById('achievementStatus1Mil').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount1++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount1;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementAllItem(){
				var achievementCount2=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementAllItem').disabled==true){
					document.getElementById('achievementAllItem').disabled=false;
					document.getElementById('achievementStatusAllItem').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount2++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount2;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementMaxUpgrade(){
				var achievementCount3=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementMaxUpgrade').disabled==true){
					document.getElementById('achievementMaxUpgrade').disabled=false;
					document.getElementById('achievementStatusMaxUpgrade').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount3++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount3;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementAllUpgrade(){
				var achievementCount4=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementAllUpgrade').disabled==true){
					document.getElementById('achievementAllUpgrade').disabled=false;
					document.getElementById('achievementStatusAllUpgrade').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount4++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount4;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementClick100K(){
				var achievementCount5=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementClick100K').disabled==true){
					document.getElementById('achievementClick100K').disabled=false;
					document.getElementById('achievementStatusClick100K').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount5++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount5;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementSuperClick(){
				var achievementCount6=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementSuperClick').disabled==true){
					document.getElementById('achievementSuperClick').disabled=false;
					document.getElementById('achievementStatusSuperClick').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount6++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount6;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievement10KClick(){
				var achievementCount7=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievement10KClick').disabled==true){
					document.getElementById('achievement10KClick').disabled=false;
					document.getElementById('achievementStatus10KClick').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount7++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount7;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementPathetic(){
				var achievementCount8=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementPathetic').disabled==true){
					document.getElementById('achievementPathetic').disabled=false;
					document.getElementById('achievementStatusPathetic').innerHTML='Completed';
					document.getElementById('sAchievementPathetic').innerHTML='Attempt to escape wroking';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount8++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount8;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementJackpot(){
				var achievementCount9=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementJackpot').disabled==true){
					document.getElementById('achievementJackpot').disabled=false;
					document.getElementById('achievementStatusJackpot').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount9++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount9;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
			function giveAchievementSeriously(){
				var achievementCount10=Number(document.getElementById('achievementsGotten').innerHTML);

				if(document.getElementById('achievementSeriously').disabled==true){
					document.getElementById('achievementSeriously').disabled=false;
					document.getElementById('achievementStatusSeriously').innerHTML='Completed';
					document.getElementById('achievementTab2').innerHTML='Achievements +';
					if(document.getElementById('achievementTabNotifi').innerHTML==''){
						document.getElementById('achievementTabNotifi').innerHTML=1;
					}else{
						document.getElementById('achievementTabNotifi').innerHTML++;
					}
					achievementCount10++;
					document.getElementById('achievementsGotten').innerHTML=achievementCount10;
					if(document.getElementById('darkLight').innerHTML=='Dark Mode'){
						document.getElementById('achievementTab').style='font-weight:bold;';
					}else{
						document.getElementById('achievementTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					}
				}
			}
		//SETTINGS
			function darkLightMode(){
				if(document.getElementById('darkLight').innerHTML=='Light Mode'){
					document.getElementById('darkLight').innerHTML='Dark Mode';
					document.getElementById('darkLight').style='background-color:black;color:white;';

					document.body.style='background-color:rgb(80,80,80);';

					document.getElementById('moneyTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('achievementTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(110,110,110);font-weight:bold;';
					document.getElementById('versionsTab').style='background-color:rgb(70,70,70);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(70,70,70);font-weight:normal;';
				}else{
					document.getElementById('darkLight').innerHTML='Light Mode';
					document.getElementById('darkLight').style='background-color:white;color:black;';

					document.body.style='background-color:lightgrey;';

					document.getElementById('moneyTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('shopTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('casinoTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('prestigeTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('achievementTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('settingsTab').style='background-color:rgb(130,130,130);font-weight:bold;';
					document.getElementById('versionsTab').style='background-color:rgb(150,150,150);font-weight:normal;';
					document.getElementById('helpTab').style='background-color:rgb(150,150,150);font-weight:normal;';

					document.getElementByClass('navBttn').style.color='black';
				}
			}
			function versionBelowTitle(){
				if(document.getElementById('versionTitleToggle').innerHTML=='Show'){
					document.getElementById('titleVersion').style='display:none;';
					document.getElementById('versionTitleToggle').innerHTML='Hide';
					document.getElementById('versionTitleToggle').style.backgroundColor='black';
					document.getElementById('versionTitleToggle').style.color='white';
				}else{
					document.getElementById('titleVersion').style='display:normal;';
					document.getElementById('versionTitleToggle').innerHTML='Show';
					document.getElementById('versionTitleToggle').style.backgroundColor='white';
					document.getElementById('versionTitleToggle').style.color='black';
				}
			}
			function naughtyWordToggle(){
				if(document.getElementById('swearToggle').innerHTML=='Censor'){
					/*document.getElementById('swearInstance1').innerHTML='s';
					document.getElementById('swearInstance2').innerHTML='anything';*/
					document.getElementById('swearToggle').innerHTML='Hide';
					document.getElementById('swearToggle').style.backgroundColor='black';
					document.getElementById('swearToggle').style.color='white';
				}else if(document.getElementById('swearToggle').innerHTML=='Hide'){
					//document.getElementById('swearInstance1').innerHTML='fucking s';
					//document.getElementById('swearInstance2').innerHTML='shit';
					document.getElementById('swearToggle').style.backgroundColor='white';
					document.getElementById('swearToggle').style.color='black';
				}else{
					//document.getElementById('swearInstance1').innerHTML='f***king s';
					//document.getElementById('swearInstance2').innerHTML='s**t';
					document.getElementById('swearToggle').innerHTML='Censor';
					document.getElementById('swearToggle').style='background-color:rgb(127,127,127);color:black;';
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
				giveAchievementPathetic();
			}