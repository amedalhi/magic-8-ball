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

//Make button ask trigger the response
const askButton = document.getElementById("askButton");

askButton.addEventListener("click", function () {
  //Randomize an index number and then associate with a string from the answers array
  let randomAnswerIndex = Math.floor(Math.random() * answers.length);
  let randomAnswer = answers[randomAnswerIndex];

  //populate html with answer
  let randomAnswerContainer = document.getElementById("response");
  randomAnswerContainer.innerHTML = randomAnswer;

  //fade out Input Field
  let inputDiv = document.querySelector(".input-div");
  inputDiv.classList.add("fade-out");

  console.log(askButton);
});
