

$(document).ready(() => {
    /* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */

    //    var dropdown = document.getElementsByClassName("dropdown-btn");
    //    var i;

    //    for (i = 0; i < dropdown.length; i++) {
    $(".dropdown-btn").on("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        console.log(dropdownContent);
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    })


    /* random gif generator function */

    $(document).ready(function () {
        $("#render").click(function () {
            var imgSrc;
            var imgId;
            $.ajax({
                url: "api.giphy.com/v1/gifs/search",
                type: "GET",
                dataType: "json",
                success: function (response) {
                    imgSrc = response.data.image_url;
                    imgId = response.data.id;
                    console.log(response);
                    $("#giphy-embed").attr("src", "https://giphy.com/embed/" + imgSrc);
                    $("#tweetButton").attr("href", "https://giphy.com/gifs/" + imgId + "/tweet")
                    return false;
                },
                error: function (e) {
                    console.log("uh oh");
                }
            });
        });
    });