

let countDown=30;
let time=document.getElementById("time");
let choiceDiv=document.getElementById("choices");
let index=0;

let timeInterval;

function startTimer(){
    
    time.textContent=countDown;
  
   timeInterval = setInterval(function(){
        
        countDown--;
        time.textContent=countDown;

        if (countDown <= 0) {
            clearInterval(timeInterval);
        }
    },1000)
    
}

function checkAnswers(){
    if(index<questions.length-1){
        
        index++;
        displayQuestions();

    }
    
};

function displayQuestions(){
    document.getElementById("questions").classList.remove("hide")
    document.getElementById("question-title").textContent=questions[index].question
   
   
 choiceDiv.innerHTML = "";
    

    for (let i = 0; i < questions[index].choices.length; i++) {
        let choice = questions[index].choices[i];
        let choiceButton=document.createElement("button");
        choiceButton.textContent=choice;
        
        choiceDiv.appendChild(choiceButton);
        choiceButton.onclick=checkAnswers;
             
      
        
    }
}

document.getElementById("start").addEventListener("click",function(){
    startTimer();
    displayQuestions();
})

function displayChoices(){

}