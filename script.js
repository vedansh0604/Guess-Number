'use strict';

let num = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = '🚫 Enter the Number !!';
    }
    else if (guess === num){
        document.querySelector('.message').textContent = '🥳 Hurray..Correct Number !!';
        document.querySelector('.number').textContent = num;

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
    }

    else if(guess !== num){
        if(score > 1 ){
            document.querySelector('.message').textContent = guess > num ? '🔼 Too High': '🔽 Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You Lost the Game';
            document.querySelector('.score').textContent = 0;
        }
    }
})
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    num = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})