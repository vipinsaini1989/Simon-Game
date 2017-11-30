// Select all the colour div
var lightDiv = document.querySelectorAll('.lightColor');
// select both the on and off button
var onOffBtn= document.querySelectorAll('input');
// select all the audio tags 
var soundObj= document.querySelectorAll('.sound');
// for checking the user entery
var count=0;
// for adding all position of color div to make them blink
var myArr=[];
// x(for random generator)
let x,r,strict = false;
// for switch on the game
onOffBtn[0].addEventListener('click',()=>{
	document.querySelector('#scoreBoard').style.color = 'red';
	document.getElementById('start').style.pointerEvents = 'auto';
	startFun();
	strictButton();
});
// Start button to play the game
var startFun = ()=>{
	var startBtn = document.querySelector('#start');
	startBtn.addEventListener('click', ()=>{
	eachCheck();
	});
};
// adding random positions of div into an array
var eachCheck = ()=>{
	document.getElementById('start').style.pointerEvents = 'none';
	document.getElementById('strict').style.pointerEvents = 'none';
	winWin();
	x = Math.floor(Math.random()*4);
	myArr.push(x);
	console.log (myArr);
	document.querySelector('#scoreBoard').innerHTML = myArr.length;
	blinkColor();
};
// for binking each div for generated random number
var blinkColor = ()=>{
		for(var i =0; i< myArr.length;i++){
		let r = myArr[i];
		setTimeout(()=>{
		lightDiv[r].style.opacity = '0.5';
		playSound();
		},400*(i+1));
		setTimeout(()=>{
		lightDiv[r].style.opacity = '1';
		},600*(i+1));
	}
	playerGame();
};


// for getting the player respose
function playerGame() {
	document.getElementById('colorCombo').addEventListener('click',match);
}
// catching the click event happing by player
function match(e) {
		let r = myArr[count]; 
		console.log (e.target.value);
			if(e.target.id == lightDiv[r].id) {
				count += 1;
				soundObj[r].play();
				
			}
			else if (e.target.id !== lightDiv[r].id) {
				count = 0;
				// in case strict mode is on by the player
				if(strict === true){
					document.getElementById('scoreBoard').innerHTML = '!!';
					blinkColor();
				}
				else {
					startFun();
				}
			}
		conditionCheck();
	
}
// to check if player part is over or not
function conditionCheck(){
	if(count == myArr.length){
		count = 0;
		eachCheck();
	}
}
// to switch on the strict mode in the game
var strictButton =()=>{
	document.getElementById('strict').addEventListener('click',()=>{
		if(!strict){
			strict = true;
		}
		else{
			strict = false;
			document.getElementById('strict').style.backgroundColor= "green";
		}
	});
};
// play sound on each blink and click
var playSound = ()=>{
	for(var i =0; i< myArr.length;i++){
		soundObj[myArr[i]].play();
	}
};
// checking the win situation
var winWin = ()=>{
	if(myArr.length == 20){
		alert('you win.Start new game');
		location.reload();
	}
}
// to switch off the game
onOffBtn[1].addEventListener("click",()=>
	location.reload())
