let rockBtn = document.querySelector('.btn-1');
let sciBtn = document.querySelector('.btn-2');
let papBtn = document.querySelector('.btn-3');
let btns = document.querySelectorAll('.btn');
let img = document.querySelector('.img');
let img2 = document.querySelector('.img2');
let restart = document.querySelector('.restart');
let result = document.querySelector('.result');
let count = 0;
let relap;
restart.addEventListener('click', reSet);
function reSet(){
   relap = setInterval(()=>{
    count++;
    img.style.backgroundImage = `url(images/game-${count}.svg)`
    img2.style.backgroundImage = `url(images/game-${count}.svg)`
    if ( count === 3) {
        count = 0;
        }  

    }, 500)
}

var autoRun = setInterval(setDefault, 500);
function setDefault() {
    count++;
    img.style.backgroundImage = `url(images/game-${count}.svg)`
    img2.style.backgroundImage = `url(images/game-${count}.svg)`
    if ( count === 3) {
        count = 0;
    }
}



rockBtn.addEventListener('click', setPick1);

function setPick1() {
    autoRun = clearInterval()
    img.style.backgroundImage = `url(images/game-2.svg)`
}
sciBtn.addEventListener('click', setPick2);

function setPick2() {
    clearInterval(autoRun, 2000);
    img.style.backgroundImage = `url(images/game-1.svg)`
}
papBtn.addEventListener('click', setPick3);

function setPick3() {
    clearInterval(autoRun, 2000)
    img.style.backgroundImage = `url(images/game-3.svg)`
}
window.addEventListener('click', compPick);
function compPick(){
    var random = Math.floor(Math.random()*3)+1;
    img2.style.backgroundImage = `url(images/game-${random}.svg)`
}

function getResult(){
    if (img === img2){
        result.innerHTML = 'draw-yo!';
    }
}