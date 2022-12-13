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
const eightBall = document.querySelector(".eight-ball");

askButton.addEventListener("click", function () {
  //Randomize an index number and then associate with a string from the answers array
  let randomAnswerIndex = Math.floor(Math.random() * answers.length);
  let randomAnswer = answers[randomAnswerIndex];
  //shake
  eightBall.classList.toggle("shaking");
  //populate html with answer
  randomAnswerContainer.innerHTML = randomAnswer;
  randomAnswerContainer.classList.add("slow-fade-in");

  console.log(randomAnswerContainer);
  //fade out Input Field
  inputDiv.classList.add("fade-out");
  //fade out button text
  askAgainButton.classList.add("fade-in");
});

askAgainButton.addEventListener("click", function () {
  //clear glass
  randomAnswerContainer.innerHTML = "";
  //Fade out ask again button
  askAgainButton.classList.remove("fade-in");
  //make input visible again
  inputDiv.classList.remove("fade-out");
  //reset shake
  eightBall.classList.remove("shaking");
  //reset fade
  randomAnswerContainer.classList.remove("slow-fade-in");
});
