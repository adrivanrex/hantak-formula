
/** Game Variables **/

playerOne = "Rex";
playerOneBet = "heads";

playerTwo = "PlayerTwo";
playerTwoBet = "tails";


/** Game Function **/

function getPhase(){
	a = Math.floor(Math.random() * 10) + 1  

	if(a >= 5){ a = 1;
  return a;}else{a = 0; return a;}
}

function getPatternWin(a,b){
	if(a == b){
  	return "win";
  }else{
  return "draw";
  }
}


function playGame(playerOne,playerOneBet,playerTwo,playerTwoBet){
		
}


playGame(playerOne,playerOneBet,playerTwo,playerTwoBet);
