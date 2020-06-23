const game = () => {
    //score  
    let uScore = 0;
    let comScore = 0;

    //click play button
    const playGame = () => {
        let playBtn = document.querySelector('.play');
        let leftBox = document.querySelector('.left-box');
        let rightBox = document.querySelector('.right-box');

        playBtn.addEventListener('click', ()=>{
            playBtn.classList.add('fade');
            leftBox.classList.add('fade-in');
            rightBox.classList.add('fade-in');
        })
    }
  
    //start Game
    const startGame = ()=> {
        let btns = document.querySelectorAll('.btn'); 
        let computerHand = document.querySelector('.img-2') ;
        let userHand = document.querySelector('.img-1') ;

        let comPicks = ['rock','scissors','paper'];
        
        btns.forEach(btn => {
            btn.addEventListener('click', function(){
                //computer choices
                
                let ran = Math.floor(Math.random()*3);
                let computerChoices = comPicks[ran];
                compareChoices(this.context, computerChoices);
                userHand.src = `./images/${this.textContent}.svg`;
                computerHand.src = `./images/${computerChoices}.svg`;
                

     
            });
        });
    }

    //update score
    const updateScore = ()=>{
        let userScore = document.querySelector('#your-score');
        let comScores = document.querySelector('#comp-score');
        userScore.textContent = uScore;
        comScores.textContent = comScore;
    }

    //compare hands
    const compareChoices = (computerChoices, userChoices)=>{
        let result = document.querySelector('.result');
        if (computerChoices === userChoices){
            result.innerHTML = 'Tie!';
            return;
        }
        if (userChoices === 'rock') {
            if (computerChoices === 'scissors') {
                result.innerHTML = 'you won!';
                uScore++;
                updateScore();
                return;
            } else {
                result.innerHTML = 'you lost!';
                comScore++;
                updateScore();
                return;
            }
        }
        if (userChoices === 'paper') {
            if (computerChoices === 'scissors') {
                result.innerHTML = 'you lost!';
                comScore++;
                updateScore();
                return;
            } else {
                result.innerHTML = 'you won!';
                uScore++;
                updateScore();
                return;
            }
        }
        if (userChoices === 'scissors') {
            if (computerChoices === 'rock') {
                result.innerHTML = 'you lost!';
                comScore++;
                updateScore();
                return;
            } else {
                result.innerHTML = 'you won!';
                uScore++;
                updateScore();
                return;
            }
        }
    }
    startGame();
    playGame();
}
game();
