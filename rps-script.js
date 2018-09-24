//Player and computer score
		let p_score = 0;
		let c_score = 0;

		let computerPlay = () => { //computer selects random choice
			let option	= Math.floor(Math.random() * 3);
			return (option === 0) ? 'rock' : (option === 1) ? 'paper' :'scissors'; //output between 0, 1, 2
		}

		let playRound = (playerSelection, computerSelection) => { //playround func
			let result = '';

			switch(computerSelection) {
				case 'rock': //when case is choice
				(playerSelection =='paper') ? result = `${playerSelection} vs ${computerSelection} - You WIN`: //output result
				(playerSelection == 'scissors') ? result = `${playerSelection} vs ${computerSelection} - You LOSE` : 
				(playerSelection == computerSelection) ? result = 'DRAW' : result = 'invalid choice'; //same selection then tie, other inputs by player are invalid
				break;
				case 'paper': 
				(playerSelection =='scissors') ? result = `${playerSelection} vs ${computerSelection} - You WIN` : 
				(playerSelection == 'rock') ? result = `${playerSelection} vs ${computerSelection} - You LOSE` : 
				(playerSelection == computerSelection) ? result = 'DRAW' : result = 'invalid choice';
				break;
				case 'scissors': 
				(playerSelection =='rock') ? result = `${playerSelection} vs ${computerSelection} - You WIN` : 
				(playerSelection == 'paper') ? result = `${playerSelection} vs ${computerSelection} - You LOSE`: 
				(playerSelection == computerSelection) ? result = 'DRAW' : result = 'invalid choice';
				break;
			}
			return result;
		}

		let scoreReset = () => {
			p_score =0; //set scores back to 0
			c_score =0;
		}

		let lineSeperator = () => console.log('//////////////////////////////////////');

		let game = () => {
			lineSeperator(); //prints so its readable
			for (let i = 0; i < 5; i++) {
			let playerSelection = prompt('Enter ROCK, PAPER or SCISSORS').toLowerCase();
			let computerSelection = computerPlay();
			let gameRound = playRound(playerSelection, computerSelection);
				(gameRound.includes('DRAW') || gameRound.includes('invalid choice')) ? p_score+=0 : //if output contains DRAW OR Invalid, dont add point
				(gameRound.includes('DRAW') || gameRound.includes('invalid choice')) ? c_score+=0 :
				(gameRound.includes('WIN')) ? p_score +=1 : c_score+=1;
			console.log(gameRound); //output each game round till 5
			}
			console.log(gameResult()); //prints output from func call
		}

		let gameResult = () => { //output msg based on result
			let output = '';
			(p_score === 0 && c_score === 0) ? output = alert('Stop leaving it empty!') :
			(p_score == c_score) ? output = `Its a tie! \nCOMP SCORE: ${c_score} \nPLAYER SCORE: ${p_score}` :
			(p_score < c_score) ? output = `Computer wins the game! \nCOMP SCORE: ${c_score} \nPLAYER SCORE: ${p_score}` : output = `Player wins the game! \nCOMP SCORE: ${c_score} \nPLAYER SCORE: ${p_score}`;
			scoreReset(); //score rest func call
			return output;
		}
