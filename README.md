# liri-node-app - LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives back data.
Send requests to the Twitter, Spotify and IMDB APIs to retrieve data. Used the following Node packages:
Twitter
Spotify
Request (to grab OMDB API data)

At the top of the liri.js file, added code to grab the data from keys.js then stored the keys in a variable. Coded so file can take in one of the following commands in the terminal window (node liri.js):

  my-tweets (will show last 20 tweets and when they were created)

  spotify-this-song '<song name here>' (will show the following information about the song)
      The song's name
      A preview link of the song from Spotify
      The album that the song is from
      if no song is provided then your program will default to "The Sign" by Ace of Base

  movie-this '<movie name here>' (will show the following information)
      Title of the movie
      Year the movie came out
      IMDB Rating of the movie
      Country where the movie was produced
      Language of the movie
      Plot of the movie
      Actors in the movie
      Rotten Tomatoes URL
      If user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
      
  do-what-it-says (using the fs Node package - will use random.txt to call one of LIRI's commands. It will run spotify-this-song for "I         Want it That Way,")
