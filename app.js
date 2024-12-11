let userScore=0;
let compScore=0;
let us=document.querySelector("#user-score");
let cs=document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");
const genComputerChoice=()=>{
    const options=["rock", "paper", "scissor"];
    return options[Math.floor(Math.random()*3)];
}
const playGame=(userChoice)=>{
    console.log("user choice= ",userChoice);
    let compChoice=genComputerChoice()
    console.log("comp choice= ",compChoice);
    let msg=document.querySelector("#msg");
    if(userChoice===compChoice){
        msg.innerText="It was a Draw";
        setTimeout(()=>{msg.innerText="Play your move";},1700);
    }
    else if(userChoice==="rock"){
        if(compChoice==="scissor"){
            userScore++;
            msg.innerText="You Won";
            us.innerText=`${userScore}`;
            setTimeout(()=>{msg.innerText="Play your move";},1700);
        }
        else if(compChoice==="paper"){
            compScore++;
            msg.innerText="Computer Won";
            cs.innerText=`${compScore}`;
            setTimeout(()=>{msg.innerText="Play your move";},1700);
        }
    }
    else if(userChoice==="paper"){
        if(compChoice==="rock"){
            userScore++;
            msg.innerText="You Won";
            us.innerText=`${userScore}`;
            setTimeout(()=>{msg.innerText="Play your move";},1700);
        }
        else if(compChoice==="scissor"){
            compScore++;
            msg.innerText="Computer Won";
            cs.innerText=`${compScore}`;
            setTimeout(()=>{msg.innerText="Play your move";},1700);
        }
    }
    else if(userChoice==="scissor"){
        if(compChoice==="paper"){
            userScore++;
            msg.innerText="You Won";
            us.innerText=`${userScore}`;
            setTimeout(()=>{msg.innerText="Play your move";},1700);
        }
        else if(compChoice==="rock"){
            compScore++;
            msg.innerText="Computer Won";
            cs.innerText=`${compScore}`;
            setTimeout(()=>{msg.innerText="Play your move";},1700);
        }
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice was clicked");
        playGame(userChoice);
    }); 

})

