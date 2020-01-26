let fs = require("fs");

function main() {
  let content = fs.readFileSync("rap_pesni_meta.json");
  let parsed = JSON.parse(content); 

  let artists = {};
  for (let i = 0; i < parsed.length; i++) {
    parsed[i].artists.forEach( a => { artists[a.artist] = {"name" : a.artist, "artistId" : "https://textove.com/" + a.artistId}});
  }    

  console.log( JSON.stringify(Object.keys(artists).map( a => artists[a] )) );
 
}

main();

