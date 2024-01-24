let userScore=0;
let comScore=0;

//The querySelectorAll() method returns all elements that matches a CSS selector(s)
const choices =document.querySelectorAll(".choice");
const msg  = document.querySelector('#msg');

const userScorepara = document.querySelector("#user");
const compScorepara = document.querySelector("#com");

const genCompChoice =()=>{
    const options =["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}; 

const drawGame = () => {
   
    msg.innerText = "game was draw";
    msg.style.backgroundColor="#081b31";

};

const showwinner = (userwin) =>
{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
       
         msg.innerText = "you win!  ";
       msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        compScorepara.innerText=comScore;
       
        msg.innerText = 'you lose! ';
        msg.style.backgroundColor="red";
    }
}
const playGame = (userChoice) =>{

 // genret computer choice
 const compChoice = genCompChoice();
 

     if(userChoice === compChoice){
        drawGame();
     }
     else{
        let userwin = true;
        if(userChoice === "rock"){
          userwin = compChoice === "paper" ? false:true;

        }
        else if(userChoice === "paper"){
           userwin = compChoice === "scissor" ? false:true;
        }
        else{
           userwin= compChoice=== "rock" ? false : true;
        }
        showwinner(userwin);
     }

};


//forEach() calls a function for each element in an array:
choices.forEach((choice) =>{
//The addEventListener() method attaches an event handler to a document.
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
   // console.log("choice was clicked" , userChoice);// writes (logs) a message to the console.
    playGame(userChoice);
    })
})