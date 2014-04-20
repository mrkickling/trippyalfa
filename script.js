/* alafabet game */

window.onload = initAll

function initAll(){
	currentLetter = 0;
	alfabet = [65, 66];
	started = false;
	for(i=67;i<=90;i++){
		alfabet.push(i);
	}
	alfabet.push(219);
	alfabet.push(222);
	alfabet.push(186);
	window.onkeydown = onKeyDown;
}

function rant(){
	return Math.round(Math.random()*255);
}

function onKeyDown(event){
	if(started==false){
		started = true;
		startTime = new Date().getTime();
		timi = setInterval(timer, 100);
	}
	var keyCode = event.keyCode;
	curr = "box" + (currentLetter+1);
			console.log(currentLetter+1 + " Ye: " +  alfabet.length)
			
			if(parseInt(keyCode)==alfabet[currentLetter]){
				document.body.style.background = 'rgb(' + rant() + ', ' + rant() + ',' + rant() + ')';
				document.getElementById(curr).className = "correct";
				if(currentLetter+1<alfabet.length){	
					currentLetter++;
					curr = "box" + (currentLetter+1);
					document.getElementById(curr).className = "active";
				}else{
					clearInterval(timi);
					endTime = new Date().getTime();
					time = (endTime-startTime)/1000;
					console.log(time + "time");
					
					a = getCookie("highscore");
					if(!a){
						setCookie("highscore", time, 100);
						hs = time
					}else if(time<a){
						setCookie("highscore", time, 100);
						hs = time
					}else{
						hs = a
					}

					document.getElementById('timer').innerHTML = "Grattis! Det tog bara " + time + " sekunder att skriva alfabetet. Ditt rekord är " + hs  + " sekunder. <a href='#' id='restart'>Play again!</a>";
					document.getElementById('restart').onclick = restart;

				}
			}else if(currentLetter+1<alfabet.length){
				document.getElementById(curr).className = "wrong";
			}
	}
 
 function timer(){
 	tick = new Date().getTime();
	tickTime = (tick-startTime)/1000;
 	document.getElementById('timer').innerHTML = tickTime;
 }

function setCookie(cname,cvalue,exdays)
{
var d = new Date();
d.setTime(d.getTime()+(exdays*24*60*60*1000));
var expires = "expires="+d.toGMTString();
document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
}
return "";
}

function restart(){
	for(i=1;i<=29;i++){
		document.getElementById('box' + i).className = ""; 
	}
	document.getElementById('timer').innerHTML = "En gång till!!!";
	document.getElementById('box1').className = "active";
	currentLetter = 0;
	started = false;
}







