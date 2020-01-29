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

  var snow = {
	"url": "https://anapioficeandfire.com/api/characters/583",
	"name": "Jon Snow",
	"gender": "Male",
	"culture": "Northmen",
	"born": "In 283 AC",
	"died": "",
	"titles": [
		"Lord Commander of the Night's Watch"
	],
	"aliases": [
		"Lord Snow",
		"Ned Stark's Bastard",
		"The Snow of Winterfell",
		"The Crow-Come-Over",
		"The 998th Lord Commander of the Night's Watch",
		"The Bastard of Winterfell",
		"The Black Bastard of the Wall",
		"Lord Crow"
	],
	"father": "Rheagar Targarian",
	"mother": "Loanna Stark",
	"spouse": "",
	"allegiances": [
		"https://anapioficeandfire.com/api/houses/362"
	],
	"books": [
		"https://anapioficeandfire.com/api/books/5"
	],
	"povBooks": [
		"https://anapioficeandfire.com/api/books/1",
		"https://anapioficeandfire.com/api/books/2",
		"https://anapioficeandfire.com/api/books/3",
		"https://anapioficeandfire.com/api/books/8"
	],
	"tvSeries": [
		"Season 1",
		"Season 2",
		"Season 3",
		"Season 4",
		"Season 5",
		"Season 6"
	],
	"playedBy": [
		"Kit Harington"
	]
}

   var war = {
    name: "Malekith",
    gender: "male",
    culture: "Druchii",
    born: "",
    died: "",
    titles: [
        "Witch King of Naggaroth",
        "The Destroyer"
    ],
    aliases: "",
    father: "Aenarion",
    mother: "Morathi",
    spouse: "",
    allegiances: [
        "Druchii",
        "Naggaroth",
        "Cult of Pleasure"
    ],
    race: "Druchii"
}

console.log(war.race)
console.log(war.father)
console.log(war.allegiances)
console.log(snow.culture)
console.log(snow.name)
console.log(snow.born)

var Jokalith = {
name: war.name,
    gender: snow.gender,
    culture: war.culture,
    born: snow.born,
    died: war.died,
    titles: snow.titles,
    aliases: war.aliases,
    father: snow.father,
    mother: war.mother,
    spouse: snow.spouse,
    allegiances: war.allegiances,
    race: snow.race,
}
console.log(Jokalith)

    
    var queryURL = "https://anapioficeandfire.com/api/characters/583";

    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)

    

    });