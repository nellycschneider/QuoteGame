let quotes = [
  {
    quote:
      "Greater good?’ I am your wife! I’m the greatest good you’re ever gonna get!",
    answers: [
      "Fiona",
      "Marge Simpson",
      "Maude Flanders",
      "Frozones' wife",
      "Cinderella",
      "Khloe Kardashian"
    ],
    correct: "Frozones' wife"
  },
  {
    quote:
      "We get the warhead and we hold the world ransom for… One million dollars!",
    answers: [
      "The Black Knight",
      "Mini Me",
      "Al Capone",
      "Dr. Evil",
      "Austin Powers",
      "Darth Vader"
    ],
    correct: "Dr. Evil"
  },
  {
    quote:
      "It’s not a man purse. It’s called a satchel. Indiana Jones wears one.",
    answers: [
      "Bruno",
      "Alan Garner",
      "Zach Galifianakis",
      "Homer Simpson",
      "Charlie Sheen",
      "JD"
    ],
    correct: "Alan Garner"
  },
  {
    quote: "Gentlemen, I wash my hands of this weirdness.",
    answers: [
      "Jack Sparrow",
      "Shakespeare",
      "The Joker",
      "Batman",
      "Elon Musk"
    ],
    correct: "Jack Sparrow"
  },
  {
    quote: "The fast way is to drop thermonuclear weapons over the poles.",
    answers: [
      "Elon Musk",
      "The Joker",
      "Dr. Evil",
      "Voldemort",
      "Freddy Krueger"
    ],
    correct: "Elon Musk"
  },
  {
    quote: "Keep your friends close, but your enemies closer.",
    answers: [
      "Hannibal Lecter",
      "The Joker",
      "The Godfather",
      "Blackbeard",
      "Dr. Evil"
    ],
    correct: "The Godfather"
  }
];

let counter = 0;

function randomQuote(quoteArr) {
  //   console.log("called");
  let randomQuoteIndex = Math.floor(Math.random() * quoteArr.length);

  document.querySelector(
    ".insert-quote"
  ).innerText = `"${quoteArr[randomQuoteIndex].quote}"`;

  document.querySelector(".bottom-container").innerHTML = quoteArr[
    randomQuoteIndex
  ].answers
    .map(answer => `<button class='answer'> ${answer} </button>`)
    .join("");

  document.querySelectorAll(".answer").forEach(answerButton => {
    answerButton.onclick = () => {
      if (answerButton.innerText === quoteArr[randomQuoteIndex].correct) {
        // console.log("true");
        quoteArr.splice(randomQuoteIndex, 1);
        counter += 1;

        document.getElementById(
          "remaining-quotes"
        ).innerHTML = `<div id="remaining-quotes"><p>Remaining quotes: ${arrayCopy.length}/${quotes.length}</p></div>`;

        if (!quoteArr.length) {
          scoreGifs(quotes);
          // document.getElementById(
          //   "scoreboard"
          // ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points.</p></div>`;

          document.getElementById("remaining-quotes").innerHTML = ``;
        } else {
          randomQuote(quoteArr);
        }
      } else {
        quoteArr.splice(randomQuoteIndex, 1);
        document.getElementById(
          "remaining-quotes"
        ).innerHTML = `<div id="remaining-quotes"><p>Remaining quotes: ${arrayCopy.length}/${quotes.length}</p></div>`;
        // console.log("nope");
        if (!quoteArr.length) {
          scoreGifs(quotes);
          // document.getElementById(
          //   "scoreboard"
          // ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points.</p></div>`;

          document.getElementById("remaining-quotes").innerHTML = ``;
          //   console.log("ende");
        } else randomQuote(quoteArr);
      }
    };
  });
}

let arrayCopy = [...quotes];
randomQuote(arrayCopy);

function scoreGifs(quoteArr) {
  if (counter === 0) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Better luck next time! </p><img src="https://media1.giphy.com/media/mBjW9bfJeLLwu6Fhyl/giphy.gif"></div>`;
  } else if (counter <= quoteArr.length / 3) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Come on..</p><img src="https://media1.giphy.com/media/26xBKqeFFspRZjDTW/giphy.gif"></div>`;
  } else if (counter >= quoteArr.length / 2) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Not bad, not bad!</p><img src="https://media0.giphy.com/media/jedneOuAEkcgg/giphy.gif"></div>`;
  } else if (counter === quoteArr.length) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Wow, you're a real pro!</p><img src="http://www.reactiongifs.com/r/2013/10/very-nice.gif"></div>`;
  } else {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. You can do better.. but that was </p><img src="https://media2.giphy.com/media/gMfaZ6EXLjBPq/giphy.gif"></div>`;
  }
}
