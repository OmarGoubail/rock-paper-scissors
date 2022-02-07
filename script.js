

function ComputerPlay(){

    const arr = ['rock','paper','scissors'];
    rand = Math.floor((Math.random()*arr.length));

    return arr[rand]
}

// console.log(ComputerPlay());

function Play(PlayerSelection, ComputerSelection){
    let playerCount = 0;
    let computerCount = 0;

    if (PlayerSelection =='rock' && ComputerSelection =='scissors' 
    ||  PlayerSelection == 'scissors' && ComputerSelection == 'paper'
    ||  PlayerSelection == 'paper' && ComputerSelection == 'rock'){
        
        playerCount += 1;
        result = "You win !"
    }else if (PlayerSelection =='rock' && ComputerSelection =='rock' 
    ||  PlayerSelection == 'scissors' && ComputerSelection == 'scissors'
    ||  PlayerSelection == 'paper' && ComputerSelection == 'paper'){
        
        result = "It's a draw!"
    }else{

        computerCount += 1;
        result = "Sorry, you lose dumbass"
    }   

    

    return result, console.log(result),playerCount, computerCount
}

// const playerSelection = "rock";
// const computerSelection = ComputerPlay();
// console.log(Play(playerSelection, computerSelection));


function game(){

    

    for (let round = 0; round < 5; round++){
        let playerSelection = prompt('rock, paper or scissors');
        playerSelection = playerSelection.toLowerCase();
        const computerSelection = ComputerPlay();

        console.log(Play(playerSelection,computerSelection));      
        

    }

    
}

game()