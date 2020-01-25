

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

       });
//    }
});


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("#render");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}})



