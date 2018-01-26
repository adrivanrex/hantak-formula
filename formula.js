
/** Game Variables **/

playerOne = { name: "One", bet: "heads"
}

playerTwo = { name: "Two", bet: "tails"
}


/** Game Function **/

function getPhase(){
	a = Math.floor(Math.random() * 10) + 1  

	if(a >= 5){ a = 1;
  return a;}else{a = 0; return a;}
}

function getPatternWin(a,b){
	if(a == b){
  	return a;
  }else{
  return "draw";
  }
}

function getCoinWinner(a){
	
	if(a == 1){
		return "heads";
	}
	if(a == "draw"){
		return "draw";
	}
	if(a == 0){
		return "tails";
	}
}



function playGame(playerOne,playerTwo){

	/** validate same bet **/
	if(playerOne.bet == playerTwo.bet){
		return "invalid bet";
	}

	var firstCoin = getPhase();
	var secondCoin = getPhase();

	let winningCoin = getPatternWin(firstCoin,secondCoin);

	coinWinner = getCoinWinner(winningCoin);
	bets = [playerOne,playerTwo];

	var output = [];

	for (var i = bets.length - 1; i >= 0; i--) {
		if(bets[i].bet == coinWinner){
			bets[i].status = "win";
			output.push(bets[i]);
		}

	}

	if(output.length == 0){
		output = {
			firstCoin: firstCoin,
			secondCoin: secondCoin,
			status: "draw"}
	}
	

	return output;


}


playGame(playerOne,playerOneBet,playerTwo,playerTwoBet);
