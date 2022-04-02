Pre-work - Memory Game
Memory Game is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Mohammed Alamgir

Time spent: 4 hours spent in total

Link to project: (https://glitch.com/edit/#!/careful-dapper-pegasus)

Required Functionality
The following required functionality is complete:

[X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
[X] "Start" button toggles between "Start" and "Stop" when clicked.
[X] Game buttons each light up and play a sound when clicked.
[X] Computer plays back sequence of clues including sound and visual cue for each button
[X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
[X] User wins the game after guessing a complete pattern
[X] User loses the game after an incorrect guess
The following optional features are implemented:

[X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
[X] Buttons use a pitch (frequency) other than the ones in the tutorial
[ ] More than 4 functional game buttons
[X] Playback speeds up on each turn
[X] Computer picks a different pattern each time the game is played
[ ] Player only loses after 3 mistakes (instead of on the first mistake)
[ ] Game button appearance change goes beyond color (e.g. add an image)
[ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
[ ] User has a limited amount of time to enter their guess on each turn
The following additional features are implemented:

[ ] List anything else that you can get done to improve the app!
Video Walkthrough (GIF)
If you recorded multiple GIFs for all the implemented features, you can add them here:
![![](https://i.imgur.com/B1FSla4.gif)
]![](https://i.imgur.com/bGOh3X6.gif)
![](https://i.imgur.com/LVT5cAn.gif)
![](https://i.imgur.com/IyT2HbZ.gif)

![]


Reflection Questions
If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
A. used to implement random pattern after each play //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#browser_compatibility

B. used for changing outline and styling it //w3schools

C. used to add margin on my start and stop button //https://stackoverflow.com/questions/8184958/add-space-between-html-elements-only-using-css]

What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
The hardest part of this submission was the integration with Glitch and Github. When watching the video posted on the pre-work page for linking Glitch to Github, I realized the video was outdated and the features and UI has changed since then. So I had to research on my own to find how to link projects. Other than that, I guess another tough part was when I accidentally added a character in my HTML or CSS file although I cannot remember exactly which one. But this was right after finishing my project, so I had to scramble to find the small error that was causing my code to not work, and this was during me trying to implement a random pattern after each play. Thankfully after taking a few breaths and using console.log I was able to find the error and fix my code. Another error I had was when I was trying to increase the playback speed after every turn. I had to correctly understand the conditional statements I had created because I realized I wasn’t updating my clueHoldTime after the game started again and that I made it speed up incorrectly. Pretty much, I had to take deep breaths whenever I was confused and began searching google, which is what I did to correctly add spacing below my start and stop button as well.

What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
I want to learn more about how to make the web pages even more interactive and beautiful and am interested in how the back-end framework might work if I was for example transferring money or payments instead. Overall, I’m very interested in the technologies used to implement new features and how much pre-planning goes into creating a new project and whole website (ex. search engines). In my mind, now I’m thinking of performance when it comes to web development and optimization between different screen sizes and platforms. What would be best practices to make sure your website is versatile and runs smoothly on a lot of different devices. Are there certain features you shouldn’t use that would lead to your website slowing down? Or if there is an order of implementation and pushing your website that may affect its performance. I’m very surprised at how easy it was to begin creating a website and am just wondering about design principles that come into how a website should look.

If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
The first thing I would do is probably link new sounds that would implement do, re, mi, fa, so into the buttons if clicked on. I would also possibly add additional buttons and 3 strikes so the player has more options. I would focus on making the game also look more aesthetic, possibly changing the shape of the different choices as well so that the user can rely on shape as well to play the game(although this one would be much harder for me). Maybe you could implement a background change feature as well that lets the user click on the top right and it cycles through different background images as the wallpaper for the game. I think that would make the game so much more interesting. Another thing I can think of is adding more buttons as well so that the game is a bit harder. Lastly, maybe there is an easy, medium, and hard option that changes the starting clueHoldTime and how much it decreases each round.

Interview Recording URL Link
https://www.loom.com/share/4dc16b875fc44203a74ebf2cb0112435

License
Copyright [Mohammed Alamgir]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
