
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

	let firstCoin = getPhase();
	let secondCoin = getPhase();

	let winningCoin = getPatternWin(firstCoin,secondCoin);

	coinWinner = getCoinWinner(winningCoin);
	bets = [playerOne,playerTwo];

	var winner = [];

	for (var i = bets.length - 1; i >= 0; i--) {
		if(bets[i].bet == coinWinner){
			winner.push(bets[i]);
		}

	}

	if(winner.length == 0){
		winner = "draw";
	}
	

	return winner;


}


playGame(playerOne,playerOneBet,playerTwo,playerTwoBet);
