

let h2 = document.querySelector("h2");
let boxes = document.querySelectorAll(".box");
let body = document.querySelector('body');

let userState = [];
let gameState = [];
let start = false;
let level = 0;
let flag = 0;
let colors = ["red", "yellow", "green", "purple"];

function autoColor(box) {
    box.classList.add("auto");
    setTimeout(() => {
      box.classList.remove("auto");
    }, 200);
}

function colorChange(box) {
    box.classList.add("reset");
    setTimeout(() => {
        box.classList.remove("reset");
    }, 500);
}

function reset(){
    start = false;
    userState = [];
    gameState = [];
    h2.innerText = `You loose. Total Point ${level} Press any key to restart`;

    level = 0;
    flag = 0;

}
function toStart() {
  if (start === false) {
    start = true;
    // level++;
    // h2.innerText = `Game Started! Level ${level}`;
    // let rand = Math.floor(Math.random() * 4);
    // let box = boxes[rand];
    // autoColor(box);
    // console.log(colors[rand]);
    // gameState.push(colors[rand]);
      levelUp();
  }
}
document.addEventListener("keypress", toStart);

function levelUp(){
    level++;
    flag = 0;
    h2.innerText = `Level ${level}`;
    let rand = Math.floor(Math.random() * 4);
    let box = boxes[rand];
    autoColor(box);
    gameState.push(colors[rand]);
    userState = [];
}

function gamePlay(box){
    let col = box.getAttribute("id");
    // console.log(col);
    userState.push(col);

    if (arrayTest(userState,gameState) === false){
         colorChange(body);
         reset();
    }
    flag++;
    if(flag === level){
        levelUp();
    }
}

    for (let box of boxes) {
        box.addEventListener("click", function () {
            box.classList.add('user');
            setTimeout(() => {
                box.classList.remove('user');
            }, 200);
            gamePlay(box);
        });
    }



function  arrayTest(arr1, arr2) {
    // flag++;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}



 
