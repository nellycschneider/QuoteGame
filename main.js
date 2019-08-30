let counter = 0;
let wrongAnswers = [];

function randomQuote(quoteArr) {
  let randomQuoteIndex = Math.floor(Math.random() * quoteArr.length);

  document.querySelector(
    ".insert-quote"
  ).innerText = `"${quoteArr[randomQuoteIndex].quote}"`;

  document.querySelector(".bottom-container").innerHTML = quoteArr[
    randomQuoteIndex
  ].answers
    .map(answer => `<button class='answer answer-btn'> ${answer} </button>`)
    .join("");

  //Show full remaining quotes at beginning
  document.getElementById(
    "remaining-quotes"
  ).innerHTML = `<div id="remaining-quotes"><p>Remaining quotes: ${arrayCopy.length}/${quotes.length}</p></div>`;

  //Create possible answers buttons
  document.querySelectorAll(".answer").forEach(answerButton => {
    answerButton.onclick = () => {
      if (answerButton.innerText === quoteArr[randomQuoteIndex].correct) {
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

        quoteArr.splice(randomQuoteIndex, 1);

        remainingQuotes(quotes);

        if (!quoteArr.length) {
          //Scoreboard with gifs
          scoreGifs(quotes);

          document.getElementById("remaining-quotes").innerHTML = ``;
        } else randomQuote(quoteArr);
      }
    };
  });
}

let arrayCopy = [...quotes];
randomQuote(arrayCopy);

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

/////////////// Randomly selected quotes /////////////////////

// let randInd = Math.floor(Math.random() * data.length);

// if (randInd > data.length - 10) {
//   randInd = 0;
// } else {
//   randInd = randInd + 10;
// }
// let quotes = data.slice(randInd, 10);

//////////////////////////////////////////////////////////////

//Change background to random pic

// let backgroundPictures = [
//   "url('https://images.unsplash.com/photo-1452451312475-5055e48f74cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
//   "url('https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
//   "url('https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')",
//   "url('https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80')"
// ];

// function randomPicture(pics) {
//   let randomPicIndex = Math.floor(Math.random() * pics.length);
//   return pics[randomPicIndex];
// }

// function changeBackgroundPicture() {
//   let background = document.querySelector(".gamepage");
//   background.style.backgroundImage = randomPicture(backgroundPictures);
// }

// setInterval(changeBackgroundPicture, 10000);

/////////////////////////////////////////////////////////////////////////////
