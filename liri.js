var fs = require("fs");
fs.readFile("keys.js", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  let keys = require("./keys.js");
    var consKey = keys.twitterKeys.consumer_key;
    var consSec = keys.twitterKeys.consumer_secret;
    var accKey = keys.twitterKeys.access_token_key;
    var accSec = keys.twitterKeys.access_token_secret;

  var action = process.argv[2];
  var value = process.argv[3];
  switch (action) {
    case "my-tweets":
      twitter();
      break;
    case "spotify-this-song":
      spotify();
      break;
    case "movie-this":
      omdb();
      break;
    case "do-what-it-says":
      random();
      break;
  }

    // *****TWITTER MY-TWEETS***** //
    function twitter() {
      var Twitter = require("twitter");
      var client = new Twitter({
        consumer_key: consKey,
        consumer_secret: consSec,
        access_token_key: accKey,
        access_token_secret: accSec
      });
      var params = {UCI_BootCamp: "nodejs"};
      client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error) {
           console.log(tweets);
        }
      });
    }

    // *****SPOTIFY-THIS-SONG***** //
    function spotify() {
      var spotify = require("spotify");
        if(!value) {
          value = "Ace of Base The sign";
        }
      spotify.search({ type: "track", query: value }, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
     var sPath = data.tracks.items[0];
      // console.log(data);    
      console.log(sPath.album.artists[0].name);
      console.log(sPath.name);
      console.log(sPath.preview_url);
      console.log(sPath.album.name);
    });
    }

    // *****OMDB MOVIE-THIS***** //
    function omdb() {
      var request = require("request");
          if(!value) {
            value = "Mr. Nobody";
          }
      request("http://www.omdbapi.com/?i=tt3896198&apikey=40e9cece&t="+value+"&y=&plot=short&r=json", function(error, response, body) {
          if (!error && response.statusCode === 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year released: " + JSON.parse(body).Year);
            console.log("imdb rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
         }
      });
    }

    // *****RANDOM TXT FILE DO WHAT IT SAYS***** //
    function random() {
      fs.readFile("random.txt", "utf8", function(err, data) {
          if (err) {
              return console.log(err);
          }
          console.log(data);
      })
    }
});