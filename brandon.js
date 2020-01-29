 /* random gif generator function */
var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=XSXt8Mw82KruMzNHClWNR3VRLvP3nTMO';
var query = ['&q=lord+of+the+rings', '&q=game+of+thrones'];
var limit = '&limit=1'
var btn = 'render'
function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

console.log(setup);

function gotData(data) {
  println(data.data[0].images.original.url);
}

console.log(data);