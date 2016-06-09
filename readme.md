# Music Search Using React and Discogs API

**Overview:** The idea here is that, despite there being lots of apps for tracking digital media, there seems to be very little in the way of keeping track of what *physical* media one owns, e.g. vinyl. This app will allow you to keep track of the different physical albums you own, in case you find yourself in a vinyl store and want a mobile reference of all the albums you currently own to take the guesswork out of purchasing further physical media. 
---
## To Install:

1. in the root of the repository's folder, create a config.js file and type `module.exports = {secret: "whatever your secret key is"};`
2. Also in the root, create a file called secret.js with your Discogs API key that you'll need. Sign up with Discogs to get this. Once you have it, type the following into secret.js, with "whatever" being your key: `module.exports = { APIKey: "whatever" };`
3. Open a terminal window. With node and gulp already set up on your machine, cd into the repository's folder
4. type `npm i`
5. type `gulp && gulp watch || say "it crashed"`
6. open another terminal and, in the same folder, type `nodemon index.js`
---
## To Use:

1. Login using the static username and password, which is "mark" and "password"
2. Type into the search box an artist or album title, and press Return/Enter or click "Let's Go!"
3. A tiled, responsive display of albums will show up. Click on one once to add it to your collection, which will be indicated by the green border around the album selected. 
4. You may add as many albums as you wish to your collection. You may search other artists/albums and add them to your collection as well. 
5. Once you are done adding to your collection, or you otherwise wish to view your collection, click the "My Collection" link towards the top. 
6. On the "My Collection" page, you will see a list of albums you have added. To delete albums from this collection, simply click on one or more of them. The album will have a green border around it and will disappear. To go back to search, click "Back to Search."
---
## Node Routes

GET /
	Login screen, then main page of app

POST /collection
	Add or remove album from collection

GET/ collection
	View collection

GET/ search/artist/:artist
	on submit = connect to discogs, send data
