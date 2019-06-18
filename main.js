function numberGame(){
	var randomNumber= Math.floor(Math.random()*100)+1;
	var y=randomNumber%2;
	if (y==0)
		alert("The number is Even");
	else
		alert("The number is Odd");
	for (count=1;count<=10;count++){
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
		if (count==10) {
			alert("YOU LOSE");
		}
}
}
