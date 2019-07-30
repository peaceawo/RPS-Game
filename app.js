let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result = document.querySelector(".results >p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const chioces = ['r', 'p', 's'];
    var randomNum = Math.floor(Math.random()*3);
    return chioces [randomNum];
}

function convert(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

function wins(userChoice,computerChoice){
    userScore++
    var userChoice_div = document.getElementById(userChoice)
    userScore_span.innerHTML=userScore +" :";
    computerScore_span.innerHTML=computerScore;
    var compword = "comp".fontsize(3).sup()
    var userword = "user".fontsize(3).sup()
    result.innerHTML= convert(userChoice)+userword + " beats "+ convert(computerChoice) +compword + " You WIN!"
    userChoice_div.classList.add('green-glow')
    setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300)
}

function lose(userChoice,computerChoice){
    var compword = "comp".fontsize(3).sup()
    var userword = "user".fontsize(3).sup()
    var userChoice_div = document.getElementById(userChoice)
    computerScore++
    userScore_span.innerHTML=userScore +" :";
    computerScore_span.innerHTML=computerScore;
    result.innerHTML= convert(userChoice)+userword + " Loses to "+ convert(computerChoice) +compword + " You LOSE :-("
    userChoice_div.classList.add('red-glow')
    setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300)
}

function Tie(userChoice,computerChoice){
    var compword = "comp".fontsize(3).sup()
    var userword = "user".fontsize(3).sup()
    var userChoice_div = document.getElementById(userChoice)
    result.innerHTML= convert(userChoice)+userword + " equals "+ convert(computerChoice) +compword + " Its a Tie!"
    userChoice_div.classList.add('grey-glow')
    setTimeout(function(){userChoice_div.classList.remove('grey-glow')}, 300)
}

function game(userChoice){
    var computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        wins(userChoice, computerChoice)
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice)
        break;
        case "rr":
        case "pp":
        case "ss":
        Tie(userChoice, computerChoice)
        break;
    }
}


function main(){
    rock_div.addEventListener("click",()=> game("r"));
    paper_div.addEventListener("click",() =>game("p"))
    scissors_div.addEventListener("click",()=>game("s"))
}
main();