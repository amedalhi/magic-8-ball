const answers = [
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

//List of DOM variables
const askQuestionButton = document.getElementById("askButton");
const askAnotherQuestionButton = document.getElementById("askAgainButton");
const randomAnswerContainer = document.getElementById("response");
const inputSection = document.querySelector(".input-to-fade");
const inputTextDisplay = document.querySelector(".input-text-display");
const eightBall = document.querySelector(".eight-ball");

//-------------------Ask Question
const askQuestion = function () {
  let inputTextToDisplay = document.getElementById("input-text").value;
  //Error handling: no question is asked
  if (inputTextToDisplay === "") {
    alert("Please enter a question");
  } else {
    //Randomize an index number and then associate with a string from the answers array
    let randomAnswerIndex = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomAnswerIndex];
    //shake
    eightBall.classList.toggle("shaking");
    //populate html with answer
    randomAnswerContainer.innerHTML = randomAnswer;
    randomAnswerContainer.classList.add("slow-fade-in");
    //fade out Input Field FIXME
    inputSection.classList.add("fade-out");
    //add question text above eight ball
    inputTextDisplay.innerHTML = inputTextToDisplay;
    //remove the the input field
    inputSection.style.display = "none";
    //fade in Ask Another Questions button
    askAnotherQuestionButton.classList.add("fade-in");
  }
};

//---------------------Ask Another Question
const askAnotherQuestion = function () {
  //clear glass
  randomAnswerContainer.innerHTML = "";
  //Fade out ask again button
  askAnotherQuestionButton.classList.remove("fade-in");
  //make input visible again
  inputSection.classList.remove("fade-out");
  inputSection.style.display = "";
  //reset shake
  eightBall.classList.remove("shaking");
  //reset fade
  randomAnswerContainer.classList.remove("slow-fade-in");
  //reset question display
  inputTextDisplay.innerHTML = "";
  //reset input field
  document.getElementById("input-text").value = "";
};

//-------------------------Function Triggers
askQuestionButton.addEventListener("click", function () {
  askQuestion();
});

askAnotherQuestionButton.addEventListener("click", function () {
  askAnotherQuestion();
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    askQuestion();
  }
});

FIXME;
// askAgainButton.addEventListener("click", function (event) {
//   if (event.key === "Enter") {
//     askAnotherQuestionButton();
//   }
// });
