

let countDown=10;
let time=document.getElementById("time");
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


function displayQuestions(){
    document.getElementById("questions").classList.remove("hide")
    document.getElementById("question-title").textContent=questions[index].question
}

document.getElementById("start").addEventListener("click",function(){
    startTimer();
    displayQuestions();
})