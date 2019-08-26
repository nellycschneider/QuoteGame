let quotes = [
  {
    quote:
      "Greater good?’ I am your wife! I’m the greatest good you’re ever gonna get!",
    answers: [
      "Fiona from Shrek",
      "Marge Simpson",
      "Maude Flanders",
      "Frozones' wife",
      "Cinderella"
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
      "Austin Powers"
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
      "Charlie Sheen"
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
  }
];

function randomQuote(quoteArr) {
  let randomQuoteIndex = Math.floor(Math.random() * quotes.length);

  document.querySelector(
    ".insert-quote"
  ).innerText = `"${quoteArr[randomQuoteIndex].quote}"`;

  document.querySelector(
    ".bottom-container"
  ).innerHTML = `<button> ${quoteArr[randomQuoteIndex].answers[randomQuoteIndex]} </button>`;
}

randomQuote(quotes);
