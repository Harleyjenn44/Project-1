 /* random gif generator function */
 const gif = "https://api.giphy.com/v1/gifs/search?api_key=XSXt8Mw82KruMzNHClWNR3VRLvP3nTMO&q=game+of+thrones&limit=2&rating=PG";
const giphy= {
  apiBase: "https://api.giphy.com/v1/gifs/search?",
  apiKey: "XSXt8Mw82KruMzNHClWNR3VRLvP3nTMO",
  query: 'lord+of+the+rings' & "game+of+thrones", 
  limit: "1",
  rating: "PG"
};
//Target containter where gif is
const $gifWrap = $(".gifWrap");
// Giphy API URL
let giphyApi = encodeURI(
  giphy.baseURL +
  "api_key" +
  giphy.apiKey +
  "&q=" +
  giphy.query + 
  "&limit=" +
  giphy.limit + 
  "&rating" +
  giphy.rating
);

//Call giphy API and render data when "onward" button is pressed
var render = () => $.getJSON(gif, json => renderGif(json.data));

//Display gif in container
var renderGif = _giphy => {
  console.log(_giphy);
}

var btn = document.getElementById("endText");

$('#endText').on('click', function(event) {
  renderGif
})