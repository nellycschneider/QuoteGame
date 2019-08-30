# Quote Game

As part of the Ironhack full time web development bootcamp I am attending at the moment we had to create a game as our first project. 

I decided to make a quiz game using HTML, CSS, JavaScript and DOM manipulation.

# The process

The first thing I did was create and design a homepage/landing page with a link inside a button that will take you to the second HTML file, where you can play the actual game.

After that I started to look up funny quotes and stored them all in a separate object with the quote itself, answer possibilities and the correct answer. All of those objects were stores in one array, where an index is randomly chosen when the user plays the game.

I used JavaScript for DOM manipulation when I'm displaying the quotes and transforming the possible answers to buttons, displaying the remaining quotes counter at the top and showing the score at the end.

# Unsolved problems

I wanted to use DOM for changing the background picture every ten seconds when you play the game. I did manage to do that, but I didn't like how it looked and I didn't know how to make them fade into each other. The code is still in the main.js file, I just commented it out.

I also wanted to have ~100 famous funny quotes and randomly choose 20 of them for one game, but it was harder to find fitting quotes than I thought.

Lastly, I wanted to add a timer, but I couldn't figure out how to reset it after the player chooses an answer possibility. I will probably try to put that feature in at a later time.

