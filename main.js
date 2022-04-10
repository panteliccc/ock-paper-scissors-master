const rules = document.querySelector(".rules");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

rules.addEventListener("click",function(){
    modal.style.display = "flex";
});

close.addEventListener("click",function(){
    modal.style.display = "none"
});
function settings(choice){
    if(choice == 1) 
        computerChoice= {
            choice:'1',
            img:'./images/icon-paper.svg',
            class:'paper'
    }
    else if (choice == 2) 
        computerChoice= {
            choice:'2',
            img:'./images/icon-scissors.svg',
            class:'scissors'
    }
    else if (choice == 3) 
        computerChoice= {
            choice:'3',
            img:'./images/icon-rock.svg',
            class:'rock'
    }
    return computerChoice;
}
var yourChoice = {};
var computerChoice = {};
let choice  ;
$(".btn").click(function () { 
    choice = Math.floor(Math.random()*3)+1;
    yourChoice= {
        choice: this.getAttribute("id"),
        class:this.getAttribute("class").split(" ")[0],
        img:this.getAttribute("src")
    }
    settings(choice);
    drawstep2();
    winorlose();    
});

var score = 0;
const printscore = document.querySelector(".score");
var winlose = "";

function winorlose() {
    if(settings(choice).choice == yourChoice.choice || yourChoice.choice == settings(choice).choice)
        winlose ="draw"
    else if(yourChoice.choice == 1 && settings(choice).choice == 3 ||
        yourChoice.choice == 2 && settings(choice).choice == 1 ||
        yourChoice.choice == 3 && settings(choice).choice == 2 ){
        winlose = "You won";
        score++;
    }
    else {
        winlose = "You Lose";
        score--;
    }
    printscore.innerHTML = score;
}   
const game = document.querySelector(".game");
const step2 = document.querySelector(".step2");

function drawstep2() {
    game.style.display = "none";

    step2.innerHTML = `
        <div class="sel">
            <h1>You picked</h1>
            <img src="${yourChoice.img}" alt="" class="you ${yourChoice.class}">
        </div>
        <div class="sel desktop">
            <h1 class="winlose">${winlose}</h1>
            <p class="playAgain">Play Again</p>
        </div>
        <div class="sel">
            <h1>The house picked</h1>
            <img src="${settings(choice).img}" alt="" class="computer ${settings(choice).class}">
        </div>
        <div class="sel mobile">
            <h1 class="winlose">${winlose}</h1>
            <p class="playAgain">Play Again</p>
        </div>
    `;   
    $(".playAgain").click(function(){
        step2.innerHTML ="";
        game.style.display = "flex"
    });
}
