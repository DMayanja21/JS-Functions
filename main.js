const numberGame=(range,rounds)=>{
var randomNumber= Math.floor(Math.random()*range)+1;
var y=randomNumber%2;
if (y==0)
	alert("The number is Even");
else
	alert("The number is Odd");
for (count=1;count<=rounds;count++)
{
	let num=prompt("Please enter a number:");
	if (num>randomNumber){
		alert("Your number is higher. Make another guess");
	}
	if (num<randomNumber){
		alert("Your number is lower. Make another guess");
	}
	if (num==randomNumber){
		alert("YOU WIN");
		break;
	}
	if (count==rounds) {
		alert("YOU LOSE");
	}
}
}
numberGame(100,10);
