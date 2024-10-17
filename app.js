let score = {
    win: 0,
    tie: 0,
    lose: 0
}


function playGame(playerChoose) {
    let botText = document.getElementById('bot-win-lose-text')
    let userText = document.getElementById('user-win-lose-text')
    let botScore = document.getElementById('bot-scores')
    let userScore = document.getElementById('user-scores')
   

   const computerChoose = randomChoose();
    let message = '';

    if(playerChoose === 'ქვა') {
        if(computerChoose === "ქვა") {
            message = 'ეს არის ნიჩია'
        }else if(computerChoose === 'ფურცელი') {
            message = 'ბოტმა მოიგო'
        }else if(computerChoose === 'მაკრატელი') {
            message = 'შენ მოიგე'
        }
    }
    else if(playerChoose === 'ფურცელი') {
        if(computerChoose === 'ქვა') {
            message = 'შენ მოიგე'
        }else if(computerChoose === 'ფურცელი') {
            message = 'ეს არის ნიჩია'
        }else if(computerChoose === 'მაკრატელი') {
            message = 'ბოტმა მოიგო'
        }
    }

    else if(playerChoose === 'მაკრატელი') {
        if(computerChoose === 'ქვა') {
            message = 'ბოტმა მოიგო'
        }else if(computerChoose === 'ფურცელი') {
            message = 'შენ მოიგე'
        }else if(computerChoose === 'მაკრატელი') {
            message = 'ეს არის ნიჩია'
        }
    }

    if(message === 'ბოტმა მოიგო') {
        score.lose++;
    }else if(message === 'შენ მოიგე') {
        score.win++;
    }else if(message === 'ეს არის ნიჩია') {
        score.tie++;
    }

    botText.innerHTML = computerChoose
    userText.innerHTML = playerChoose
    userScore.innerHTML = score.win
    botScore.innerHTML = score.lose

    if(score.win != 3) {
        playGame = playGame
    } else if (score.lose != 3) {
        playGame = playGame
    }

   chooseWinner();
     
}

function chooseWinner() {
    let playerWin = document.querySelector('#you-win')
    let botWin = document.querySelector('#bot-win')
    if(score.win === 3) {
        playerWin.innerHTML = "You win!"
        playGame = undefined;

    }else if(score.lose === 3) {
        botWin.innerHTML = "Bot win!"
        playGame = undefined;
    }
}




function randomChoose() {

    let computerChoose = '';

    const randomPick = Math.random();
    if(randomPick > 0 && randomPick < 1 / 3) {
        computerChoose = rock
    } else if(randomPick > 1 / 3 && randomPick < 2 / 3 ) {
        computerChoose = 'ფურცელი'
    }else if(randomPick > 2 / 3 && randomPick < 1) {
        computerChoose = 'მაკრატელი'
    } return computerChoose;
}
