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

const askButton = document.getElementById("askButton");
const askAgainButton = document.getElementById("askAgainButton");
const randomAnswerContainer = document.getElementById("response");
const inputDiv = document.querySelector(".input-to-fade");
const inputTextDisplay = document.querySelector(".input-text-display");
const eightBall = document.querySelector(".eight-ball");

//Function Ask Question
const askQuestionButton = function () {
  let inputTextToDisplay = document.getElementById("input-text").value;
  console.log(inputTextToDisplay);
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
    //fade out Input Field
    inputDiv.classList.add("fade-out");
    //add input text above ball

    inputTextDisplay.innerHTML = inputTextToDisplay;
    //remove the the input field
    inputDiv.style.display = "none";
    //fade out button text
    askAgainButton.classList.add("fade-in");
  }
};

const askAnotherQuestionButton = function () {
  //clear glass
  randomAnswerContainer.innerHTML = "";
  //Fade out ask again button
  askAgainButton.classList.remove("fade-in");
  //make input visible again
  inputDiv.classList.remove("fade-out");
  inputDiv.style.display = "";
  //reset shake
  eightBall.classList.remove("shaking");
  //reset fade
  randomAnswerContainer.classList.remove("slow-fade-in");
  //reset question display
  inputTextDisplay.innerHTML = "";
};

askButton.addEventListener("click", function () {
  askQuestionButton();
});

askAgainButton.addEventListener("click", function () {
  askAnotherQuestionButton();
});

document.addEventListener("keyup", function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    askQuestionButton();
  }
});

// askAgainButton.addEventListener("click", function (event) {
//   if (event.key === "Enter") {
//     askAnotherQuestionButton();
//   }
// });
