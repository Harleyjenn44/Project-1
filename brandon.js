$(document).ready(function(){
    $("#new").click(function() {
      var imgSrc;
      var imgId;
      $.ajax ({
        url: ,
        type: "GET",
        dataType: "json",
        success: function(response) {
          imgSrc = response.data.image_url;
          imgId = response.data.id;
          console.log(response);
          $("#giphy-embed").attr("src", "https://giphy.com/embed/"+imgSrc); 
          }
        });
    });
  });