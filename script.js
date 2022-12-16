let user = prompt("Please enter your name", "User");
while((user==null) ||(user=="")){
	user = prompt("You haven`t entered your name. Please enter your name again", "User");
}
let body = document.querySelector('body');
let content = document.querySelector('#content');
let partyResult = document.querySelector('#partyResult');
let userName = document.querySelector('#userName');
let btnGenerate = document.querySelector('#btnGenerate');
let btnReturn = document.querySelector('#btnReturn');
let imgDiv = document.querySelector('#casino');
let r1c1 = document.querySelector('#row1col1');
let r1c2 = document.querySelector('#row1col2');
let r1c3 = document.querySelector('#row1col3');
let r2c1 = document.querySelector('#row2col1');
let r2c2 = document.querySelector('#row2col2');
let r2c3 = document.querySelector('#row2col3');
let r3c1 = document.querySelector('#row3col1');
let r3c2 = document.querySelector('#row3col2');
let r3c3 = document.querySelector('#row3col3');
btnGenerate.setAttribute('type', 'button');
btnReturn.setAttribute('type', 'button');
btnGenerate.setAttribute ('value', 'Generate');
btnReturn.setAttribute ('value', 'New Game');
var wWidth = window.innerWidth;
console.log(wWidth);
if (wWidth >= 480) {
	body.setAttribute('style', 'width: 100%; height: 99%; margin: 0;');
	content.setAttribute('style', 'display: flex;width: 60%;margin: 0 auto;align-items: center;flex-direction: column;height: 85%;padding: 50px 0;');
	userName.setAttribute('style', 'margin: 0 auto; font-size: 50px; font-family: Calibri; font-weight: 600;');
	partyResult.setAttribute('style', 'margin: 10px auto;font-size: 28px;font-family: Calibri;font-weight: 600;');
	btnGenerate.setAttribute('style', 'width: 30%;margin: 10px auto;font-size: 28px;font-family: Calibri;font-weight: 600;border-radius: 10px;padding: 10px auto;background: #00ff40;border: none;');
	btnReturn.setAttribute('style', 'margin: 10px auto;width: 30%;font-size: 28px;font-family: Calibri;font-weight: 600;border-radius: 10px;padding: 10px auto;background: #00ff40;border: none;');
	imgDiv.setAttribute('style', ' padding: 0; align-content: space-around; width: 340px; flex-wrap: wrap; justify-content: space-around;  display: flex; margin: 0 auto; height:335px; background: url(img/gameMachine.jpg) no-repeat center;');
	r1c1.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r1c2.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r1c3.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r2c1.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r2c2.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r2c3.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r3c1.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r3c2.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
	r3c3.setAttribute('style', 'width: 90px; height: 90px; display: flex;');
}
else{
	body.setAttribute('style', 'width: 100%; height: 99%; margin: 0;');
	content.setAttribute('style', 'display: flex;width: 100%;margin: 0 auto;align-items: center;flex-direction: column;height: 80%;padding: 0;');
	userName.setAttribute('style', 'margin: 100px auto;font-size: 140px;font-family: Calibri;font-weight: 600;');
	partyResult.setAttribute('style', 'margin: 10px auto;font-size: 60px;font-family: Calibri;font-weight: 600;');
	btnGenerate.setAttribute('style', 'width: 60%;margin: 40px auto;font-size: 80;font-family: Calibri;font-weight: 600;border-radius: 30px;background: #00ff40;border: none;height: 130px;');
	btnReturn.setAttribute('style', 'width: 60%;margin: 40px auto;font-size: 80;font-family: Calibri;font-weight: 600;border-radius: 30px;background: #00ff40;border: none;height: 130px;');
	imgDiv.setAttribute('style', ' display: flex; align-content: space-around ;width: 700px; flex-wrap: wrap; justify-content: space-around;  margin: 0 auto; height: 700px; background: url(img/gameMachineSmall.jpg) no-repeat center;');
	r1c1.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r1c2.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r1c3.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r2c1.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r2c2.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r2c3.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r3c1.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r3c2.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
	r3c3.setAttribute('style', 'width: 180px;height: 180px;display: flex;');
}
userName.innerHTML=user;
var flag;
var fruitNow;
var countAttempt;
var lastFruit;
var fruitArray = new Array(0,1,2);
var gameResult;
NewGame();
btnGenerate.onclick = () => {
	if(flag==true){
			gameResult = "You have a jackpot! Do you want to play again?";
			if (confirm(gameResult)==true){
				NewGame();
			}
		}
	flag=false;
	if(countAttempt<3){
		countAttempt++;
		partyResult.innerHTML = "This is " + countAttempt + " attempt out of 3" ;
		for(var i=0;i<3;i++){
			fruitNow = fruitArray[Math.floor(Math.random()*3)];
			Wheel(fruitNow,i);
		}
		if(flag==true){
			partyResult.innerHTML = "JACKPOT!!!" ;
		}
	}
	else{
		gameResult = "You have lost. Do you want to play again?";
		if (confirm(gameResult)==true){
			NewGame();
		}
	}
}
btnReturn.onclick = () => {
	NewGame();
}
function NewGame(){
	partyResult.innerHTML="New game started!";
	countAttempt=0;
	flag=false;
	r1c1.setAttribute ('src','img/zero.png');
	r1c2.setAttribute ('src','img/zero.png');
	r1c3.setAttribute ('src','img/zero.png');
	r2c1.setAttribute ('src','img/zero.png');
	r2c2.setAttribute ('src','img/zero.png');
	r2c3.setAttribute ('src','img/zero.png');
	r3c1.setAttribute ('src','img/zero.png');
	r3c2.setAttribute ('src','img/zero.png');
	r3c3.setAttribute ('src','img/zero.png');
}
function Wheel( fruitImg, i){
	if(i==0){
		lastFruit= fruitNow;
		if(fruitImg==0){
			r1c1.setAttribute ('src','img/apple.jpg');
			r2c1.setAttribute ('src','img/lemon.jpg');
			r3c1.setAttribute ('src','img/pear.jpg');
		}
		if(fruitImg==1){
			r1c1.setAttribute ('src','img/pear.jpg');
			r2c1.setAttribute ('src','img/apple.jpg');
			r3c1.setAttribute ('src','img/lemon.jpg');
		}
		if(fruitImg==2){
			r1c1.setAttribute ('src','img/lemon.jpg');
			r2c1.setAttribute ('src','img/pear.jpg');
			r3c1.setAttribute ('src','img/apple.jpg');
		}
	}
	if(i==1){
		if(lastFruit==fruitNow){flag=true;}
		if(fruitImg==0){
			r1c2.setAttribute ('src','img/apple.jpg');
			r2c2.setAttribute ('src','img/lemon.jpg');
			r3c2.setAttribute ('src','img/pear.jpg');
		}
		if(fruitImg==1){
			r1c2.setAttribute ('src','img/pear.jpg');
			r2c2.setAttribute ('src','img/apple.jpg');
			r3c2.setAttribute ('src','img/lemon.jpg');
		}
		if(fruitImg==2){
			r1c2.setAttribute ('src','img/lemon.jpg');
			r2c2.setAttribute ('src','img/pear.jpg');
			r3c2.setAttribute ('src','img/apple.jpg');
		}
	}
	if(i==2){
		if((lastFruit==fruitNow)&&(flag==true)){}
		else {flag=false;}
		if(fruitImg==0){
			r1c3.setAttribute ('src','img/apple.jpg');
			r2c3.setAttribute ('src','img/lemon.jpg');
			r3c3.setAttribute ('src','img/pear.jpg');
		}
		if(fruitImg==1){
			r1c3.setAttribute ('src','img/pear.jpg');
			r2c3.setAttribute ('src','img/apple.jpg');
			r3c3.setAttribute ('src','img/lemon.jpg');
		}
		if(fruitImg==2){
			r1c3.setAttribute ('src','img/lemon.jpg');
			r2c3.setAttribute ('src','img/pear.jpg');
			r3c3.setAttribute ('src','img/apple.jpg');
		}
	}
}

