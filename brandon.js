 /* random gif generator function */
const apiKey = "XSXt8Mw82KruMzNHClWNR3VRLvP3nTMO";
const apiBase= "https://api.giphy.com/v1/gifs/search?";
const query= 'lord+of+the+rings'; 
const limit= "25";
const rating= "PG";
const type= "gif";
//Target containter where gif is
const $gifDiv = $("gifDiv");
// Giphy API URL
let giphyApi = encodeURI(
  apiBase +
  "api_key=" +
  apiKey +
  "&q=" +
  query + 
  "&limit=" +
  limit + 
  "&rating=" +
  rating
);

console.log(giphyApi);

//Display gif in container
var render = () => $.getJSON(giphyApi, json => render(json.data[1].original.url));

//Call giphy API and render data when "onward" button is pressed
var btn = document.getElementById("endText");
$('#endText').on('click', function(event) {
var gifImg = $("<gifImg>"); 
gifImg.addClass("gifClass");
gifImg.attr("src",render);
gifDiv.append(gifImg);
})