let quotes = [
  {
    quote:
      "Greater good? I am your wife! I’m the greatest good you’re ever gonna get!",
    answers: [
      "Fiona",
      "Marge Simpson",
      "Maude Flanders",
      "Frozones' wife",
      "Cinderella",
      "Kim Kardashian"
    ],
    correct: "Frozones' wife"
  },
  {
    quote:
      "We get the warhead and we hold the world ransom for… One million dollars!",
    answers: [
      "Monty Python",
      "Will Ferrell",
      "Al Capone",
      "Dr. Evil",
      "Austin Powers",
      "Rick Sanchez"
    ],
    correct: "Dr. Evil"
  },
  {
    quote:
      "It’s not a man purse. It’s called a satchel. Indiana Jones wears one.",
    answers: [
      "Kevin Hart",
      "Alan Garner",
      "Z. Galifianakis",
      "Homer Simpson",
      "Charlie Sheen",
      "Deadpool"
    ],
    correct: "Alan Garner"
  },
  {
    quote: "Gentlemen, I wash my hands of this weirdness.",
    answers: [
      "Jack Sparrow",
      "Shakespeare",
      "The Joker",
      "Brucy Wayne",
      "Mr. Burns",
      "Stewie Griffin"
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
      "Freddy Krueger",
      "Queen of Hearts"
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
      "Cruella De Vil",
      "Eric Cartman"
    ],
    correct: "The Godfather"
  },
  {
    quote: "Sub Saharan, can you have 150 child warriors here by 5:00pm?",
    answers: [
      "Will Smith",
      "General Hopper",
      "Bender",
      "Admiral Aladeen",
      "Jack Sparrow",
      "S. Baron Cohen"
    ],
    correct: "Admiral Aladeen"
  },
  {
    quote:
      "Wikipedia is the best thing ever. Anyone in the world can write anything they want about any subject. So you know you are getting the best possible information.",
    answers: [
      "S. Baron Cohen",
      "Dwight Schrute",
      "Phil Dunphy",
      "Michael Scott",
      "Chandler Bing",
      "Cosmo Kramer"
    ],
    correct: "Michael Scott"
  },
  {
    quote:
      "Before I do anything, I ask myself, 'Would an idiot do that?' And, if the answer is yes, I do not do that thing.",
    answers: [
      "Dwight Schrute",
      "Sheldon Cooper",
      "Michael Scott",
      "Danny DeVito",
      "Peter Parker",
      "Butters Scotch"
    ],
    correct: "Dwight Schrute"
  },
  {
    quote:
      "That's it, dishonor! Dishonor on your whole family! Dishonor on you, dishonor on your cow!",
    answers: [
      "Spongebob",
      "Mushu",
      "Frodo Baggins",
      "Eddie Murphy",
      "Danny DeVito",
      "Han Solo"
    ],
    correct: "Mushu"
  },
  {
    quote:
      "When life gives you lemonade, make lemons. Life will be all, ‘Whaaat?’",
    answers: [
      "Stewie Griffin",
      "Michael Scott",
      "Eric Cartman",
      "Phil Dunphy",
      "S. Baron Cohen",
      "Peter Griffin"
    ],
    correct: "Phil Dunphy"
  },
  {
    quote: "Cool, cool, cool, cool, cool. No doubt, no doubt, no doubt.",
    answers: [
      "Charles Boyle",
      "Phil Dunphy",
      "Jake Peralta",
      "Stewie Griffin",
      "Glenn Quagmire",
      "Roger"
    ],
    correct: "Jake Peralta"
  }
];

let counter = 0;
let wrongAnswers = [];
let count = 20;

function resetTime() {
  console.log(count);
}

