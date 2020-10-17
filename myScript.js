const names = ["application","interface","programming","mobile","design","javascript","python","reactnative","object","computer",
"software","hardware","clarusway","keyword","password","userface","engineer"];

const wordId = document.querySelector("#word");

const randomWord = names[Math.floor(Math.random()*names.length)];
const randomWordList = randomWord.split("");
const randomLength = randomWord.length;
const str = "_ ".repeat(randomLength);
let str2 = str.trim();
let strList = str2.split(" ");
let newList = strList.join(' '); 
let newList2 = strList.join('');


const wrongLetter = document.querySelector("#wrong-letters");
const wrongLetterContainer = document.querySelector(".wrong-letters-container");
const figurePart = document.querySelectorAll(".figure-part");
const pop = document.querySelector(".popup-container");
const finalMessage = document.querySelector("#final-message");
const revealWord = document.querySelector("#final-message-reveal-word");
const playAgain = document.querySelector("#play-button");
playAgain.addEventListener("click", again);
const repeatWord = [];
const wrongTitle = document.querySelector(".wrongtitle");



function openingPage() {
    wordId.innerHTML = str2;
 }

 window.addEventListener("keydown", e => {
    if (e.keyCode >=65 && e.keyCode <= 90 || e.keyCode == 222) {
       const letter = e.key.toLowerCase();
      
       if (repeatWord.includes(letter)) {
           alert("You have already entered this letter. Please enter a different letter.")
       } else {
        if (randomWordList.includes(letter)){ 
            for(let i = 0; i<randomWordList.length;i++) {
                if(randomWordList[i] == letter){
                    strList[i] = randomWordList[i];
                    newList = strList.join(' ');
                    newList2 = strList.join(''); 
                    wordId.innerHTML = newList;
                        
                    };          
                }
                setInterval(finish,1000);
                
        }else {
            wrongTitle.innerHTML = "Wrong:" 
            wrongLetter.innerHTML += " " + letter + ",";
        
        display();
        };
        repeatWord.push(letter);
       } 
    };
});

function finish() {
    if (randomWord == newList2) {
        pop.style.display = 'flex';
        finalMessage.innerHTML = "Congratulations.!!!  👏 "; 
}
}


let counter = 0;

function display() {
   
    figurePart[counter].style.display = 'block';
    counter++;
    if (counter > 5) {
        
        pop.style.display = 'flex';
        finalMessage.innerHTML = "Unfortunately you lost. 😕";
        revealWord.innerHTML = `... the word was : ${randomWord}`; 
    }
};

function again() {
    window.location.reload();
}