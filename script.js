   /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
   var dropdown = document.getElementsByClassName("dropdown-btn");
   var i;

   for (i = 0; i < dropdown.length; i++) {
       dropdown[i].addEventListener("click", function () {
           this.classList.toggle("active");
           var dropdownContent = this.nextElementSibling;
           if (dropdownContent.style.display === "block") {
               dropdownContent.style.display = "none";
           } else {
               dropdownContent.style.display = "block";
           }
       });
   }

   // Random GIF generator for story
   $(document).ready(function() {
   var refresh; 
   const duration = 1000 * 10;
   const giphy = {
       baseURL: "https://giphy.com/search/lord-of-the-rings" & "https://giphy.com/search/game-of-thrones",  
        apiKey: "VlrpoAjzBBhIekrh7YojpXOhXG4raUNk",
        tag: "gameOfRings",
        type: "random", 
        rating: "pg-13"
   };

   const $gif_wrap = $("#gif-wrap");

   let giphyURL = encodeURI(
       giphy.baseURL +
       giphy.type +
       "?api_key=" +
       giphy.apiKey +
       "&tag=" +
       giphy.tag +
       "&rating=" +
       giphy.rating
   );

   // Call giphy API and render data 

   var newGif = () => $.getJSON(giphyURL,
    json => renderGif(json.data));

    // Display Gif in gif container 

    var renderGif = _giphy => {
        console.log(_giphy);
        // set gif as bg image
        $gif_wrap.css({
            "background-image": 'url("' + 
            _giphy.imgage_original_url + '")'
        });

        // start duration countdown
        // refreshRate();
    };

    newGif();

    const newGifButton = $('#new-gif');

    newGifButton.click(newGif) 
}); 