let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    });
});
const drawGame=()=>{
    msg.innerText="Game Draw";
    msg.style.backgroundColor="black";
};
const playGame=(userchoice)=>{
    console.log("user choice : "+userchoice);
    const compchoice=genComp();
    if(userchoice===compchoice){
       drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userWin=compchoice==="scissor"?false:true;
        }else{
            userWin=compchoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compchoice);
    }
}
const showWinner=(userWin , userchoice,compchoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText=`You Win ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};
const genComp=()=>{
    const opt=["rock","paper","scissor"];
    const randomIndx=Math.floor(Math.random()*3);
    return opt[randomIndx];
};