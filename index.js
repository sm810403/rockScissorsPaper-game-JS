let rockBtn = document.querySelector('.btn-1');
let sciBtn = document.querySelector('.btn-2');
let papBtn = document.querySelector('.btn-3');
let btns = document.querySelectorAll('.btn');
let imgFirst = document.querySelector('.img-first');
let imgSecond = document.querySelector('.img-second');
let restart = document.querySelector('.restart');
let result = document.querySelector('.result');
let count = 0;
let relap;

// reset after finishing match
// restart.addEventListener('click', reSet);
// function reSet(){
//    relap = setInterval(()=>{
//     count++;
//     // imgFirst.style.backgroundImage = `url(images/game-${count}.svg)`
//     imgSecond.style.backgroundImage = `url(images/game-${count}.svg)`
//     if ( count === 3) {
//         count = 0;
//         }  

//     }, 500)
// }

// // default case
var autoRun = setInterval(setDefault, 50);
function setDefault() {
    count++;
    // imgFirst.style.backgroundImage = `url(images/game-${count}.svg)`
    imgSecond.style.backgroundImage = `url(images/game-${count}.svg)`
    if ( count === 3) {
        count = 0;
    }
}


// user pick
rockBtn.addEventListener('click', setPick1);

function setPick1() {
    clearInterval(autoRun);
    imgFirst.style.backgroundImage = `url(images/game-2.svg)`
    if (random === 2) {
        result.innerHTML = 'You won!!';
    }
}
sciBtn.addEventListener('click', setPick2);

function setPick2() {
    clearInterval(autoRun);
    imgFirst.style.backgroundImage = `url(images/game-1.svg)`
    }

papBtn.addEventListener('click', setPick3);

function setPick3() {
    clearInterval(autoRun)
    imgFirst.style.backgroundImage = `url(images/game-3.svg)`
}


//computer pick
let random;
function setCompPick(){
    let random = Math.floor(Math.random()*3);
    imgSecond.style.backgroundImages = `url(images/game-${random}.svg)`;
}



//result
function getResult(){
    
}