function randomQuote(quoteArr) {
  let randomQuoteIndex = Math.floor(Math.random() * quoteArr.length);

  document.querySelector(
    ".insert-quote"
  ).innerText = `"${quoteArr[randomQuoteIndex].quote}"`;

  document.querySelector(".bottom-container").innerHTML = quoteArr[
    randomQuoteIndex
  ].answers
    .map(
      answer =>
        `<button onclick='resetTime()' class='answer answer-btn'> ${answer} </button>`
    )
    .join("");

  //Show full remaining quotes at beginning
  document.getElementById(
    "remaining-quotes"
  ).innerHTML = `<div id="remaining-quotes"><p>Remaining quotes: ${arrayCopy.length}/${quotes.length}</p></div>`;

  //Create possible answers buttons
  document.querySelectorAll(".answer").forEach(answerButton => {
    answerButton.onclick = () => {
      if (answerButton.innerText === quoteArr[randomQuoteIndex].correct) {
        // console.log("true");

        quoteArr.splice(randomQuoteIndex, 1);
        counter += 1;

        remainingQuotes(quotes);

        if (!quoteArr.length) {
          //Scoreboard with gifs
          scoreGifs(quotes);

          document.getElementById("remaining-quotes").innerHTML = ``;
        } else {
          randomQuote(quoteArr);
        }
      } else {
        wrongAnswers.push({
          quote: quoteArr[randomQuoteIndex].quote,
          answer: quoteArr[randomQuoteIndex].correct
        });

        // newBackground();

        quoteArr.splice(randomQuoteIndex, 1);

        remainingQuotes(quotes);

        // console.log("nope");
        if (!quoteArr.length) {
          //Scoreboard with gifs
          scoreGifs(quotes);

          document.getElementById("remaining-quotes").innerHTML = ``;

          //   console.log("ende");
        } else randomQuote(quoteArr);
      }
    };
  });
}

let arrayCopy = [...quotes];
randomQuote(arrayCopy);
countdown(count);

function remainingQuotes(arrayCopy) {
  document.getElementById(
    "remaining-quotes"
  ).innerHTML = `<div id="remaining-quotes"><p>Remaining quotes: ${arrayCopy.length}/${quotes.length}</p></div>`;
}

function scoreGifs(quoteArr) {
  if (counter === 0) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Better luck next time! </p><img src="https://media1.giphy.com/media/mBjW9bfJeLLwu6Fhyl/giphy.gif"><button class="btn wrong-btn" onclick="wrongAnswersArr(quotes)">Wrong answers</button><button class="btn try-again-btn" onclick="window.location.reload()">Try again!</button></div>`;
  } else if (counter === quoteArr.length) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Wow, you're a real pro!</p><img src="https://media2.giphy.com/media/hsBZfDG7wiWHu/giphy.gif"></div>`;
  } else if (counter <= quoteArr.length / 3) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Come on..</p><img src="https://media1.giphy.com/media/26xBKqeFFspRZjDTW/giphy.gif"><button class="btn wrong-btn" onclick="wrongAnswersArr(quotes)">Wrong answers</button><button class="btn try-again-btn" onclick="window.location.reload()">Try again!</button></div>`;
  } else if (counter >= quoteArr.length / 2) {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. Not bad, not bad!</p><img src="https://media0.giphy.com/media/jedneOuAEkcgg/giphy.gif"><button class="btn wrong-btn" onclick="wrongAnswersArr(quotes)">Wrong answers</button><button class="btn try-again-btn" onclick="window.location.reload()">Try again!</button></div>`;
  } else {
    document.getElementById(
      "scoreboard"
    ).innerHTML = `<div class="wrapper"><p>You scored ${counter} out of ${quotes.length} points. You can do better.. but that was </p><img src="https://media2.giphy.com/media/gMfaZ6EXLjBPq/giphy.gif"><button class="btn wrong-btn" onclick="wrongAnswersArr(quotes)">Wrong answers</button><button class="btn try-again-btn" onclick="window.location.reload()">Try again!</button></div>`;
  }
}

function wrongAnswersArr() {
  document.getElementById("scoreboard").innerHTML = ``;

  let result = `
  <div class="wrapper">
<table>
  <tr>
    <th>Quote:</th>
    <th>Right answer:</th>
  </tr>
  `;
  console.log(wrongAnswers);
  for (let i = 0; i < wrongAnswers.length; i++) {
    result += `<tr>
           <td>"${wrongAnswers[i].quote}"</td>
           <td>${wrongAnswers[i].answer}</td>
         </tr>`;
  }
  result += `
    </table>
    <button class="btn try-again-btn" onclick="window.location.reload()">Try again!</button>
    </div>`;
  document.getElementById("wrong-answers").innerHTML += result;
}

//Countdown

function countdown() {
  const id = setInterval(function() {
    if (count >= 10) {
      time.innerText = `00:${count}`;
    } else if (count < 10) {
      time.innerText = `00:0${count}`;
    }
    count--;
    if (count === -1) {
      clearInterval(id);
      time.innerText = "";
    }
  }, 1000);
}

// function newBackground() {
//   document.querySelector(".gamepage").style.backgroundImage = randomImage;
// }

// let backgroundImages = [
//   "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80')",
//   "url('https://images.unsplash.com/photo-1512149074996-e923ac45be6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')"
// ];

// let randomImage = Math.floor(Math.random() * backgroundImages.length);
