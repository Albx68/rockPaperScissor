var button1 = document.getElementById('rock');
var button2 = document.getElementById('paper');
var button2 = document.getElementById('scissor');
var user
function handleClick(user) {


    // var user = prompt("Enter your choice:"); !--> 
    var computer = ["rock", "paper", "scissor"];
    var computerAns = computer[Math.floor(Math.random() * computer.length)];

    var choices = {
        rock: "scissor",
        paper: "rock",
        scissor: "paper"
    };

    var result;

    if (user === computerAns) {
        result = "It's a tie!";
    } else if (choices[user] === computerAns) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    //console.log(result);
    alert(result);
}

// Add event listeners
rock.addEventListener('click', handleClick(rock));
paper.addEventListener('click', handleClick(paper));
scissor.addEventListener('click', handleClick(paper));
